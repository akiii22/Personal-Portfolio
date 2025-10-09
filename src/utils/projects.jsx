import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiPostgresql,
  SiReactquery,
  SiJsonwebtokens,
  SiDaisyui,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const projects = [
  {
    title: "Portfolio Website",
    year: "2025",
    description:
      "A modern personal portfolio showcasing my projects, skills, and experience using React and Tailwind CSS.",
    img: "/project1.png",
    github: "https://github.com/akiii22/Personal-Portfolio",
    live: "#",
    tech: [
      <SiReact key="react" className="text-cyan-400 text-xl" />,
      <SiTailwindcss key="tailwind" className="text-sky-400 text-xl" />,
      <SiDaisyui className="text-purple-500 text-2xl" />,
    ],
  },
  {
    title: "Wild Oasis User",
    year: "2025",
    description:
      "A modern cabin reservation platform where users can browse, book, and manage their stays seamlessly. Built with Next.js for performance, Tailwind CSS for styling, and TanStack for powerful data handling.",
    img: "/project2.png",
    github: "https://github.com/akiii22/wild_oasis_user_page",
    live: "https://wild-oasis-pink.vercel.app",
    tech: [
      <RiNextjsFill key="nextjs" className="text-gray-800  text-xl" />,
      <SiTailwindcss key="tailwind" className="text-sky-400 text-xl" />,
      <SiReact key="tanstack" className="text-sky-500 text-xl" />,
    ],
  },
  {
    title: "Mango Goy Yow",
    year: "2025",
    description:
      "A full-stack freelance project for an online mango shake ordering system with both user and admin dashboards. Users can place and track orders, while admins manage inventory, orders, and customer records. Built with React for the frontend, Node.js with JWT authentication for the backend, TanStack for data management, and PostgreSQL as the database.",
    img: "/project3.png",
    github: "https://github.com/akiii22/mango_shake_admin",
    live: null,
    tech: [
      <SiReact key="react" className="text-cyan-400 text-xl" />,
      <SiNodedotjs key="nodejs" className="text-green-600 text-xl" />,
      <SiPostgresql key="postgresql" className="text-sky-700 text-xl" />,
      <SiJsonwebtokens key="jwt" className="text-orange-500 text-xl" />,
      <SiReactquery key="tanstack" className="text-pink-500 text-xl" />,
    ],
  },
];
