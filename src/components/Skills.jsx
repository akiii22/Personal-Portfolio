import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { Sparkles } from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
  const stack = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-5xl" />,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs className="text-green-600 text-5xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-sky-700 text-5xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-600 text-5xl" /> },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 text-5xl" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
    { name: "React", icon: <SiReact className="text-cyan-500 text-5xl" /> },
    {
      name: "NextJs",
      icon: <RiNextjsFill className="text-slate-700 text-5xl" />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-green-500 text-5xl" />,
    },
    { name: "DaisyUI", icon: <Sparkles className="text-pink-500 text-5xl" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto space-y-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center font-bold text-3xl"
      >
        My Toolkit
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="flex flex-col justify-between items-center gap-8"
      >
        <p className="p-5 text-base-content/80 my-2 text-xl/10 text-center">
          These are the technologies I specialize in and use to build
          functional, efficient, and user-focused web applications. Each tool
          represents not only technical proficiency but also my commitment to
          writing clean, maintainable code.
        </p>

        <div className="overflow-hidden relative w-full pt-4">
          <div className="flex gap-10 animate-movingskills p-5">
            {stack.map((tech, i) => (
              <div
                key={i}
                className="tooltip cursor-pointer px-5 py-7"
                data-tip={tech.name}
              >
                {tech.icon}
              </div>
            ))}

            {/* duplicated row for infinite loop */}
            {stack.map((tech, i) => (
              <div key={`dup-${i}`} className="tooltip" data-tip={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
