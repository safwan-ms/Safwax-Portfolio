import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
  return (
    <div className="drawer mt-20 z-[1000] ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content relative min-h-full w-60 sm:w-[640px] p-4">
          {/* Sidebar content here */}
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link className="navlink w-full" href={nav.url}>
                {nav.label}
              </Link>
            </li>
          ))}
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="text-white absolute top-4 right-4"
          >
            <CgClose />
          </label>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
