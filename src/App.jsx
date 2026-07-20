import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Background from "./components/Background";
import Stats from "./sections/Stats";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Leadership from "./sections/Leadership";

function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Stats />
      <Leadership />
      <Projects />
      <Certifications />
      <Contact />
      <BackToTop />
      <Footer />

    </>
  );
}

export default App;