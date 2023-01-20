import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
