'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ReachOutButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    console.log("Reach Out button clicked. Scrolling logic executed.");
  };

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="
        relative
        inline-flex
        items-center
        gap-x-2.5
        px-7 py-3.5
        text-xl font-bold
        text-black
        border-2 border-gray-300
        rounded-full
        cursor-pointer
        overflow-hidden
        outline-none
        transition-all duration-400 ease-in-out
        group
      "
    >
      {/* Blue expanding circle */}
      <motion.div
        className="
          absolute
          top-1/2 left-1/2
          bg-blue-600
          rounded-full
          -translate-x-1/2 -translate-y-1/2
          w-52 h-52
          -z-10
        "
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.6, ease: 'easeInOut' },
          opacity: { duration: 0.4, ease: 'easeInOut' },
        }}
      />

      {/* Button text */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-400 ease-in-out">
        Reach Out
      </span>

      {/* Flashing green dot with animated border */}
      <motion.div
        className="
          relative
          inline-block
          w-5 h-5
          bg-green-600
          rounded-full
          z-20
        "
        animate={{ // Flashing opacity effect
          borderWidth: ['2px', '4px'],
          borderColor: ['transparent', '#7CFC00'], // Animate border color to lighter green
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse', // Makes the animation reverse after completing
          ease: 'easeInOut',
        }}
        style={{
          borderWidth: '2px',  // Default border width
          borderColor: 'transparent',  // Default border color
          borderStyle: 'solid',
        }}
      />
    </motion.button>
  );
};

export default ReachOutButton;
