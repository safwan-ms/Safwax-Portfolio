"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeController from "./ThemeController";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface NavProps {
  scrolled?: boolean;
}

const Nav = ({ scrolled = false }: NavProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "h-[64px] bg-base-100/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] border-b border-base-content/5"
          : "h-[72px] bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[92%] xl:w-[80%] max-w-7xl mx-auto">
        {/* LOGO */}
        <Link
          href="#home"
          className="group flex items-center gap-0.5 select-none"
        >
          <h1
            className={`${poppinsFont.className} text-base-content text-[22px] tracking-tight transition-all duration-300`}
          >
            safwax
            <span className="inline-block text-4xl leading-none text-bg group-hover:scale-125 transition-transform duration-300">
              .
            </span>
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              href={nav.url}
              className="relative px-4 py-2 text-[14px] font-medium text-base-content/70 hover:text-base-content rounded-lg hover:bg-base-content/5 transition-all duration-300 group"
            >
              {nav.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-warning scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="text-base-content/70 hover:text-base-content transition-colors duration-300">
            <ThemeController />
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold rounded-full bg-linear-to-r from-[#f72585] to-[#7209b7] text-white shadow-[0_2px_12px_rgba(247,37,133,0.3)] hover:shadow-[0_4px_20px_rgba(247,37,133,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Let&apos;s Talk
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          {/* Burger Menu - Mobile */}
          <label
            htmlFor="my-drawer"
            className="drawer-button lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-base-content/5 transition-colors duration-300 cursor-pointer"
          >
            <HiBars3BottomRight className="w-6 h-6 text-base-content" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
