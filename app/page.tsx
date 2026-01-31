"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image src="/bak.jpg" alt="bg" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      {/* HERO LOGO */}
      <div className="absolute top-4 left-20 z-20">
        <Image src="/lig.jpg" alt="logo" width={160} height={160} />
      </div>

      {/* BUTTONS */}
      <div className="relative z-10 flex min-h-screen items-center justify-center -translate-x-10 -translate-y-10">

        <div className="flex gap-5">
          <a
            href="/contact"
            className="px-6 py-2 text-sm bg-cyan-500 text-black rounded-lg hover:scale-105 transition"

          >
            Get a Quote
          </a>
          <a
            href="/projects"
           className="px-6 py-2 text-sm border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"

          >
            View Work
          </a>
        </div>
      </div>

    </div>
  );
}
