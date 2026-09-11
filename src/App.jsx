import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Organizations from "./components/Organizations";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Trainings from "./components/Trainings";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./lib/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Trainings />
        <Certifications />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
