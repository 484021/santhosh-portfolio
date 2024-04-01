import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import conpic from "@/public/conpic.png";
import sukuran from "@/public/sukuran.png";
import wordanalytics from "@/public/wordanalytics.png";
import shopMate from "@/public/shopMate.png";
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
    title: "Operations Manager",
    location: "Toronto, ON",
    description:
      "I managed a team of 10+ staff while developing and executing operational strategies aligned with organizational goals. I also identified inefficiencies and implemented enhancements to optimize productivity and reduce costs.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Web Developer/ Consultant",
    location: "Mississauga, ON",
    description:
      "I work as a consultant for businesses and help with increasing online presence with digital marketing and web development services. I analyze complex problems, provide expert advice, and offer practical solutions to clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Los Angeles, CA (Remote)",
    description:
      "I'm now a full-stack developer working at an agency remotely. My stack includes React, Next.js, TypeScript, Tailwind, Express and Node.js. I'm open to full-time opportunities and new clients.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "shopMate",
    description:
      "Organize all your weekly shopping needs so you never forget to buy something when you go get groceries.",
    tags: ["React.js", "Zustand"],
    imageUrl: shopMate,
    projectUrl: "https://shop-mate-three.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "CSS"],
    imageUrl: wordanalytics,
    projectUrl: "https://word-analytics-react-vite.vercel.app/",
  },
  {
    title: "sukuran Web Solutions",
    description:
      "This is my agency's website I'm currently updating. We serve Mississauga with Web Design services with a Personal Touch.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: sukuran,
    projectUrl: "https://sukuran.pages.dev/",
  },
  {
    title: "PetSoft",
    description:
      "PetSoft is a SaaS to manage all your pet day care clients and dogs in one place with. *Under Construction*",
    tags: ["*TBD*"],
    imageUrl: conpic,
    projectUrl: "#",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Git",
  "Tailwind",
  "Express",
  "Framer Motion",
  "Stripe",
] as const;
