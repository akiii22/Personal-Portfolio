import { featuredProjects } from "../utils/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto space-y-10"
    >
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="border border-base-300 rounded-lg overflow-hidden shadow-sm"
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
