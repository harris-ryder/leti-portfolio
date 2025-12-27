import { OtherWorkText } from "./other-work";
import { aCityCanBeAMutualFriend } from "./writing/a-city-can-be-a-mutual-friend";
import { notesOnCanalSt } from "./writing/notes-on-canal-st";
import { theFutureOfTheBuiltEnvironment } from "./writing/the-future-of-the-built-environment";

export const WRITING: Array<OtherWorkText> = [
  {
    id: "warmer-toastier-sexier",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/7.webp",
    description: "Warmer, Toastier, Sexier",
    link: "https://www.warmertoastiersexier.com",
  },
  {
    id: "a-city-can-be-a-mutual-friend",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/2.webp",
    description: "A City can be a Mutual Friend",
    content: aCityCanBeAMutualFriend,
  },
  {
    id: "notes-on-canal-st",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/4.webp",
    description: "Notes on Canal St",
    content: notesOnCanalSt,
  },
  {
    id: "the-future-of-the-built-environment",
    src: "https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/other-work/writing/3.webp",
    description: "The Future of the Built Environment",
    content: theFutureOfTheBuiltEnvironment,
  },
];
