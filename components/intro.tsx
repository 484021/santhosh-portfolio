"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs';
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                <Image src="https://lh3.googleusercontent.com/pw/ABLVV86tRER6nOzzOGCmCYE4gOdGyrzO8wSH_ODBPeNdTT8aomJ6_vdqWqARs-qOnM1NQCxT3M84qisw7qlkZF8v7PQu-M2YcApUwy9mnr22w3O_WoTk-AOC=w2400"
                alt="Santhosh portrait" width="192" height="192" quality="95" priority={true}
                className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover'/>
                </motion.div>
                <motion.span className='absolute text-4xl right-0 bottom-0'
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay:0.1,
                        duration:0.7
                    }}
                >👋</motion.span>
            </div>
        </div>
        
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p></p>
        <span className="font-bold">Hello, I'm Santhosh.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        a background in <span className="font-bold">management and consulting. </span>I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             delay: 0.1,
           }}>
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition 
            ">Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1'/></Link>
            <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://www.linkedin.com/in/santhosh-bhoopal/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://www.instagram.com/prodoit"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://github.com/484021/"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://discordapp.com/users/prodoit"
          target="_blank"
        >
          <BsDiscord />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://www.youtube.com/@SanthoshBhoopal"
          target="_blank"
        >
          <BsYoutube />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://twitter.com/santhosh_code"
          target="_blank"
        >
          <BsTwitterX />
        </a>
        </motion.div>
    </section>

  );
}
