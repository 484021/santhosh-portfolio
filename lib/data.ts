import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ltbImg from "@/public/ltb.png"

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
      "I work as a consultant for businesses and help with increasing online presence with digital marketing and web development services. I analyzed complex problems, provide expert advice, and offered practical solutions to clients.",
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
    title: "Love the beads",
    description:
      "I worked as a full stack developer to make this app from scratch for a client. This is a basic e-commerce app where users can buy hand-made bead accesories.",
    tags: ["Javascript", "HTML", "CSS", "Node.js", "Express", "Stripe"],
    imageUrl: ltbImg,
    projectUrl: "https://love-the-beads.onrender.com/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Framer Motion",
] as const;