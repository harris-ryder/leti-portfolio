import {
  tenYearsOfMourningArticle,
  tenYearsOfMourningHomepageCovers,
} from "./10-years-of-mourning";
import {
  birthingHouseForCommuneHomepageCovers,
  birthinHouseForCommuneArticle,
} from "./birthing-house-for-commune";
import {
  housesForPrincetonArticle,
  housesForPrincetonHomepageCovers,
} from "./houses-for-princeton";
import {
  seasonalLivingPodArticle,
  seasonalLivingPodHomepageCovers,
} from "./seasonal-living-pod";
import {
  barcelonaByHandArticle,
  barcelonaByHandHomepageCovers,
} from "./barcelona-by-hand";
import {
  strangeBedfellowsArticle,
  strangeBedfellowsHomepageCovers,
} from "./strange-bedfellows";
import { bermondseyTownHallArticle } from "./bermondsey-town-hall";

export interface Project {
  description: string;
  id: string;
  src: string;
  article: Array<ProjectImage | ProjectText | ProjectTitle>;
  homepageCovers: Array<ProjectHomepageCover>;
}

export interface ProjectTitle {
  title: string;
  newLine: boolean;
}

export interface ProjectImage {
  src: string;
  description: string;
  fit: "contain" | "cover";
  newLine: boolean;
  columnWidth?: number;
}

export interface ProjectText {
  text: string;
  newLine: boolean;
}

export interface ProjectHomepageCover {
  src: string;
  desktopWidth: number;
  mobileWidth: number;
}

export const PROJECTS: Project[] = [
  {
    description: "M.Arch Thesis: the XS",
    id: "thesis-project-xs",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/thesis-project-xs/1.webp",
    article: [],
    homepageCovers: [],
  },
  {
    description: "Seasonal Living Pod",
    id: "seasonal-living-pod",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/1.webp",
    article: seasonalLivingPodArticle,
    homepageCovers: seasonalLivingPodHomepageCovers,
  },
  {
    description: "Houses for Princeton",
    id: "houses-for-princeton",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/houses-for-princeton/4.webp",
    article: housesForPrincetonArticle,
    homepageCovers: housesForPrincetonHomepageCovers,
  },
  {
    description: "Commune Birthing House",
    id: "birthing-house-for-commune",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/birthing-house-for-commune/7.webp",
    article: birthinHouseForCommuneArticle,
    homepageCovers: birthingHouseForCommuneHomepageCovers,
  },
  {
    description: "Barcelona by Hand",
    id: "barcelona-by-hand",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/barcelona-by-hand/2.webp",
    article: barcelonaByHandArticle,
    homepageCovers: barcelonaByHandHomepageCovers,
  },
  {
    description: "Bermondsey Town Hall",
    id: "bermondsey-town-hall",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/bermondsey-town-hall/2.webp",
    article: bermondseyTownHallArticle,
    homepageCovers: [],
  },
  {
    description: "10 Years of Mourning",
    id: "10-years-of-mourning",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/ten-years-of-mourning/8.webp",
    article: tenYearsOfMourningArticle,
    homepageCovers: tenYearsOfMourningHomepageCovers,
  },
  {
    description: "Strange Bedfellows",
    id: "strange-bedfellows",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/strange-bedfellows/10.webp",
    article: strangeBedfellowsArticle,
    homepageCovers: strangeBedfellowsHomepageCovers,
  },
];
