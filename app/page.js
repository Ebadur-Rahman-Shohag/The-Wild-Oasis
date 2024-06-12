import Link from "next/link";
import Image from "next/image";
import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      {/* Background image of mountains and forests with two cabins */}
      <Image
        src={bgImage}
        quality={80}
        placeholder="blur"
        fill
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      {/* Text and link container */}
      <div className="relative z-10 text-center">
        {/* Main heading */}
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        {/* Link to the cabins page */}
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
