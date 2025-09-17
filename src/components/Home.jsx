const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start lg:text-left gap-[3rem]">
      <div className="p-4 max-w-xl">
        <h1 className=" text-neutral-800 font-bold text-3xl  md:text-4xl lg:text-5xl mb-4 tracking-wide">
          Jerome R. Bulosan
        </h1>
        <p className="mb-6 text-neutral-600 text-lg md:text-xl tracking-wide">
          Aspiring Developer <span className="text-success">|</span> Web
          Developer
        </p>
        <div className=" my-7 flex gap-3">
          <button className="btn btn-success text-[16px]">View my Work</button>
          <button className="btn btn-neutral text-[16px]">Contact me</button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/profile.png"
          alt="profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl ring-4 ring-neutral/30"
        />
      </div>
    </div>
  );
};
export default Home;
