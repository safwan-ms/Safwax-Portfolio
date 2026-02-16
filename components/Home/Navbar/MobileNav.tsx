"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
  return (
    <div className="drawer z-1000">
      <input id="my-drawer" type="checkbox" className="drawer-toggle peer" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay bg-black/40! backdrop-blur-sm!"
        ></label>

        <div className="relative flex flex-col min-h-full w-72 sm:w-80 bg-base-200/95 backdrop-blur-xl p-0 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-base-content/10">
            <span className="text-lg font-bold text-base-content tracking-tight">
              Menu
            </span>
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-base-content/5 hover:bg-base-content/10 text-base-content transition-all duration-300 cursor-pointer"
            >
              <CgClose className="w-4 h-4" />
            </label>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((nav, index) => (
              <label
                key={nav.id}
                htmlFor="my-drawer"
                className="cursor-pointer"
              >
                <Link
                  href={nav.url}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium text-base-content/70 hover:text-base-content hover:bg-base-content/5 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#f72585] to-[#7209b7] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
                  {nav.label}
                </Link>
              </label>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto px-6 pb-8">
            <label htmlFor="my-drawer" className="cursor-pointer">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-semibold text-white bg-linear-to-r from-[#f72585] to-[#7209b7] shadow-[0_2px_12px_rgba(247,37,133,0.25)] hover:shadow-[0_4px_20px_rgba(247,37,133,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                Let&apos;s Talk
                <svg
                  className="w-3.5 h-3.5"
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
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
