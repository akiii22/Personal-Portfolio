import { motion } from "framer-motion";
import { projects } from "../utils/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TimelineProject = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.h2
        className="text-center font-bold text-3xl mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Work in Motion
      </motion.h2>

      <motion.div
        className="border border-base-300 rounded-lg p-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => {
          const textVariant = index % 2 === 0 ? leftVariants : rightVariants;
          const imgVariant = index % 2 === 0 ? rightVariants : leftVariants;

          return (
            <div
              key={index}
              className={`md:items-center md:flex mb-10 md:w-full ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div variants={textVariant} className="md:w-1/2 px-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-base-content/60">{project.year}</p>
                <p className="mt-3 text-base-content/80">
                  {project.description}
                </p>

                <div className="mt-3 flex gap-3">
                  {project.tech.map((icon, i) => (
                    <div key={i} className="tooltip" data-tip="tech">
                      {icon}
                    </div>
                  ))}
                </div>

                <div className="mt-4 gap-4 flex">
                  <a href={project.github} className="btn btn-sm btn-outline">
                    Github
                  </a>
                  <a href={project.live} className="btn btn-sm btn-primary">
                    Live Demo
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={imgVariant}
                whileHover={{ scale: 1.05 }}
                className="md:w-1/2 md:mt-2 mt-6 cursor-pointer hover:shadow-xl transition duration-300"
              >
                <img
                  src={project.img}
                  alt={project.year}
                  className="rounded-xl shadow-md border border-base-300"
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TimelineProject;
