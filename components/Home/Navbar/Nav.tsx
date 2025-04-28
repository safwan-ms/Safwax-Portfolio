import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div
      className={`fixed bg-base-100 top-0 left-0 w-full h-[12vh] bg-opacity-50 backdrop-blur-lg shadow-lg z-10`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[0rem] lg:ml-[1.5rem] sm:ml-0"
          src="/images/logo.png"
        />
        {/* Nav Links `*/}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link key={nav.id} href={nav.url}>
                <p className="navlink">{nav.label}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* Button */}
        <div className="flex items-center space-x-1">
          <button className=" px-3 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white border-none responsive-btn hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Hire me
          </button>

          {/* Burger */}
          <label htmlFor="my-drawer" className="drawer-button">
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
