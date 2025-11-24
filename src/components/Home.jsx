import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const themes = {
  fantasy: "fantasy",
  dim: "dim",
};

const getLocalStorageTheme = () => {
  return localStorage.getItem("theme") || themes.fantasy;
};

const Home = () => {
  const [theme, setTheme] = useState(getLocalStorageTheme);

  const handleTheme = () => {
    const { fantasy, dim } = themes;
    const newTheme = theme === fantasy ? dim : fantasy;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl space-y-6 text-center lg:text-left"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="flex-shrink-0 cursor-pointer"
      >
        <div
          className={`relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border group ${
            theme === "coffee" ? "border-base-content" : "border-base-300"
          }`}
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
      </motion.div>
    </div>
  );
};

export default Home;
