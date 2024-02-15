"use client"
import React from 'react'
import {motion} from "framer-motion"
import SectionHeading from './section-heading'


export default function About() {
  return (
    <motion.section
    
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About me</SectionHeading> 
    <p className="mb-3">
      After managing and consulting for <span className="font-medium">Businesses</span> and <span className="font-medium">Restaurants</span>{" "}, I decided to pursue my
      passion for programming. I enrolled in a coding bootcamp and I am learning{" "}
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
      developer.
    </p>

    <p className='mb-3'>
      <span className="italic">When I'm not coding</span>, I enjoy playing
      playing badminton, watching movies, and hanging out with friends and family. I also enjoy{" "}
      <span className="font-medium">learning new things</span>.
    </p>
    <p>
        I am currently taking on clients for my <span className="font-medium">Web Development Agency</span> as well. Our team is dedicated to creating stunning, user-friendly websites that reflect your brand and achieve your goals. From concept to launch and beyond, we're here to turn your vision into reality.
        <br/>
        Let's collaborate to elevate your online presence. Thank you for considering us.
        <br />
        Let's create something extraordinary together.
    </p>
  </motion.section>
  )
}
