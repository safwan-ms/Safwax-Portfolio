import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  return (
    <div className="fixed">
      <Nav />
      <MobileNav />
    </div>
  );
};

export default ResponsiveNav;
