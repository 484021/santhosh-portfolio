"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

export default function Intro() {
  return (
    <section>
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
        <span className="font-bold">Hello, I'm Santhosh.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        a background in <span className="font-bold">management and consulting. </span>I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

    </section>

  );
}
