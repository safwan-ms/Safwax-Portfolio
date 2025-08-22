import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeController from "./ThemeController";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const Nav = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-[10vh] bg-opacity-70 backdrop-blur-md shadow-md z-50 px-5`}
    >
      <div className="flex items-center  justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="overflow-y-hidden">
          <h1
            className={`${poppinsFont.className}  text-base-content text-2xl`}
          >
            safwax
            <span className="text-5xl text-bg ">.</span>
          </h1>
        </div>
        {/* Nav Links `*/}
        <div className="flex mt-4 items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <p className="navlink text-base-content">{nav.label}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="flex mt-4 items-center space-x-6">
          <div className="text-base-content ">
            <ThemeController />
          </div>

          {/* Burger */}
          <label htmlFor="my-drawer" className="drawer-button">
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-base-content lg:hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
