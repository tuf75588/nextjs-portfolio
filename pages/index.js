import Image from "next/image";

const META_DESC = `A Web Developer from Philadelphia, PA, specializing in React, Next.js, and Tailwind CSS`;
const META_TITLE = `Andrew Davis`;
export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        alt="Four one-eyed aliens playing"
        height={429.734}
        priority
        src="/team-of-critters.svg"
        width={576}
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to your first Next.js site.
      </h2>
    </div>
  );
}
