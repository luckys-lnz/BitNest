"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Tilt from "react-parallax-tilt";

interface ServiceProps {
  title: string;
  description: ReactNode;
}

export default function ServiceCard({ title, description }: ServiceProps) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#FFD700"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="relative overflow-hidden rounded-xl" // Prevents overflow
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative p-8 bg-black border border-yellow-500 
          rounded-xl shadow-lg hover:shadow-yellow-500/50 
          transition-transform duration-300 overflow-hidden"
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent 
          bg-gradient-to-r from-yellow-400 to-orange-600 opacity-30 pointer-events-none"></div>

        {/* Animated Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative text-3xl font-bold text-transparent 
            bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-wide"
        >
          {title}
        </motion.h3>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-4 text-lg text-gray-300 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Elegant Divider */}
        <div className="relative mt-6 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full"></div>

        {/* Subtle Glow Behind Card (Fixed Overflow) */}
        <div className="absolute inset-0 bg-yellow-500 opacity-10 blur-3xl pointer-events-none"></div>
      </motion.div>
    </Tilt>
  );
}
