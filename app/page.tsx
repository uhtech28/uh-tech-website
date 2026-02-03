"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* ================= DESKTOP HERO ================= */}
<div className="hidden md:flex relative min-h-screen items-center justify-center">

  <Image
    src="/bock.jpg"
    alt="bg"
    fill
    priority
    className="object-cover object-top scale-96"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/10" />

  {/* Desktop Logo */}
  <div className="absolute top-1 right-1 z-20">
    <Image src="/lig.jpg" alt="logo" width={60} height={60} />
  </div>

  {/* Desktop Buttons */}
 <div className="absolute left-24 top-1/2 -translate-y-1/2 -translate-x-[2.5rem] -translate-y-[8.5rem] scale-[0.90] z-10">


    <div className="flex gap-6">
      <a href="/contact" className="relative">
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 shadow-[0_0_30px_rgba(255,180,0,0.9)]">
          <div className="px-8 py-3 rounded-xl bg-black/60 backdrop-blur text-white font-semibold hover:bg-black/40 transition">
            Get a Quote →
          </div>
        </div>
      </a>

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
<div className="flex md:hidden relative min-h-screen w-full overflow-hidden">

 <div className="relative md:hidden w-full h-screen bg-black">

  <Image
    src="/mol.jpg"
    alt="mobile bg"
    fill
    priority
    className="object-contain object-center scale-[1.3]"
  />

</div>
  {/* Mobile Logo (overlay only) */}
  <div className="absolute top-1 right-1 z-20">
    <Image src="/lig.jpg" alt="logo" width={80} height={80} />
  </div>

 {/* Mobile Buttons */}
<div className="absolute inset-0 z-20 flex items-center justify-center 
                -translate-x-[2.4rem] translate-y-[-1.8rem] scale-[0.85]">
  <div className="flex gap-3">

    <a href="/contact" className="relative">
      <div className="p-[2px] rounded-lg bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 shadow-[0_0_20px_rgba(255,180,0,0.9)]">
        <div className="px-4 py-2 rounded-lg bg-black/70 backdrop-blur text-white text-sm font-semibold">
          Get a Quote →
        </div>
      </div>
    </a>
      <a
        href="/projects"
        className="px-4 py-1.5 text-xs border border-cyan-400 text-cyan-400 rounded-md"
      >
        View Work
      </a>

    </div>
  </div>

</div>
    </div>
  );
}
