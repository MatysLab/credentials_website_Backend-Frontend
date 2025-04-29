'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.section variants={itemVariants} className="text-center">
            <p className="text-8xl text-[#1caaec]">PROJECTS</p>
        </motion.section>
    );
};

export default Projects;