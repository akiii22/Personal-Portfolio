import { featuredProjects } from "../utils/projects";
import { ExternalLink, Github } from "lucide-react";
const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="border border-base-300 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-base-content/70">
                {project.description}
              </p>

              <div className="flex gap-3 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="tooltip tooltip-top"
                    data-tip={t.name}
                  >
                    {t.icon}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="btn btn-outline btn-xs"
                >
                  <Github size={14} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="btn btn-outline btn-xs"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
