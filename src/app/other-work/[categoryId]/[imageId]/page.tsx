import Image from "next/image";
import { notFound } from "next/navigation";
import NavigationLayout from "../../../components/navigation-layout";
import { OTHER_WORK_CATEGORIES } from "../../../data/other-work/other-work";

interface ImagePageProps {
  params: Promise<{
    categoryId: string;
    imageId: string;
  }>;
}

export default async function ImagePage({ params }: ImagePageProps) {
  const { categoryId, imageId } = await params;

  // Find category by matching the id
  const category = OTHER_WORK_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  // Find the specific image in the category
  const image = category.work.find((w) => w.id === imageId);

  if (!image) {
    notFound();
  }

  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10">
        <div className="min-h-full flex justify-center items-center">
          <div className="max-w-4xl w-full">
            <Image
              src={image.src}
              alt={image.description}
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
            <p className="font-arial-italic font-light text-sm text-center mt-4">
              {image.description}
            </p>
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}