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
    </section>
  )
}
