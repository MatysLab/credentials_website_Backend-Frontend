"use client";

import React from "react";
import { motion } from "framer-motion"; // <-- import framer-motion
import { MapPinIcon } from '@heroicons/react/24/outline';
import ReachOutButton from "./assets/reachOutButton";
import LanguageConveyor from './assets/LanguageConveyor';

// define variants OUTSIDE the component
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // 0.4s between each child animation
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

const HomeDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen select-none" aria-label="Global">
      <div className="flex flex-col items-center justify-center pt-[10vh] pb-[5vh] border-b-2">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="border border-gray-300 rounded-full h-22 w-22 object-cover transform scale-x-[-1]"
          />
          <p className="text-5xl font-bold text-center border border-gray-300 p-5 rounded-full text-black">
            Hello, I'm Matys
          </p>
        </div>

        <motion.div
          className="font-extrabold mt-8 flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants} className="text-center">
            <p className="text-8xl text-[#fbb000] inline-flex items-center">
              APPEALING
              <span className="ml-3 w-40 text-[18px] font-light text-black">
                // Situated in Montreal, Canada
              </span>
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center flex justify-center items-center space-x-4">
            <ReachOutButton />
            <p className="text-8xl text-gray-600">INNOVATIVE</p>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center">
            <p className="text-8xl text-[#ee00ff]">EXPERIENCE</p>
          </motion.section>

          <motion.section variants={itemVariants} className="text-center">
            <p className="text-8xl text-[#1caaec]">
              <span
                className="text-white"
                style={{
                  textShadow: '2px 2px 0 #000000, -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000'
                }}
              >
                &amp;
              </span> DEVELOPER
            </p>
          </motion.section>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-7xl select-none min-h-[15vh] pt-[7vh] pb-[7vh] mx-auto relative overflow-hidden border-b-2" aria-label="Global">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        <LanguageConveyor />
      </div>
    </div>
  );
};

export default HomeDisplay;
