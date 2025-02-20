"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description:
      "An elite digital storefront, built for seamless transactions, robust security, and an unforgettable shopping experience.",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Intelligent insights at your fingertips. A high-performance analytics suite leveraging AI to drive precision and growth.",
  },
  {
    title: "Enterprise CRM",
    description:
      "A commanding customer management platform. Designed to streamline operations, build relationships, and scale effortlessly.",
  },
];

export default function Portfolio() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white relative">
      {/* Gold & Bronze Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5A2B] via-[#FFD700] to-[#8B5A2B] opacity-10"></div>

      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-center text-transparent bg-clip-text 
          bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
      >
        Our Legacy in Code
      </motion.h1>

      <p className="text-lg text-gray-300 text-center mt-4 max-w-3xl mx-auto">
        Excellence isn&apos;t an option—it&apos;s the only way forward. Our projects define a standard 
        of digital mastery, engineered for those who demand power, precision, and prestige.
      </p>

      {/* Portfolio Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#FFD700"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 bg-black border border-yellow-500 
                rounded-lg shadow-lg hover:shadow-yellow-500/50 
                transition-transform duration-300 overflow-hidden"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent 
                bg-gradient-to-r from-yellow-400 to-orange-600 opacity-30 blur-lg"></div>

              {/* Animated Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative text-3xl font-semibold text-transparent 
                  bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
              >
                {item.title}
              </motion.h3>

              {/* Animated Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative mt-4 text-gray-300"
              >
                {item.description}
              </motion.p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </main>
  );
}
