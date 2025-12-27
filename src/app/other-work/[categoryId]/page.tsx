import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavigationLayout from "../../components/navigation-layout";
import { OTHER_WORK_CATEGORIES, OtherWorkText } from "../../data/other-work/other-work";
import { cn } from "@/app/utils";

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

function isOtherWorkText(item: any): item is OtherWorkText {
  return "link" in item || "content" in item;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  const category = OTHER_WORK_CATEGORIES.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  const imageSizing =
    category.id === "writing" ? "object-contain" : "object-cover";

  return (
    <NavigationLayout>
      <div className="w-full h-full min-h-0 overflow-y-auto p-6 px-10">
        <div className="min-h-full flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.work.map((work, index) => {
              const isText = isOtherWorkText(work);
              const href = isText && work.link ? work.link : `/other-work/${categoryId}/${work.id}`;
              
              return (
                <Link
                  key={index}
                  href={href}
                  className="group cursor-pointer pointer-events-auto"
                >
                <div className="aspect-square overflow-hidden mb-3">
                  <Image
                    src={work.src}
                    alt={work.description}
                    width={700}
                    height={700}
                    className={cn("w-full h-full", imageSizing)}
                  />
                </div>
                <p className="font-arial-italic font-light text-sm text-center">
                  {work.description}
                </p>
              </Link>
              );
            })}
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}
