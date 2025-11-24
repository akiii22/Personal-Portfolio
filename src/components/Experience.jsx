import { motion } from "framer-motion";

const experiences = [
  {
    role: "Customer Service Engineer",
    company: "Elementor",
    period: "2025 – Present",
    description:
      "Collaborated with cross-functional teams to provide technical support and ensure seamless website performance for global users. Improved issue resolution times by applying systematic debugging and clear documentation.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2024 – 2025",
    description:
      "Designed and built responsive websites and web applications using React, Supabase, and Tailwind. Worked closely with clients to translate requirements into functional, maintainable solutions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <motion.h2
        className="text-center font-bold text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold text-base-content">
                {exp.role}
              </h3>
              <span className="text-sm text-base-content/60">{exp.period}</span>
            </div>
            <p className="text-base-content/70">{exp.company}</p>
            <p className="mt-3 text-base-content/80 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
