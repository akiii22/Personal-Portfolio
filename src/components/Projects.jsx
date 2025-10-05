import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

const projects = [
  {
    title: "The Wild Oasis",
    description: "A modern store with cart, checkout, and product pages.",
    image: "/featured1.png",
    tech: [
      { name: "React", icon: <SiReact className="text-cyan-400 text-2xl" /> },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-green-500 text-2xl" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
      },
    ],
    live: "https://wild-oasis-101.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    title: "Focus Flow",
    description: "A personal task app where you can track your progress.",
    image: "/featured2.png",
    tech: [
      {
        name: "React",
        icon: <SiReact className="text-cyan-400 text-2xl" />,
      },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-pink-400 text-2xl" />,
      },
    ],
    live: "https://focus-flow-ten-fawn.vercel.app/",
    github: "https://github.com/your-repo",
  },
];

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
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
