"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ReactNode } from "react";
import Link from "next/link";

interface ServiceProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  features: string[];
  price?: string;
  slug: string;
  stats?: {
    projects: string;
    clients: string;
    satisfaction: string;
  };
}

export default function ServiceCard({ title, description, icon, features, price, slug, stats }: ServiceProps) {
  return (
    <Link href={`/services/${slug}`} className="block">
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
          className="relative p-8 bg-black border border-yellow-500 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-transform duration-300 overflow-hidden h-full"
        >
          {/* Glowing Border Aura */}
          <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-yellow-400 to-orange-600 opacity-30 blur-lg pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="w-16 h-16 mb-6 text-yellow-400">
              {icon}
            </div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
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

            {/* Features */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 space-y-2 flex-grow"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 mr-2 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 grid grid-cols-3 gap-4 text-center"
              >
                <div className="p-2 bg-black/50 rounded-lg border border-yellow-500/20">
                  <div className="text-xl font-bold text-yellow-400">{stats.projects}</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="p-2 bg-black/50 rounded-lg border border-yellow-500/20">
                  <div className="text-xl font-bold text-yellow-400">{stats.clients}</div>
                  <div className="text-xs text-gray-400">Clients</div>
                </div>
                <div className="p-2 bg-black/50 rounded-lg border border-yellow-500/20">
                  <div className="text-xl font-bold text-yellow-400">{stats.satisfaction}</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </motion.div>
            )}

            {/* Price */}
            {price && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-2xl font-bold text-yellow-400"
              >
                {price}
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <button 
                type="button"
                className="w-full px-6 py-3 text-lg font-semibold rounded-full border border-yellow-400 text-yellow-300 bg-transparent transition-all duration-300 hover:bg-yellow-400 hover:text-black drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </Tilt>
    </Link>
  );
}
