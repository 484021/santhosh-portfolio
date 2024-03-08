import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ltbImg from "@/public/ltb.png"
import conpic from "@/public/conpic.png"
import tracyport from "@/public/Tracy-portfolio.png"

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
  
  // {
  //   title: "Love the beads",
  //   description:
  //     "This is an e-commerce app I built where users can buy hand-made bead accesories from one of my clients. The cart data is passed to the server and verified.",
  //   tags: ["HTML", "CSS", "Javascript","Node.js", "Express","Stripe"],
  //   imageUrl: ltbImg,
  //   projectUrl: "https://love-the-beads.onrender.com/"
  // },
  // {
  //   title: "Tracy Fung's portfolio",
  //   description:
  //     "A portfolio for an emerging artist based in Mississauga. A very simple and minimalistic design as requested by the client.",
  //   tags: ["HTML", "CSS", "Javascript"],
  //   imageUrl: tracyport,
  //   projectUrl: "https://tracy-fung.com/"
  // },
   {
     title: "shopMate",
     description: "Organize all your weekly shopping needs so you never forget to buy something when you go get groceries. *Under Construction*",
     tags: ["*TBD*"],
     imageUrl: conpic,
     projectUrl: "#"
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
  "Stripe"
] as const;