import { projects } from "../utils/projects";

projects;

const TimelineProject = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-center font-bold text-3xl mb-12">
        My Work in Motion
      </h2>
      <div className="border border-base-300 rounded-lg p-5">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`md:items-center md:flex mb-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 px-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-base-content/60">{project.year}</p>
                <p className="mt-3 text-base-content/80">
                  {project.description}
                </p>
                <div className="mt-3 flex gap-3">
                  {project.tech.map((icon, index) => {
                    return (
                      <div key={index} className="tooltip" data-tip="tech">
                        {icon}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 gap-4 flex">
                  <a href={project.github} className="btn btn-sm btn-outline">
                    Github
                  </a>
                  <a href={project.live} className="btn btn-sm btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 md:mt-2 mt-6 cursor-pointer hover:scale-110 hover:shadow-xl transition duration-300">
                <img
                  src={project.img}
                  alt={project.year}
                  className="rounded-xl shadow-md border border-base-300"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineProject;
