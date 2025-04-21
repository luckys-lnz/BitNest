"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";

interface ServiceProps {
  title: string;
  description: ReactNode;
}

export default function ServiceCard({ title, description }: ServiceProps) {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.3}
      glareColor="#FFD700"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="rounded-lg"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative p-6 bg-black border border-yellow-500 
          rounded-lg shadow-lg hover:shadow-yellow-500/50 
          transition-transform duration-300 overflow-hidden"
      >
        {/* Glowing Border Aura */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent 
          bg-gradient-to-r from-yellow-400 to-orange-600 opacity-30 blur-lg pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-semibold text-transparent 
              bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-gray-300"
          >
            {description}
          </motion.p>

          {/* Gold underscore divider */}
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full" />
        </div>
      </motion.div>
    </Tilt>
  );
}
