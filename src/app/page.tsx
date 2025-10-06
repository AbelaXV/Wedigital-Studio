"use client";
import { useState } from "react";
import Link from "next/link";

// ✅ Define package type (fixes TypeScript error)
type PackageType = {
  title: string;
  price: string;
  delivery: string;
  features: string[];
  link: string;
  badge?: string; // optional
};

export default function Home() {
  const [showRetainer, setShowRetainer] = useState(false);

  const singlePackages: PackageType[] = [
    {
      title: "Basic VFX Package",
      price: "10K–15K birr",
      delivery: "3–5 Days",
      features: [
        "Basic visual effects & color correction",
        "Static tripod-based shots",
        "Full HD export",
        "Simple motion graphics",
        "Basic sound design",
        "1 minor revision",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Basic+VFX+Single",
    },
    {
      title: "Advanced VFX Package",
      price: "15K–20K birr",
      delivery: "3–5 Days",
      features: [
        "All features in Basic",
        "Camera movement & transitions",
        "Particle / Cloth simulations",
        "Dynamic lighting & color grading",
        "4K Render Available",
        "2 minor revision",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Advanced+VFX+Single",
    },
    {
      title: "Premium VFX Package",
      price: "20K–30K birr",
      delivery: "4–7 Days",
      features: [
        "All features in Advanced",
        "Model/subject interaction",
        "Cinematic lighting & motion path",
        "Optional branded props",
        "Priority production & delivery",
        "Unlimited minor revisions",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Premium+VFX+Single",
    },
  ];

  const retainerPackages: PackageType[] = [
    {
      title: "Basic VFX Retainer",
      price: "37K birr / month",
      delivery: "4 videos / month",
      features: [
        "4 Basic videos monthly",
        "Basic VFX & color correction",
        "Static tripod shots, Full HD",
        "Simple motion graphics & SFX",
        "1 minor revision",
        "20% discount vs single purchase",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Basic+VFX+Retainer",
    },
    {
      title: "Advanced VFX Retainer",
      price: "50K birr / month",
      delivery: "4 videos / month",
      features: [
        "4 Advanced videos monthly",
        "All features in Basic",
        "Camera movement & transitions",
        "Particle / Cloth simulations",
        "Dynamic lighting & color grading",
        "4K render Quality",
        "Advanced motion graphics & SFX",
        "2 minor revision",
        "30% discount vs single purchase",
      ],
      badge: "Best Deal", // ✅ This one gets the badge
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Advanced+VFX+Retainer",
    },
    {
      title: "Premium VFX Retainer",
      price: "75K birr / month",
      delivery: "4 videos / month",
      features: [
        "4 Premium videos per month",
        "All features in Advanced",
        "4K Ultra HD / Cinematic Quality",
        "Models & storytelling",
        "Custom branded assets & props",
        "Priority production & delivery",
        "Premium motion graphics & SFX",
        "Unlimited minor revisions",
        "25% discount vs single purchase",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNjF__Avi9aIOXhXTBl68pTkMkjguCfC1Ps4Ki6vFLcnGe6Q/viewform?usp=pp_url&entry.1600566181=Premium+VFX+Retainer",
    },
  ];

  const packages = showRetainer ? retainerPackages : singlePackages;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 pb-16">
      {/* === NAVBAR === */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-16 bg-black/30 backdrop-blur-md fixed top-0 z-50 border-b border-gray-800 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
        {/* Logo */}
        <div className="flex-1 flex justify-start md:justify-center">
          <img
            src="/logo.png"
            alt="Wedegital Logo"
            className="w-40 md:w-48 hover:opacity-90 transition-transform hover:scale-105"
          />
        </div>

        {/* Nav links */}
        <div className="absolute right-8 flex items-center gap-8 text-sm font-medium">
          <Link href="/portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* === PAGE CONTENT === */}
      <div className="pt-48 w-full flex flex-col items-center">
        {/* Toggle Button */}
        <div className="flex items-center gap-4 mb-12 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-gray-800 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
          <span
            className={`text-sm font-medium cursor-pointer ${
              !showRetainer ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => setShowRetainer(false)}
          >
            Single Packages
          </span>
          <div
            onClick={() => setShowRetainer(!showRetainer)}
            className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer"
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all ${
                showRetainer ? "translate-x-6 bg-yellow-400" : "bg-gray-400"
              }`}
            ></div>
          </div>
          <span
            className={`text-sm font-medium cursor-pointer ${
              showRetainer ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => setShowRetainer(true)}
          >
            Retainer Packages (25–30% Off)
          </span>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {packages.map((pkg, index) => {
            const isBestDeal = pkg.badge === "Best Deal";
            return (
              <div
                key={index}
                className={`relative bg-black/60 border rounded-2xl p-8 transition duration-300 ${
                  isBestDeal
                    ? "border-yellow-500 shadow-[0_0_40px_rgba(255,215,0,0.4)]"
                    : "border-gray-800 hover:border-yellow-400/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]"
                }`}
              >
                {/* Gold Glow Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 rounded-t-2xl opacity-70" />

                {/* Best Deal Badge */}
                {isBestDeal && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-pulse">
                    ⭐ Best Deal
                  </div>
                )}

                <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>
                <p className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-gray-400 mb-6">{pkg.delivery}</p>

                <ul className="text-gray-300 text-sm space-y-2 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition ${
                    isBestDeal
                      ? "border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-400"
                      : "border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black"
                  }`}
                >
                  Subscribe Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
