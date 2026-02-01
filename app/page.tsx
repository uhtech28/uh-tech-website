"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image src="/bak.jpg" alt="bg" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      {/* HERO LOGO */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 z-20">
        <Image
          src="/lig.jpg"
          alt="logo"
          width={160}
          height={160}
          className="w-24 md:w-40 h-auto"
        />
      </div>

      {/* BUTTONS */}
      <div
        className="
        relative z-10 flex min-h-screen items-center justify-center
        translate-y-16 md:-translate-y-10 md:-translate-x-10
        "
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <a
            href="/contact"
            className="px-5 py-2 text-sm md:px-6 md:py-2
            bg-cyan-500 text-black rounded-lg
            hover:scale-105 transition text-center"
          >
            Get a Quote
          </a>

          <a
            href="/projects"
            className="px-5 py-2 text-sm md:px-6 md:py-2
            border border-cyan-400 text-cyan-400 rounded-lg
            hover:bg-cyan-400/10 transition text-center"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  );
}
