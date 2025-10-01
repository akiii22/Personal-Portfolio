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
    <div className="w-full flex justify-center py-8">
      <div className="max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-neutral-800 tracking-wide mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-96 w-full overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex gap-3">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="tooltip tooltip-top"
                      data-tip={t.name}
                    >
                      {t.icon}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-sm"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-sm"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
