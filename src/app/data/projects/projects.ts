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
import {
  theBlackhouseRevisitedArticle,
  theBlackhouseRevisitedHomepageCovers,
} from "./the-blackhouse-revisited";

export interface Project {
  description: string;
  id: string;
  src: string;
  article: ProjectContent[];
  homepageCovers: Array<ProjectHomepageCover>;
}

export type ProjectContent =
  | { type: "title"; title: string }
  | { type: "image"; src: string; description?: string; columnWidth?: number }
  | { type: "text"; text: string[]; maxWidth?: number }
  | { type: "newColumn" };

export interface ProjectHomepageCover {
  src: string;
  desktopWidth: number;
  mobileWidth: number;
}

export const PROJECTS: Project[] = [
  {
    description: "The Blackhouse Revisited",
    id: "the-blackhouse-revisited",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/the-blackhouse-revisited/1.webp",
    article: theBlackhouseRevisitedArticle,
    homepageCovers: theBlackhouseRevisitedHomepageCovers,
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
    homepageCovers: [],
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
