import NavigationLayout from "../components/navigation-layout";
import Image from "next/image";

export default function CVPage() {
  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10 flex md:justify-center md:items-center">
        <div className="flex gap-10 md:flex-row flex-col md:h-full">
          {/*Column 1 - About*/}
          <div className="md:flex-1 md:h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">About</h2>
            <p className="font-arial text-sm leading-relaxed">
              Leti Ryder will graduate with an M.Arch from Princeton University
              in May 2026. While at Princeton, she has been a teaching assistant
              for Mario Gandelsonas’ undergraduate Studio and Michael Meredith’s
              Thesis Prep. At Princeton, she has become interested in design at
              the XS scale. This is the basis of her Thesis. She works both by
              hand and digitally.
            </p>

            <p className="font-arial text-sm leading-relaxed">
              In the summer of 2025 she interned at Flores & Prats Architects.
              She has also worked for MOS Architects, primarily on the recently
              released Public Spaces, NY book but also the 2025 Venice Biennale
              and the Building With Writing Stan Allen Exhibition at Princeton
              University. In 2025 Leti developed a research-drawing project of
              Barcelona with Christine Boyer, designed the cover for Pidgin 33
              and won a{" "}
              <a
                className="underline"
                href="https://www.sarany.org/2025-design-awards"
              >
                Design Award of Honor.
              </a>
            </p>

            <p className="font-arial text-sm leading-relaxed">
              Leti has a first-class BA in Architecture from the University of
              Cambridge, where she was a Paul Mickelthwaite Scholar. While at
              Cambridge, she served as President of the Cambridge Union. Through
              this position she designed the{" "}
              <a
                className="underline"
                href="https://issuu.com/thecambridgeunion/docs/termcard_online_final/1"
              >
                Easter Term 2022 termcard
              </a>
              interviewed Stormy Daniels and addressed President Zelenskyy among
              others. At Cambridge she also served as a May Ball set designer,
              an editor for the Arts section of Varsity Newspaper and a
              photographer for ARCSOC.
            </p>
          </div>

          {/*Column 2 - Publications*/}
          <div className="md:flex-1 md:h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">
              Publications
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="font-arial text-sm leading-relaxed whitespace-nowrap">
                  12/ 2025{" "}
                </p>
                <span className="font-arial text-sm leading-relaxed">
                  <a
                    className="underline"
                    href="https://ex-journal.com/ukam-cors"
                  >
                    The E/X Journal
                  </a>{" "}
                  Contributor
                </span>
              </div>

              <div className="flex gap-2">
                <p className="font-arial text-sm leading-relaxed whitespace-nowrap">
                  11/ 2025{" "}
                </p>
                <span className="font-arial text-sm leading-relaxed">
                  <a
                    className="underline"
                    href="https://www.park-books.com/en/produkt/public-spaces-ny/1661"
                  >
                    Public Spaces, NY
                  </a>
                  . MOS. Research Assistant{" "}
                </span>
              </div>

              <div className="flex gap-2 font-arial text-sm leading-relaxed">
                <p className="whitespace-nowrap"> 06/ 2025</p>{" "}
                <p>
                  Everything is in the Process of Becoming Something Else,
                  Venice Biennalle. MOS. Research Assistant{" "}
                </p>
              </div>

              <div className="flex gap-2 font-arial text-sm leading-relaxed">
                <p className="font-arial text-sm leading-relaxed whitespace-nowrap">
                  05/ 2025{" "}
                </p>
                <span>
                  <a
                    className="underline"
                    href="https://www.pidgin.press/shop/p/issue-33"
                  >
                    Pidgin Issue 33
                  </a>
                  . Cover Design{" "}
                </span>
              </div>

              <div className="font-arial text-sm leading-relaxed flex gap-2">
                <p className="whitespace-nowrap">09/ 2024 </p> Photograph
                permanently on display at Prospect House, commissioned by
                Princeton University Art Museum
              </div>
              <span className="font-arial text-sm leading-relaxed flex gap-2">
                <p className="whitespace-nowrap">09/ 2021 </p>
                <span>
                  <a href="https://www.galleriev.com/Live/index.php?option=com_sppagebuilder&view=page&id=14">
                    Mixed Group Show at Gallerie V
                  </a>
                  , Cambridge.
                </span>
              </span>
              <span className="font-arial text-sm leading-relaxed flex gap-2">
                <p className="whitespace-nowrap">05/ 2021 </p>
                <a
                  className="underline"
                  href="https://shop.varsity.co.uk/shop/product/mays-twenty-nine-2021"
                >
                  The Mays 29
                </a>
                . Contributor
              </span>
            </div>
          </div>

          {/*Column 3 - Contact*/}
          <div className="md:flex-1 md:h-full flex flex-col gap-6">
            <h2 className="font-arial font-bold tracking-wider mb-2">
              Contact
            </h2>

            <div className="flex flex-col gap-2">
              <p className="font-arial text-sm leading-relaxed">
                letiryder101@gmail.com
              </p>

              <p className="font-arial text-sm leading-relaxed">
                <a
                  className="underline"
                  href="https://www.instagram.com/letiaryder/"
                >
                  Instagram
                </a>
              </p>
            </div>

            <div className="relative w-full md:mt-auto">
              <Image
                src="https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/misc/2.webp"
                alt="Leti Ryder"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "500px" }}
              />
              <p className="font-arial-italic font-light text-sm text-left mt-2">
                Sketchbook pages from John Soane House
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}
