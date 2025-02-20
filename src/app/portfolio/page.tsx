"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  { title: "E-Commerce Platform", description: "A robust online shopping system.", image: "/images/ecommerce.jpg" },
  { title: "SaaS Dashboard", description: "An analytics dashboard with real-time data.", image: "/images/dashboard.jpg" },
  { title: "AI-Powered Assistant", description: "A cutting-edge AI chatbot for customer support.", image: "/images/ai-assistant.jpg" },
  { title: "FinTech App", description: "A secure financial management platform.", image: "/images/fintech.jpg" },
  { title: "Healthcare Portal", description: "A telemedicine platform for virtual consultations.", image: "/images/healthcare.jpg" },
  { title: "Enterprise CRM", description: "A customer relationship management tool.", image: "/images/crm.jpg" },
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
        At <span className="text-[#D4AF37] font-semibold">Arch & Sons Tech</span>, we engineer digital experiences that push the boundaries of innovation. 
        Here are some of our latest projects, each crafted with precision, expertise, and an unwavering commitment to excellence.
      </motion.p>
      
      {/* Projects Grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 w-full max-w-7xl">
        {projects.map((project, index) => (
          <Tilt key={index} glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-xl border border-[#D4AF37] bg-gradient-to-br from-[#D4AF37] to-[#B22222] p-[2px] hover:scale-105 transition-transform"
            >
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden">
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-64 object-cover rounded-t-xl" />
                <div className="p-6">
                  <h3 className="text-3xl font-semibold text-[#D4AF37]">{project.title}</h3>
                  <p className="mt-4 text-[#A0A0A0] text-lg">{project.description}</p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </main>
  );
}
