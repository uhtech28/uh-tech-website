"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden md:block relative min-h-screen">

        <Image src="/bak.jpg" alt="bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Desktop Logo */}
        <div className="absolute top-4 left-20 z-20">
          <Image src="/lig.jpg" alt="logo" width={160} height={160} />
        </div>

        {/* Desktop Buttons */}
        <div className="relative z-10 flex min-h-screen items-center justify-center -translate-x-10 -translate-y-10">
          <div className="flex gap-6">

            {/* ===== GLOW BUTTON ===== */}
            <a href="/contact" className="relative">
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 shadow-[0_0_25px_rgba(255,200,0,0.9)]">
                <div className="px-8 py-3 rounded-xl bg-black/70 backdrop-blur text-white font-semibold hover:bg-black/50 transition">
                  Get a Quote →
                </div>
              </div>
            </a>

            {/* View Work */}
            <a
              href="/projects"
              className="px-6 py-3 text-sm border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
            >
              View Work
            </a>

          </div>
        </div>
      </div>

      {/* ================= MOBILE HERO ================= */}
      <div className="block md:hidden relative min-h-screen">

        <Image src="/mib.jpg" alt="mobile bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />

        {/* Mobile Logo */}
        <div className="absolute top-0 left-16 z-20">
          <Image src="/lig.jpg" alt="logo" width={130} height={130} />
        </div>

        {/* Mobile Buttons */}
        <div className="relative z-20 flex min-h-screen items-center justify-center -translate-y-12 -translate-x-4">
          <div className="flex gap-4">

            {/* ===== MOBILE GLOW BUTTON ===== */}
            <a href="/contact" className="relative">
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 shadow-[0_0_20px_rgba(255,200,0,0.9)]">
                <div className="px-7 py-3 rounded-xl bg-black/70 backdrop-blur text-white font-semibold">
                  Get a Quote →
                </div>
              </div>
            </a>

            <a
              href="/projects"
              className="px-5 py-2 text-sm border border-cyan-400 text-cyan-400 rounded-lg"
            >
              View Work
            </a>

          </div>
        </div>
      </div>

    </div>
  );
}
