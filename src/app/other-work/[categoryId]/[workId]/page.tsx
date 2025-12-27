import Image from "next/image";
import { notFound } from "next/navigation";
import NavigationLayout from "../../../components/navigation-layout";
import {
  OTHER_WORK_CATEGORIES,
  OtherWorkText,
} from "../../../data/other-work/other-work";

interface ImagePageProps {
  params: Promise<{
    categoryId: string;
    workId: string;
  }>;
}

function isOtherWorkText(item: any): item is OtherWorkText {
  return "link" in item || "content" in item;
}

export default async function ImagePage({ params }: ImagePageProps) {
  const { categoryId, workId } = await params;

  console.log(categoryId, workId);

  // Find category by matching the id
  const category = OTHER_WORK_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  const image = category.work.find((w) => w.id === workId);

  if (!image) {
    notFound();
  }

  const isText = isOtherWorkText(image);

  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10">
        <div className="min-h-full flex justify-center items-center overflow-scroll-y">
          <div className="max-w-2xl w-fit">
            {isText ? (
              <div
                dangerouslySetInnerHTML={{ __html: image.content || "" }}
                className="prose prose-sm font-arial text-sm leading-relaxed flex flex-col gap-6"
              />
            ) : (
              <>
                <Image
                  src={image.src}
                  alt={image.description}
                  width={1200}
                  height={1200}
                  style={{
                    maxHeight: "calc(100vh - 300px)",
                  }}
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="flex items-center justify-between">
                  <p className="font-arial-italic font-light text-sm text-center">
                    {image.description}
                  </p>
                  <p className="font-arial-italic font-light text-sm text-center mt-2">
                    {image.date}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}
