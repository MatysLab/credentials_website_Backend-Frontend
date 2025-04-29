"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReachOutButton from "./assets/reachOutButton";
import LanguageConveyor from './assets/LanguageConveyor';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Slightly faster animation
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

const HomeDisplay = () => {
  // Track viewport height to adjust component size
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Set initial viewport height
    setViewportHeight(window.innerHeight);

    // Update viewport height when resized
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate spacing to match header height
  const headerHeight = 64; // Approximate height of header based on your screenshot

  return (
      <div className="flex flex-col justify-between h-[93vh] mb-[] select-none " aria-label="Global">
        {/* Main content with responsive sizing */}
        <div id='HomeDisplay' className="flex flex-col items-center justify-center flex-grow py-4 border-b-2 border-gray-300">
          <div className="flex items-center space-x-2 md:mb-2">
            <img
                src="/logo.png"
                alt="Logo"
                className="border border-gray-300 rounded-full h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-cover transform scale-x-[-1]"
            />
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center border border-gray-300 p-2 md:p-3 lg:p-4 rounded-full text-black">
              Hello, I'm Matys
            </p>
          </div>

          <motion.div
              className="font-extrabold mt-4 flex flex-col items-center space-y-4 md:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
          >
            <motion.section variants={itemVariants} className="text-center">
              <p className="text-4xl md:text-5xl lg:text-7xl text-[#fbb000] inline-flex items-center">
                APPEALING
                <span className="ml-2 w-24 md:w-32 lg:w-40 text-xs md:text-sm lg:text-base font-light text-black">
                // Montreal, Canada
              </span>
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="text-center flex justify-center items-center space-x-2 md:space-x-4">
              <ReachOutButton />
              <p className="text-4xl md:text-5xl lg:text-7xl text-gray-600">DIGITIZED</p>
            </motion.section>

            <motion.section variants={itemVariants} className="text-center">
              <p className="text-4xl md:text-5xl lg:text-7xl text-[#ee00ff]">EXPERIENCE</p>
            </motion.section>

            <motion.section variants={itemVariants} className="text-center">
              <p className="text-4xl md:text-5xl lg:text-7xl text-[#1caaec]">
              <span
                  className="text-white"
                  style={{
                    textShadow: '1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000'
                  }}
              >
                &amp;
              </span> DEVELOPER
              </p>
            </motion.section>
          </motion.div>
        </div>

        {/* Language conveyor with fixed height and constrained width */}
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-16 md:h-20 lg:h-24 relative overflow-hidden border-b-2 border-gray-300" aria-label="Global">
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="w-full px-4 lg:px-8">
            <LanguageConveyor />
          </div>
        </div>
      </div>
  );
};

export default HomeDisplay;