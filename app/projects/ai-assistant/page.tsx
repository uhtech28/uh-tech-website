"use client";

export default function AIClothesTryOn() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/ser.jpg"
          alt="AI project background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* CONTENT */}
      <div className="text-center px-6 max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6">
          AI-Based Virtual Clothes Try-On System
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          An intelligent platform that allows users to preview clothing on their own
          body image before purchase using Artificial Intelligence and Computer Vision.
        </p>

        {/* COMING SOON BOX */}
        <div
          className="
            border border-cyan-400 
            rounded-2xl 
            px-12 py-12 
            bg-black/60 
            backdrop-blur-md 
            flex flex-col 
            items-center 
            justify-center 
            text-center
            shadow-[0_0_20px_rgba(34,211,238,0.35)]
          "
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-widest mb-6 animate-fadeBlink flex items-center gap-3">
            COMING SOON... <span>🚀</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            This project is currently under development and will be launched very soon.
          </p>
        </div>

      </div>
    </div>
  );
}
