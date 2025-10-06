"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#0f0f0f] opacity-90" />

      {/* Top Logo */}
      <a  href="/portfolio" className="hover:opacity-50 transition-transform duration-500 hover:scale-105" >

      <img
        src="/logo.png"
        alt="Wedegital Logo" 
        className="w-36 md:w-48 mb-12 z-10 opacity-90 "
      />    
   </a>
      {/* Main Content */}
      <div className="z-10 text-center max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
          Have a project in mind? Let’s bring your ideas to life with powerful visual storytelling.
          Reach us anytime through Telegram or WhatsApp — we respond fast.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Telegram */}
          <a
            href="https://t.me/abelaxv" // 🔗 Replace with your actual Telegram link
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-56 py-3 rounded-full border border-yellow-400/50 hover:border-yellow-300 hover:bg-yellow-400/10 transition duration-300"
          >
            <span className="text-yellow-300 font-semibold text-lg">Telegram</span>
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 text-yellow-400 transition">→</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/251974146784" // 🔗 Replace with your full WhatsApp number (no +)
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-56 py-3 rounded-full border border-green-500/50 hover:border-green-400 hover:bg-green-500/10 transition duration-300"
          >
            <span className="text-green-400 font-semibold text-lg">WhatsApp</span>
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 text-green-400 transition">→</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-600 text-sm">
          <p>📍 Wedegital Studio — Visual FX & Creative Ads</p>
          <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
