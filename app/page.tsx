"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden md:block relative min-h-screen">

        {/* Desktop Background */}
        <Image src="/bak.jpg" alt="bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Logo */}
        <div className="absolute top-4 left-20 z-20">
          <Image src="/lig.jpg" alt="logo" width={160} height={160} />
        </div>

        {/* Buttons */}
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

      {/* ================= MOBILE HERO ================= */}
      <div className="block md:hidden relative min-h-screen">

        {/* Mobile Background */}
        <Image src="/mob.jpg" alt="mobile bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Mobile Logo */}
        <div className="relative z-20 flex justify-center pt-8">
          <Image src="/lig.jpg" alt="logo" width={110} height={110} />
        </div>

        {/* Mobile Buttons */}
        <div className="relative z-20 flex flex-col items-center mt-6 gap-4">
          <a
            href="/contact"
            className="px-6 py-2 text-sm bg-cyan-500 text-black rounded-lg"
          >
            Get a Quote
          </a>
          <a
            href="/projects"
            className="px-6 py-2 text-sm border border-cyan-400 text-cyan-400 rounded-lg"
          >
            View Work
          </a>
        </div>
      </div>

    </div>
  );
}
