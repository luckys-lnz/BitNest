"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";
import Button from "@/components/Button";

const projects = [
  {
    title: "Todo Application",
    description: "A sleek and intuitive task manager to help users stay organized and boost productivity.",
    image: "/images/todo.png",
    codeUrl: "https://github.com/yourusername/todo-app",
    previewUrl: "https://todo.yoursite.com",
  },
  {
    title: "Portfolio",
    description: "A personal showcase of projects, skills, and experience, crafted to make a lasting impression.",
    image: "/images/portfolio.png",
    codeUrl: "https://github.com/yourusername/portfolio",
    previewUrl: "https://yourportfolio.com",
  },
  {
    title: "Luda Chat MVP",
    description: "A real-time chat application designed for seamless communication with a modern UI and responsive features.",
    image: "/images/luda-chat.png",
    codeUrl: "https://github.com/yourusername/luda-chat",
    previewUrl: "https://chat.luda.com",
  },
  {
    title: "Currency Converter",
    description: "A fast and reliable tool to convert currencies in real-time using up-to-date exchange rates.",
    image: "/images/currency-converter.png",
    codeUrl: "https://github.com/yourusername/currency-converter",
    previewUrl: "https://converter.yoursite.com",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center px-6 py-32 overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B22222] glow text-center"
      >
        Our Portfolio
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg text-[#A0A0A0] max-w-3xl text-center"
      >
        At <span className="text-[#D4AF37] font-semibold">Archi Tech</span>, we
        engineer digital experiences that push the boundaries of innovation.
        Here are some of our latest projects, each crafted with precision,
        expertise, and an unwavering commitment to excellence.
      </motion.p>

      {/* Projects Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.4}
            scale={1.05}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-xl border border-[#D4AF37] bg-gradient-to-br from-[#D4AF37] to-[#B22222] hover:scale-105 transition-transform"
            >
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden flex flex-col h-full relative">
                {/* Internal Glow (Box Shadow) */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 opacity-30 pointer-events-none transition-all duration-300 ease-in-out hover:opacity-50"></div>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}  // Further reduced width for smaller cards
                  height={300} // Reduced height for consistency
                  className="w-full h-48 object-cover rounded-t-xl" // Adjusted height for the image
                />
                <div className="p-4 flex flex-col justify-between flex-grow"> {/* Reduced padding */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#D4AF37]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-[#A0A0A0] text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-3">
                    {/* View Code Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        label={
                          <>
                            <Github className="text-lg" /> View Code
                          </>
                        }
                        onClick={() => window.open(project.codeUrl, "_blank")}
                        className="bg-[#D4AF37] text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition"
                      />
                    </motion.div>

                    {/* Preview Site Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        label={
                          <>
                            <ExternalLink className="text-lg" /> Live Preview
                          </>
                        }
                        onClick={() => window.open(project.previewUrl, "_blank")}
                        className="bg-[#B22222] text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </main>
  );
}
