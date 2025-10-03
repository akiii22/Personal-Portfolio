import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
useEffect;
const themes = {
  lofi: "lofi",
  coffee: "coffee",
};

const getLocalStorageTheme = () => {
  return localStorage.getItem("theme");
};

const Home = () => {
  const [theme, setTheme] = useState(getLocalStorageTheme);

  const handleTheme = () => {
    const { lofi, coffee } = themes;
    const newTheme = theme === lofi ? coffee : lofi;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start lg:text-left gap-[3rem]">
      <div className="p-4 max-w-xl">
        <h1 className=" text-base-content font-bold text-3xl  md:text-4xl lg:text-5xl mb-4 tracking-wide">
          Jerome R. Bulosan
        </h1>
        <p className="mb-6 text-base-content text-lg md:text-xl tracking-wide">
          Aspiring Developer <span className="text-success">|</span> Web
          Developer
        </p>
        <div className=" my-7 flex gap-3">
          <button className="btn btn-neutral text-[16px] capitalize">
            View my Work
          </button>
          <button className="btn btn-neutral text-[16px]">Contact me</button>
          <label className="swap swap-rotate btn btn-neutral">
            <input type="checkbox" onChange={handleTheme} />

            <Sun className="swap-on  w-8 h-8 transition-all duration-150 ease-in-out" />

            <Moon className="swap-off w-8 h-8 transition-all duration-150 ease-in-out" />
          </label>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="relative w-40 h-40 md:w-56 md:h-56 group rounded-full overflow-hidden shadow-xl ring-4 ring-neutral/30 cursor-pointer">
          <video
            src="/video.mp4"
            className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            autoPlay
            loop
            muted
            playsInline
          />
          <img
            src="/profile.png"
            alt="profile"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
