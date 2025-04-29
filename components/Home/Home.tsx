import About from "../About/About";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
