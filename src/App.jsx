import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex justify-center py-12">
      <div className="w-full max-w-4xl px-4 md:px-8 space-y-20">
        <section id="header">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
      </div>
    </div>
  );
};
export default App;
