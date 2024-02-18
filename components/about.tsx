"use client"
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView("About");

  
  return (
    <motion.section
    
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    ref = {ref}  
  >
    <SectionHeading>About me</SectionHeading> 
    <p className="mb-3">
      After managing and consulting for <span className="font-medium">Businesses</span> and <span className="font-medium">Restaurants</span>{" "}, I decided to pursue my
      passion for programming. I enrolled in a coding bootcamp and I learned{" "}
      <span className="font-medium">full-stack web development</span>.{" "}
      <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect. I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem. My core stack
      is{" "}
      <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
      </span>
      . I am also familiar with TypeScript. I am always looking to
      learn new technologies. I am currently looking for a{" "}
      <span className="font-medium">full-time position</span> as a software
      developer and clients for my <span className="italic">start up</span><span className="font-medium"> Web Development Agency.</span>
    </p>

    <p className='mb-3'>
      <span className="italic">When I'm not coding</span>, I enjoy playing
      playing badminton, watching movies, and hanging out with friends and family. I also love{" "}
      <span className="font-medium">learning new things</span>. I can speak <span className="italic">English, Korean, Tamil </span><span className="font-medium">and</span>
      <span className="italic"> Kannada</span>, and I have a very <span className="font-medium">basic proficiency</span> in <span className="italic">Japanese.</span>
    </p>

  </motion.section>
  )
}
