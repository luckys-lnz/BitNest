"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description:
      "A high-performance digital storefront engineered for secure transactions, scalable infrastructure, and a smooth, engaging shopping experience tailored for modern consumers.",
    stack: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "AI-Powered Analytics",
    description:
      "A cutting-edge analytics suite that leverages machine learning to deliver actionable insights, automate reporting, and empower data-driven decision making.",
    stack: ["Python", "Flask", "D3.js"],
  },
  {
    title: "Enterprise CRM",
    description:
      "A robust customer relationship management system built to optimize workflows, strengthen client relationships, and scale with enterprise-level demands.",
    stack: ["React", "Django", "Twilio"],
  },
];

export default function Portfolio() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5A2B] via-[#FFD700] to-[#8B5A2B] opacity-5 pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center bg-clip-text text-transparent 
        bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
      >
        <h1 className="p-2">Our Legacy in Code</h1>
      </motion.h1>

      <p className="text-lg text-gray-300 text-center mt-4 max-w-3xl mx-auto">
        Excellence isn&apos;t an option—it&apos;s the only way forward. Our
        projects define a standard of digital mastery, engineered for those who
        demand power, precision, and prestige.
      </p>

      {/* Grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.2}
            glareColor="#FFD700"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 bg-[#111] border border-yellow-500 rounded-2xl shadow-md hover:shadow-yellow-500/40 transition duration-300"
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
              >
                {item.title}
              </motion.h3>
              <p className="mt-3 text-sm text-gray-300">{item.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-600/20 border border-yellow-400/40 px-2 py-1 rounded-full text-yellow-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </main>
  );
}
