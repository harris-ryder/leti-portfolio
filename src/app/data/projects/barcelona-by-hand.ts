import { Project, ProjectHomepageCover } from "./projects";

type ProjectArticle = Project["article"];

export const barcelonaByHandHomepageCovers: ProjectHomepageCover[] = [
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/barcelona-by-hand/1.webp",
    desktopWidth: 100,
    mobileWidth: 100,
  },
];

export const barcelonaByHandArticle: ProjectArticle = [
  {
    title: "Barcelona by Hand",
    newLine: false,
  },
  {
    text: ` 
Date: August 2025
`,
    newLine: false,
  },
  {
    text: ` 
Instructor: Christine Boyer
`,
    newLine: false,
  },
  {
    text: ` 
From Pla de Palau to Carrer de Sant Pere Mitjà, Barcelona. 51 drawings collaged.
`,
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/barcelona-by-hand/2.webp",
    description: "Initial collage for living pod shape and entrance, 1’=1/8",
    fit: "cover",
    columnWidth: 800,
    newLine: false,
  },
];
