import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiPostgresql,
  SiReactquery,
  SiJsonwebtokens,
  SiDaisyui,
  SiStyledcomponents,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";

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
    title: "Mango Go Yow",
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
  {
    title: "Comfy Store",
    year: 2025,
    description:
      "A course project where you can order a furniture online, with login and logout functionalities, you can also register and sign up all the data is store in local storage, also it has a feature of night mode and light mode.",
    img: "/project4.png",
    github: "https://comfy-store-five-mocha.vercel.app/",
    live: "https://github.com/akiii22/Comfy-store",
    tech: [
      <SiReact key="react" className="text-cyan-400 text-2xl" />,
      <SiTailwindcss key="tailwind" className="text-sky-400 text-2xl" />,
      <BiLogoRedux key="redux" className=" text-purple-500 text-2xl" />,
      <SiReactquery key="tanstack" className=" text-red-500 text-2xl" />,
    ],
  },
];

export const featuredProjects = [
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
    github: "https://github.com/akiii22/the-wild-oasis",
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
    github: "https://github.com/akiii22/Focus_flow",
  },
];
