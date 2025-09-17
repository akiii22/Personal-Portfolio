import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex justify-center">
      <div className="w-full max-w-4xl px-4 md:px-8">
        <section id="header" className="py-16">
          <Home />
        </section>
      </div>
    </div>
  );
};
export default App;
