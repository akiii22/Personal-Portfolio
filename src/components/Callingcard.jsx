import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const CallingCard = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 text-center space-y-6 relative">
      <h2 className="text-3xl font-bold">Let’s Connect</h2>

      <p className="text-base-content/70 max-w-md mx-auto">
        I’m always open to discussing new projects, collaborations, or
        opportunities. Feel free to reach out through any of the platforms
        below.
      </p>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="mailto:your@email.com"
          className="hover:text-primary transition"
          aria-label="Email"
        >
          <Mail className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="GitHub"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-7 h-7" />
        </a>
      </div>

      <div className="mt-10">
        <a href="mailto:your@email.com" className="btn btn-primary btn-wide">
          Say Hello 👋
        </a>
      </div>

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-content shadow-lg hover:scale-110 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <footer className="text-center text-sm text-base-content/50 mt-16">
        © 2025 Jerome Bulosan — Crafted with ❤️ using React & DaisyUI
      </footer>
    </section>
  );
};

export default CallingCard;
