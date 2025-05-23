import Projects from "./Projects/Project";
import Services from "./Services/Services";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-base-100 to-error-content">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
