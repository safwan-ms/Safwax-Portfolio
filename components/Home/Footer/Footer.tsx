"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#0b0f20] border-t border-white/10 relative overflow-hidden">
      <div className="text-center">
        <p className="text-gray-400 font-mono text-sm">
          © {new Date().getFullYear()} safwax. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
