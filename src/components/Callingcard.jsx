import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const accounts = [
  { icon: Mail, link: import.meta.env.VITE_EMAIL, label: "Email" },
  { icon: Github, link: import.meta.env.VITE_GITHUB, label: "GitHub" },
  { icon: Linkedin, link: import.meta.env.VITE_LINKEDIN, label: "LinkedIn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const CallingCard = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 text-center space-y-6 relative">
      <motion.h2
        className="text-3xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-base-content/70 max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        I’m always open to discussing new projects, collaborations, or
        opportunities. Feel free to reach out through any of the platforms
        below.
      </motion.p>

      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {accounts.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.2 }}
            className="hover:text-primary transition"
          >
            <item.icon className="w-7 h-7" />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={import.meta.env.VITE_EMAIL}
          className="btn btn-primary btn-wide"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
      </motion.div>

      <motion.button
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-content shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.15 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <motion.footer
        className="text-center text-sm text-base-content/50 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        © 2025 Jerome Bulosan
      </motion.footer>
    </section>
  );
};

export default CallingCard;
