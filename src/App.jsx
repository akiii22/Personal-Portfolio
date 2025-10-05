import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

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
      </div>
    </div>
  );
};
export default App;
