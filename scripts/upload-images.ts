/**
 * Upload a folder of images to Vercel Blob storage.
 *
 * Usage:
 *   npm run upload-images -- <folder> [options]
 *
 * Options:
 *   --prefix <path>     Blob path prefix (default: "projects/<folder name>")
 *   --sequential        Rename files to 1.<ext>, 2.<ext>, ... in alphabetical order,
 *                        matching the numbering convention used in src/app/data/projects
 *   --concurrency <n>   Number of parallel uploads (default: 4)
 *   --manifest <path>   Write a JSON manifest of { originalFile: url } to this path
 *   --no-overwrite      Fail instead of overwriting an existing blob at the same path
 *   --dry-run           List what would be uploaded without uploading anything
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment (or a .env.local file).
 * Find it in the Vercel dashboard: Storage -> your Blob store -> ".env.local" tab.
 *
 * Example (uploads ./assets/seasonal-living-pod/*.webp as 1.webp, 2.webp, ...
 * to projects/seasonal-living-pod/ so the URLs match the existing convention in
 * src/app/data/projects/seasonal-living-pod.ts):
 *
 *   npm run upload-images -- ./assets/seasonal-living-pod \
 *     --prefix projects/seasonal-living-pod --sequential --manifest manifest.json
 */

import { config as loadEnv } from "dotenv";
import { put } from "@vercel/blob";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

loadEnv({ path: ".env.local" });
loadEnv();

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".svg",
]);

interface Options {
  folder: string;
  prefix: string;
  sequential: boolean;
  concurrency: number;
  manifest?: string;
  overwrite: boolean;
  dryRun: boolean;
}

function printUsageAndExit(): never {
  console.log(`
Usage:
  npm run upload-images -- <folder> [options]

Options:
  --prefix <path>     Blob path prefix (default: "projects/<folder name>")
  --sequential        Rename files to 1.<ext>, 2.<ext>, ... in alphabetical order
  --concurrency <n>   Number of parallel uploads (default: 4)
  --manifest <path>   Write a JSON manifest of { originalFile: url } to this path
  --no-overwrite      Fail instead of overwriting an existing blob at the same path
  --dry-run           List what would be uploaded without uploading anything

Requires BLOB_READ_WRITE_TOKEN in the environment or .env.local.
`);
  process.exit(1);
}

function parseArgs(argv: string[]): Options {
  const [folder, ...rest] = argv;
  if (!folder || folder.startsWith("-")) {
    printUsageAndExit();
  }

  const options: Options = {
    folder,
    prefix: `projects/${path.basename(folder)}`,
    sequential: false,
    concurrency: 4,
    overwrite: true,
    dryRun: false,
  };

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    switch (arg) {
      case "--prefix":
        options.prefix = rest[++i];
        break;
      case "--sequential":
        options.sequential = true;
        break;
      case "--concurrency":
        options.concurrency = Number(rest[++i]);
        break;
      case "--manifest":
        options.manifest = rest[++i];
        break;
      case "--no-overwrite":
        options.overwrite = false;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--help":
      case "-h":
        printUsageAndExit();
        break;
      default:
        console.error(`Unknown argument: ${arg}`);
        printUsageAndExit();
    }
  }

  if (!options.prefix || Number.isNaN(options.concurrency)) {
    printUsageAndExit();
  }

  return options;
}

async function collectImageFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImageFiles(fullPath)));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<void>
): Promise<void> {
  let cursor = 0;

  async function next(): Promise<void> {
    const index = cursor++;
    if (index >= items.length) return;
    await worker(items[index], index);
    return next();
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, next));
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const folderStat = await stat(options.folder).catch(() => null);
  if (!folderStat?.isDirectory()) {
    console.error(`"${options.folder}" is not a directory.`);
    process.exit(1);
  }

  if (!options.dryRun && !process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local or export it in your shell.\n" +
        "Find it in the Vercel dashboard under Storage -> your Blob store -> .env.local tab."
    );
    process.exit(1);
  }

  const files = await collectImageFiles(options.folder);
  if (files.length === 0) {
    console.log(`No images found in "${options.folder}".`);
    return;
  }

  const prefix = options.prefix.replace(/\/+$/, "");
  const uploads = files.map((filePath, index) => {
    const relative = path.relative(options.folder, filePath).split(path.sep).join("/");
    const destName = options.sequential
      ? `${index + 1}${path.extname(filePath)}`
      : relative;
    return { filePath, relative, pathname: `${prefix}/${destName}` };
  });

  console.log(`Found ${uploads.length} image(s) in "${options.folder}".`);
  console.log(
    `Uploading to prefix "${prefix}"${options.dryRun ? " (dry run)" : ""}.\n`
  );

  const manifest: Record<string, string> = {};
  let failures = 0;

  await runWithConcurrency(uploads, options.concurrency, async ({ filePath, relative, pathname }) => {
    if (options.dryRun) {
      console.log(`  would upload: ${relative} -> ${pathname}`);
      return;
    }

    try {
      const body = await readFile(filePath);
      const blob = await put(pathname, body, {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: options.overwrite,
      });
      manifest[relative] = blob.url;
      console.log(`  uploaded: ${relative} -> ${blob.url}`);
    } catch (error) {
      failures++;
      console.error(`  failed: ${relative} -> ${(error as Error).message}`);
    }
  });

  if (options.manifest && !options.dryRun) {
    await writeFile(options.manifest, JSON.stringify(manifest, null, 2));
    console.log(`\nWrote manifest to ${options.manifest}`);
  }

  if (failures > 0) {
    console.error(`\n${failures} upload(s) failed.`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
