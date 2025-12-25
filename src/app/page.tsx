import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen w-screen">
      <div className="col-start-1 row-start-1 h-full w-full flex flex-col justify-between">
        <div className="flex justify-between">
          <Link href="/">LETI RYDER</Link>
          <Link href="/">CV</Link>
        </div>
        <div className="flex justify-between">
          <Link href="/">PROJECTS</Link>
          <Link href="/">OTHER WORK</Link>
        </div>
      </div>

      <div className="col-start-1 row-start-1 place-self-center">
        <span className="px-3 py-1 rounded bg-black/60 text-white">
          Overlay
        </span>
      </div>
    </div>
  );
}
