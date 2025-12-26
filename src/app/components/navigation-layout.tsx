import Link from "next/link";

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100dvh] w-screen font-arial font-bold overflow-hidden">
      <div className="h-full w-full flex flex-col justify-between py-9">
        <div className="flex justify-between pointer-events-auto tracking-wider px-10">
          <Link href="/">LETI RYDER</Link>
          <Link href="/">CV</Link>
        </div>
        <div className="flex-1 min-h-0 w-full">{children}</div>
        <div className="flex justify-between pointer-events-auto tracking-wider px-10">
          <Link href="/projects">PROJECTS</Link>
          <Link href="/other-work">OTHER WORK</Link>
        </div>
      </div>
    </div>
  );
}
