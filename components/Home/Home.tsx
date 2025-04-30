import About from "../About/About";
import Services from "../Services/Services";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
