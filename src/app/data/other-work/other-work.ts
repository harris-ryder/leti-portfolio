import { COLLAGES } from "./collages";
import { DRAWING_AND_PAINTING } from "./drawing-and-painting";
import { PHOTOGRAPHY } from "./photography";
import { WRITING } from "./writing";

export interface OtherWorkImage {
  id: string;
  src: string;
  description: string;
  date: string;
}

export interface OtherWorkText {
  id: string;
  src: string;
  description: string;
  link?: string;
  content?: string; // If there is a link content isn't needed
}

export interface OtherWork {
  id: string;
  description: string;
  src: string;
  work: Array<OtherWorkImage> | Array<OtherWorkText>;
}

export const OTHER_WORK_CATEGORIES: Array<OtherWork> = [
  {
    id: "collages",
    description: "Collages",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/collages/1.webp",
    work: COLLAGES,
  },
  {
    id: "drawing-and-painting",
    description: "Drawing and Painting",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/drawing-and-painting/1.webp",
    work: DRAWING_AND_PAINTING,
  },
  {
    id: "photography",
    description: "Photography",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/photography/1.webp",
    work: PHOTOGRAPHY,
  },
  {
    id: "writing",
    description: "Writing",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/1.webp",
    work: WRITING,
  },
];
