// import { Button } from "@/components/ui/button";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <div className={`w-full fixed h-[12vh] z-[10] bg-blue-950`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[1.5rem] sm:ml-0"
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
          {/* Button */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
