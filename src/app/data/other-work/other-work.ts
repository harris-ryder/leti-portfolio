export interface OtherWorkImage {
  id: string;
  src: string;
  description: string;
}

export interface OtherWork {
  id: string;
  description: string;
  src: string;
  work: Array<OtherWorkImage>;
}

export const OTHER_WORK_CATEGORIES: Array<OtherWork> = [
  {
    id: "collages",
    description: "Collages",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/collages/1.webp",
    work: [
      {
        id: "collages-1",
        src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/collages/1.webp",
        description: "Collage 1",
      },
    ],
  },
  {
    id: "drawing-and-painting",
    description: "Drawing and Painting",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/drawing-and-painting/1.webp",
    work: [
      {
        id: "drawing-and-painting-1",
        src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/drawing-and-painting/1.webp",
        description: "Drawing and Painting 1",
      },
    ],
  },
  {
    id: "photography",
    description: "Photography",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/photography/1.webp",
    work: [
      {
        id: "drawing-and-painting-1",
        src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/drawing-and-painting/1.webp",
        description: "Drawing and Painting 1",
      },
    ],
  },
  {
    id: "writing",
    description: "Writing",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/1.webp",
    work: [
      {
        id: "drawing-and-painting-1",
        src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/drawing-and-painting/1.webp",
        description: "Drawing and Painting 1",
      },
    ],
  },
];
