"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNavHandler} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
