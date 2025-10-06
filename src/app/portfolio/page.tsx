"use client";
import { useState } from "react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const works = [
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/01.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/02.mp4" },
    { title: "Indomie Ethiopia", category: "Client Projects", src: "/portfolio/002.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/03.mp4" },
    { title: "Stika Gum", category: "Client Projects", src: "/portfolio/004.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/04.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/05.mp4" },
    { title: "Stika Gum", category: "Client Projects", src: "/portfolio/005.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/06.mp4" },
    { title: "MK Perfume", category: "Client Projects", src: "/portfolio/07.mp4" },
    { title: "MK Perfume  ", category: "Client Projects", src: "/portfolio/08.mp4" },
    
  ];

  const categories = ["All", "Client Projects", "Dribbble", "Opensource", "Clients", "Awards"];
  const filteredWorks =
    filter === "All" ? works : works.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#111111] relative text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-yellow-500/20 bg-black/40 backdrop-blur-md sticky top-0 z-20">
        {/* Logo Left */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Wedegital Logo"
            className="w-40 opacity-90 hover:opacity-100 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Navigation Right */}
        <nav className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="/portfolio" className="text-yellow-400 font-semibold">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Filter */}
        <aside className="w-48 border-r border-yellow-500/20 p-6 hidden md:block sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer text-sm transition ${
                  filter === cat
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-500 hover:text-yellow-200"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* TikTok-Style Vertical Grid */}
        <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center overflow-y-auto">
          {filteredWorks.map((work, index) => (
            <div
              key={index}
              className="relative group bg-[#111]/60 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400/60 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 w-[250px] aspect-[9/16]"
            >
              <video
                src={work.src}
                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition"
                loop
                muted
                autoPlay
                playsInline
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-base font-semibold text-yellow-400">
                  {work.title}
                </h2>
                <p className="text-xs text-gray-400">{work.category}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
