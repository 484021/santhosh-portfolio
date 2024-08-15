"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After a successful career managing and consulting for{" "}
        <span className="font-medium">restaurants</span>, I decided to follow my
        passion for programming by enrolling in a coding bootcamp. There, I
        mastered
        <span className="font-medium"> full-stack web development</span>with a
        focus on React, Next.js, Node.js, and TypeScript.
        <span className="italic"> I thrive on the problem-solving</span> aspect
        of programming and find great satisfaction in discovering effective
        solutions. 
        
        {/* <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Typescript
        </span>
        . I am learning new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer and clients for my <span className="italic">start up</span>
        <span className="font-medium"> Web Development Agency.</span> */}
      </p>

      <p className="mb-3">
    I’m eager to apply my skills in a full-time software development role and am also seeking clients for my startup web development agency. Beyond coding, I enjoy 
    <span className="italic"> playing badminton</span>, 
    <span className="italic"> watching movies</span>, and spending quality time with 
    <span className="italic"> friends and family</span>. I’m also a lifelong learner, fluent in 
    <span className="font-medium"> English</span>, 
    <span className="font-medium"> Korean</span>, 
    <span className="font-medium"> Tamil</span>, and 
    <span className="font-medium"> Kannada</span>.
</p>

<p className="mb-3">
    I’m <span className="font-bold">excited</span> to bring my <span className="italic">problem-solving</span> abilities and <span className="underline">enthusiasm</span> to a dynamic team. I can’t wait to <span className="font-bold">contribute</span> to innovative projects and <span className="italic">make a real impact</span> in the tech industry!
</p>


      {/* <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        playing badminton, watching movies, and hanging out with friends and
        family. I also love{" "}
        <span className="font-medium">learning new things</span>. I can speak{" "}
        <span className="italic">English, Korean, Tamil </span>
        <span className="font-medium">and</span>
        <span className="italic"> Kannada.</span>
      </p> */}
    </motion.section>
  );
}
