import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
useEffect;
const themes = {
  fantasy: "fantasy",
  dracula: "dracula",
};

const getLocalStorageTheme = () => {
  return localStorage.getItem("theme");
};

const Home = () => {
  const [theme, setTheme] = useState(getLocalStorageTheme);

  const handleTheme = () => {
    const { fantasy, dracula } = themes;
    const newTheme = theme === fantasy ? dracula : fantasy;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
      <div className="max-w-xl space-y-6 text-center lg:text-left">
        <h1 className="font-bold text-4xl md:text-5xl">Jerome R. Bulosan</h1>
        <p className="text-lg">
          Aspiring Developer <span className="text-primary">|</span> Web
          Developer
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <button className="btn btn-outline btn-sm">
            <a href="#timeline">View my work</a>
          </button>
          <button className="btn btn-outline btn-sm">
            <a href="/Jerome Bulosan.pdf" download>
              Download CV
            </a>
          </button>
          <label className="swap swap-rotate btn btn-ghost btn-sm">
            <input type="checkbox" onChange={handleTheme} />
            <Sun className="swap-on w-5 h-5 transition-transform duration-200" />
            <Moon className="swap-off w-5 h-5 transition-transform duration-200" />
          </label>
        </div>
      </div>

      <div className="flex-shrink-0 cursor-pointer">
        <div
          className={`relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border group
    ${theme === "coffee" ? "border-base-content" : "border-base-300"}`}
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src="/home.png"
            alt="avatar"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
