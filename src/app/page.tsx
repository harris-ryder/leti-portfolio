import Link from "next/link";

import ImageGallery from "./components/image-gallery";
import { HOME_IMAGES } from "./data/home";

export default function Home() {
  return (
    <div className="grid h-screen w-screen font-arial font-bold">
      <div className="col-start-1 row-start-1 h-full w-full flex flex-col justify-between p-8">
        <div className="flex justify-between">
          <Link href="/">LETI RYDER</Link>
          <Link href="/">CV</Link>
        </div>
        <div className="flex justify-between">
          <Link href="/">PROJECTS</Link>
          <Link href="/">OTHER WORK</Link>
        </div>
      </div>

      <ImageGallery images={HOME_IMAGES} />
    </div>
  );
}
