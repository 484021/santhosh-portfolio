import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import petly from "@/public/petly.png";
import conpic from "@/public/conpic.png";
import lili from "@/public/lili.png";
import wordanalytics from "@/public/wordanalytics.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Los Angeles, CA (Remote)",
    description:
      "Currently a Full-Stack Developer at 100Devs, where I work with React, Next.js, TypeScript, Tailwind, Express, and Node.js to create effective web applications. I’m eager to find full-time opportunities where I can leverage my skills and continue to grow while contributing to a collaborative and innovative development team.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Web Developer - Consultant",
    location: "Mississauga, ON",
    description:
      "As a consultant, I drive business growth by boosting online presence with strategic digital marketing and cutting-edge web development. I quickly identify challenges and deliver actionable, results-focused solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Operations Manager",
    location: "Toronto, ON",
    description:
      "As Operations Manager in Toronto, I led a team of 10+ staff, applying data-driven strategies to streamline workflows and align with business objectives. I identified system inefficiencies and leveraged technology to implement solutions that enhanced productivity and cut costs, showcasing my ability to optimize processes through innovative thinking.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Nestio - Under Construction",
    description:
      "Nestio is your go-to app for flexible, short-term rentals—book daily, weekly, or monthly, just like Airbnb but with more options tailored to your needs.",
    tags: ["Next.js", "React.js", "MongoDB", "TBD"],
    imageUrl: conpic,
    projectUrl: "#",
  },
  {
    title: "Petly",
    description:
      "Petly is a SaaS to manage all your pet day care clients and dogs in one place. Full-Stack CRUD operations with Auth and Payment.",
    tags: [
      "Next.js",
      "React.js",
      "Typescript",
      "Next-Auth",
      "Prisma",
      "Postgres",
      "Stripe",
    ],
    imageUrl: petly,
    projectUrl: "https://petly-sooty.vercel.app/",
  },
  {
    title: "Lili Sabor Latino",
    description:
      "Lili Sabor Latino is a vibrant project for a client offering authentic Latin cuisine from a food truck, where I designed a visually engaging website to enhance their online presence and attract more customers.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: lili,
    projectUrl: "https://lilisaborlatino.com/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "CSS"],
    imageUrl: wordanalytics,
    projectUrl: "https://word-analytics-react-vite.vercel.app/",
  },
  // {
  //   title: "sukuran Web Solutions",
  //   description:
  //     "This is my Web Development Agency's website. We serve Mississauga with Web Design services with a Personal Touch.",
  //   tags: ["HTML", "CSS", "Javascript"],
  //   imageUrl: sukuran,
  //   projectUrl: "https://sukuran.com/",
  // },
  // {
  //   title: "shopMate",
  //   description:
  //     "Organize all your weekly shopping needs so you never forget to buy something when you go get groceries.",
  //   tags: ["React.js", "Zustand"],
  //   imageUrl: shopMate,
  //   projectUrl: "https://shop-mate-three.vercel.app/",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "tailwind",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "Postgres",
  "MongoDB",
  "Git",
  "Github",
  "Stripe",
] as const;
