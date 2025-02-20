"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-7xl text-center py-32">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B22222] glow"
        >
          About Arch & Sons Tech
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-[#A0A0A0] max-w-3xl mx-auto"
        >
          Engineering the Digital Legacy – delivering premium software solutions with a touch of excellence.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="w-full max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-semibold text-[#D4AF37]">Our Story</h2>
          <p className="mt-4 text-[#A0A0A0] text-lg">
            Founded with the vision of building world-class digital experiences, Arch & Sons Tech specializes in web,
            mobile, and desktop applications. We combine innovation with precision to craft cutting-edge solutions.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
        >
          <Image src="/logo.png" width={400} height={300} alt="About Us" className="rounded-lg shadow-2xl" />
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="w-full max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-semibold text-center text-[#D4AF37]">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Excellence", desc: "We strive for perfection in every solution we deliver." },
            { title: "Innovation", desc: "We embrace technology to create groundbreaking products." },
            { title: "Integrity", desc: "Honesty and transparency define our approach." },
          ].map((value, index) => (
            <Tilt key={index} glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B22222] p-6 rounded-xl shadow-xl border border-[#D4AF37] text-black font-semibold hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl text-black font-semibold">{value.title}</h3>
                <p className="mt-2 text-black text-lg">{value.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>
    </main>
  );
}
