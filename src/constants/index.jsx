import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ACHMAD RAJA Q Z",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate developer with a knack for creating good and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <FaLaravel className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Laravel",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "<1 years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "<1 years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1 year",
  },
  {
    icon: <FaWordpress className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "WordPress",
    experience: "1 year",
  },
];

export const EXPERIENCES = [
  {
    title: "Head of TKJ Expertise Competency",
    company: "SMK Setiabudhi",
    duration: "January - December 2024",
    description:
      "As the Lead TKJ Expertise Competency, I am responsible for the management of TKJ, managing the TKJ laboratory, building and maintaining the website of SMK Setiabudhi Green School using WordPress.",
  },
  {
    title: "Fullstack Developer",
    company: "JuraganCOD",
    duration: "October - November 2023",
    description:
      "At JuraganCOD, I focused on building highly interactive and responsive web interfaces using HTML, CSS, PHP, and Laravel Framework. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role changed the appearance of the old website to a fresher new website appearance, involved optimizing website performance, and refactoring codelines.",
  },
  {
    title: "Backend Developer Intern",
    company: "Social Economic Accelerator Lab (SEAL) AWS",
    duration: "August - December 2022",
    description:
      "In my role as a Backend Developer, I built a Restful API that is integrated with the Frontend Developer for the Semarang Technopark website project. I gained hands-on experience in utilizing HTML, CSS, PHP, and Laravel to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with teammates to implement new features.",
  },
  {
    title: "Staff Intern",
    company: "Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Semarang",
    duration: "November 2021 - January 2022",
    description:
      "As a staff intern, my role involved analyzing and developing datasets for the Semarang Satu Data website. I was responsible for inputting and processing over 50 data entries from the Semarang City Department into the platform, analyzing trends, and creating new datasets to enhance the website’s data offerings.",
  },
  {
    title: "Studi Independen - Cloud Fundamental Track",
    company: "PT. Microsoft Indonesia",
    duration: "July - December 2021",
    description:
      "During my participation in the Studi Independen students development program under MBKM, I implemented DevOps with Microsoft Azure, managed Power Platform, and completed certifications in Azure Fundamentals and Security, Compliance, and Identity Fundamentals. I also developed the 'Belajarin Aja' website as an educational portal for students and teachers as part of my Capstone Project.",
  },
];

export const EDUCATION = [
  {
    degree: "Pendidikan Teknik Informatika dan Komputer",
    institution: "Universitas Negeri Semarang",
    duration: "September 2019 - October 2024",
    description1: "✔️ Magang MBKM Batch 3 Backend Developer - SEAL AWS 2022",
    description2: "✔️ Studi Independen Batch 1 Cloud Fundamental Track - PT. Microsoft Indonesia 2021",
    description3: "✔️ Juara 1 Essay Competition GEMASTE Tahun 2021",
    description4: "✔️ Best Poster Essay Competition GEMASTE Tahun 2021",
    description5: "✔️ Ketua Umum Electrical Science Club 2021",
    description6: "✔️ Kepala Divisi Sosial Masyarakat Sekolah Kader Bangsa 2021",
  },
  {
    degree: "Matematika & Ilmu Pengetahuan Alam (Science)",
    institution: "MAN Demak",
    duration: "Juli 2016 - June 2019",
    description:
      "Participated in various science competitions and technology, including Pekan Ilmiah Remaja Nasional (PIRN) Aceh in 2017,  participated Olimpiade Sains Nasional Bidang Komputer Tingkat Kabupaten 2018, and Information Technology Competition DinusFest 2018.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/share/XKv2qkS1gkxqkEdL/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/raja.qz",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/achmadrajaqz",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/achmadraja",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://wa.me/628122932712",
    icon: <FaWhatsapp fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/achmad-raja-qodli-zaka-2589181a5/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:achmadrajaqz@gmail.com",
    icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />,
  },
];
