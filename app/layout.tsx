"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./globals.css";

const menu = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const startX = useRef(0);

  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">

        {/* MENU BUTTON (HIDES WHEN OPEN) */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="fixed top-4 left-4 z-50 w-11 h-11 bg-white rounded-lg flex flex-col items-center justify-center gap-1"
          >
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 bg-black"></span>
          </button>
        )}

        {/* OVERLAY */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}

        {/* SIDEBAR */}
        <aside
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (startX.current - e.changedTouches[0].clientX > 50) {
              setOpen(false);
            }
          }}
          className={`fixed top-0 left-0 h-full w-72 bg-black z-50 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* LOGO + TEXT */}
          <div className="mt-8 mb-12 flex items-center gap-3 px-6 text-3xl font-extrabold text-cyan-400">
            <Image src="/lig.jpg" alt="logo" width={36} height={36} />
            UH TECH
          </div>

          {/* MENU LINKS */}
          <nav className="flex flex-col gap-6 px-6 text-xl font-bold">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl border border-transparent transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-cyan-500 text-black"
                    : "text-white hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        <main>{children}</main>

      </body>
    </html>
  );
}
