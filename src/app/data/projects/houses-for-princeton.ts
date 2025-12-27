import { Project, ProjectHomepageCover } from "./projects";

type ProjectArticle = Project["article"];

export const housesForPrincetonHomepageCovers: ProjectHomepageCover[] = [
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/1.webp",
    desktopWidth: 60,
    mobileWidth: 100,
  },
];

export const housesForPrincetonArticle: ProjectArticle = [
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/2.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    newLine: false,
  },
  {
    title: "Houses For Princeton",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/1.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    columnWidth: 900,
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/3.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/4.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/5.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    newLine: false,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/6.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    newLine: false,
  },
];
