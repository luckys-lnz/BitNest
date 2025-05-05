"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const phrases = [
  "Create Beautiful Websites Using Cutting-Edge Technology",
  "Design Engaging User Experiences That Drive Results",
  "Build Scalable Applications That Grow With Your Business",
];

const clients = [
  { name: "TechCorp", logo: "/clients/techcorp.svg" },
  { name: "InnovateX", logo: "/clients/innovatex.svg" },
  { name: "DigitalFlow", logo: "/clients/digitalflow.svg" },
  { name: "FutureTech", logo: "/clients/futuretech.svg" },
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText((prev) => currentPhrase.substring(0, prev.length + 1));
        if (text === currentPhrase) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setText((prev) => prev.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0B0B0D] text-white text-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1B14]/50 via-transparent to-[#0B0B0D]/50"></div>

      {/* Animated Light Effects */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[160px]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-3xl md:text-6xl font-bold uppercase tracking-wide text-yellow-400 drop-shadow-[0_0_25px_rgba(255,215,0,0.9)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building Exceptional Websites and Interfaces That Inspire Confidence
          </motion.h1>

          {/* Typing Subtext Animation */}
          <motion.p 
            className="mt-4 text-xl md:text-3xl text-gray-400 max-w-2xl mx-auto h-12 uppercase font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We Will {text}
            <span className="animate-blink">|</span>
          </motion.p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link href="/contact">
              <motion.button
                className="px-10 py-4 text-xl font-semibold rounded-full border-2 border-yellow-400 text-yellow-300 bg-transparent transition-all duration-300 hover:bg-yellow-400 hover:text-black drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255,215,0,0.5)" }}
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                className="px-10 py-4 text-xl font-semibold rounded-full bg-yellow-400 text-black transition-all duration-300 hover:bg-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255,215,0,0.5)" }}
              >
                View Our Work
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3 bg-yellow-400 rounded-full animate-scroll"></div>
        </div>
      </motion.div>
    </section>
  );
}
