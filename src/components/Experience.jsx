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

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-center font-bold text-3xl">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-base-300 rounded-xl p-6 shadow-sm hover:shadow-md transition"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
