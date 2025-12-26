import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[400px] md:w-[400px]">
        <p className="font-arial-italic font-normal text-left mb-2">
          Under Construction
        </p>
        <Image
          src="https://6rsxeq3ze0cbeqvf.public.blob.vercel-storage.com/projects/seasonal-living-pod/8.webp"
          alt="Under Construction"
          width={400}
          height={400}
          className="mb-2 w-full h-auto"
        />
        <div className="text-right">
          <Link href="/" className="font-arial-italic font-normal hover:underline">
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}