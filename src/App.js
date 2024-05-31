import Skills from "./assets/projects/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      
      <Projects/>
      <Skills/>
      <Contact />
    </div>
  );
}

export default App;
