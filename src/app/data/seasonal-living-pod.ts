import {
  Project,
  ProjectHomepageCover,
  ProjectImage,
  ProjectText,
} from "./projects";

type ProjectArticle = Project["article"];

export const seasonalLivingPodArticle: ProjectArticle = [
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/1.webp",
    description: "Exterior view of the living pod in summer configuration",
    fit: "cover",
    newLine: false,
  },
  {
    title: "Seasonal Living Pod",
    newLine: false,
  },
  {
    text: "The Seasonal Living Pod explores the relationship between temporary architecture and the cyclical nature of human habitation. This project challenges conventional notions of permanence in residential design.",
    newLine: true,
  },
  {
    text: "Designed as a modular system, the pod adapts to seasonal changes through a series of transformable panels and adjustable ventilation systems. The structure responds to environmental conditions while maintaining a minimal footprint.",
    newLine: false,
  },
  {
    text: "Each season brings a different configuration: expanded outdoor living spaces in summer, insulated cocoon-like interiors for winter, and transitional arrangements for spring and autumn.",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/2.webp",
    description: "Interior perspective showing flexible living space",
    fit: "cover",
    newLine: false,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/3.webp",
    description: "Detail of the transformable panel system",
    fit: "cover",
    newLine: true,
  },
  {
    text: "Materials were selected for their durability and environmental responsiveness: locally sourced timber, recycled aluminum cladding, and high-performance glazing that can be completely opened or sealed depending on weather conditions.",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/4.webp",
    description: "Axonometric drawing showing seasonal configurations",
    fit: "contain",
    newLine: true,
  },
  {
    text: "The project addresses critical questions about resource efficiency and adaptive living, proposing an architecture that evolves with its inhabitants' needs throughout the year.",
    newLine: false,
  },
  {
    text: "By embracing impermanence and change, the Seasonal Living Pod offers a new paradigm for sustainable residential design in varying climatic conditions.",
    newLine: true,
  },
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/5.webp",
    description: "Night view showing illuminated interior",
    fit: "contain",
    newLine: true,
  },
];

export const seasonalLivingPodHomepageCovers: ProjectHomepageCover[] = [
  {
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/1.webp",
    width: 32,
  },
];
