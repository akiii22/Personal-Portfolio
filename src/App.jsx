import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex justify-center my-10">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <section id="header" className="py-16">
          <Home />
        </section>
        <section id="about" className="py-8">
          <About />
        </section>
      </div>
    </div>
  );
};
export default App;
