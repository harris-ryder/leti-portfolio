import Link from "next/link";

import ImageViewer from "./components/image-viewer";

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

      <div className="col-start-1 row-start-1 place-self-center">
        <ImageViewer
          src="https://drive.google.com/uc?export=view&id=1aQj6JCVc515Fldllm887yHZ4cVoCC8Wj"
          description="Home"
          desktop={{ size: 1000, constraint: "width" }}
          mobile={{ size: 500, constraint: "width" }}
        />
      </div>
    </div>
  );
}
