import NavigationLayout from "../components/navigation-layout";
import Image from "next/image";

export default function CVPage() {
  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10 flex sm:justify-center sm:items-center">
        <div className="flex gap-10 sm:flex-row flex-col">
          {/*Column 1 - About*/}
          <div className="flex-1 h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">About</h2>
            <p className="font-arial text-sm leading-relaxed">
              Leti Ryder is a writer and artist based in London. She is the
              author of the book <i>The Art of the Brick</i> and the founder of
              the art collective <i>The Brick House</i>.
            </p>

            <p className="font-arial text-sm leading-relaxed">
              Leti Ryder is a writer and artist based in London. She is the
              author of the book <i>The Art of the Brick</i> and the founder of
              the art collective <i>The Brick House</i>.
            </p>

            <p className="font-arial text-sm leading-relaxed">
              Leti Ryder is a writer and artist based in London. She is the
              author of the book <i>The Art of the Brick</i> and the founder of
              the art collective <i>The Brick House</i>.
            </p>
          </div>

          {/*Column 2 - Publications*/}
          <div className="flex-1 h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">
              Publications
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-arial text-sm leading-relaxed">2025 Yeet</p>
              <p className="font-arial text-sm leading-relaxed">2024 Yeet</p>
              <p className="font-arial text-sm leading-relaxed">2023 Yeet</p>
            </div>
          </div>

          {/*Column 3 - Contact*/}
          <div className="flex-1 h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">
              Contact
            </h2>

            <div className="flex flex-col gap-2">
              <p className="font-arial text-sm leading-relaxed">Email</p>
              <p className="font-arial text-sm leading-relaxed">
                letiryder@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-arial text-sm leading-relaxed">Phone</p>
              <p className="font-arial text-sm leading-relaxed">
                +44 7777 777777
              </p>
            </div>

            <div className="relative w-full">
              <Image
                src="https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/misc/2.webp"
                alt="Leti Ryder"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <p className="font-arial-italic font-light text-sm text-left">
              Caption ...
            </p>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}
