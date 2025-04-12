"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from 'next/link'


const phrases = [
  "Design Your Imaginations",
  "Crafting the Future of Technology",
  "Empowering Your Business",
  "Engineering the Digital Legacy",
  "Innovating the Future of Software",
  "Building Scalable, High-Performance Solutions",
  "Your Vision, Our Technology",
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
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0B0B0D] text-white text-center overflow-hidden">
      {/* Background with Gold Accents */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1B14] via-transparent to-[#0B0B0D] opacity-70"></div>
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[160px] opacity-40"></div>
        <div className="absolute bottom-0 right-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] opacity-30"></div>
      </div>

      {/* Floating Light Effects */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] opacity-20"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 1, 1.1],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-[0_0_25px_rgba(255,215,0,0.9)]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Arch Tech
        </motion.h1>

        {/* Typing Subtext Animation */}
        <p className="mt-4 text-lg md:text-4xl text-gray-400 max-w-2xl h-9">
          {text}
          <span className="animate-blink">|</span>
        </p>

        {/* Call to Action Button */}
        <Link
          href="/contact"
        >
          <motion.button
            className="mt-20 px-8 py-3 text-lg font-semibold rounded-full border border-yellow-400 text-yellow-300 bg-transparent transition-all duration-300 hover:bg-yellow-400 hover:text-black drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Work With Me
          </motion.button>
        </Link>

      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 bg-yellow-500/40 rounded-full blur-[40px]"
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -20, 0],
          opacity: [0.5, 1, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-500/30 rounded-full blur-[50px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          opacity: [0.5, 1, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  );
}
