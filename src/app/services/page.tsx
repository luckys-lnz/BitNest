"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Web Development",
    description: (
      <>
        We engineer <strong>next-generation web experiences</strong> that blend{" "}
        <strong>speed, aesthetics, and functionality</strong>. From high-converting landing pages to complex enterprise platforms, our solutions are built to{" "}
        <strong>captivate, perform, and scale</strong>. Elevate your digital presence with{" "}
        <span className="text-yellow-400">cutting-edge technology</span> and sleek, immersive designs.
      </>
    ),
  },
  {
    title: "Mobile App Development",
    description: (
      <>
        Crafting <strong>intuitive, high-performance mobile applications</strong> that redefine user engagement. Whether for iOS or Android, we design sleek, feature-packed apps that deliver{" "}
        <strong>seamless performance, pixel-perfect UI, and an unmatched user experience</strong>—helping your business stay ahead in the{" "}
        <span className="text-yellow-400">mobile-first world</span>.
      </>
    ),
  },
  {
    title: "Desktop Software Solutions",
    description: (
      <>
        Powerful, <strong>enterprise-grade desktop applications</strong> designed for{" "}
        <strong>efficiency, security, and scalability</strong>. Whether you need{" "}
        <span className="text-yellow-400">high-speed productivity tools, data-driven business software, or advanced automation</span>, our solutions are engineered to{" "}
        <strong>maximize performance, enhance workflows, and drive success.</strong>
      </>
    ),
  },
];



export default function Services() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center px-6 py-32 overflow-hidden">
      {/* Section Header */}
      <motion.h1
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B22222] glow text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Elevate Your Business with Our Expertise
      </motion.h1>
      
      <motion.p
        className="mt-4 text-lg text-center text-[#A0A0A0] max-w-3xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        At <span className="text-[#D4AF37] font-semibold">Arch & Sons Tech</span>, we engineer digital experiences that inspire. Our team of experts harnesses the latest technologies to craft <span className="font-semibold">world-class</span> solutions, ensuring your business stays ahead of the competition.
      </motion.p>

      {/* Services Grid with Animation */}
      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <ServiceCard title={service.title} description={service.description} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-xl text-[#A0A0A0]">
          Ready to take your business to the next level? Let's build something <span className="text-[#D4AF37] font-semibold">extraordinary</span>.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-black bg-[#D4AF37] rounded-lg shadow-lg transition duration-300 hover:bg-[#B22222] hover:text-white hover:shadow-[#D4AF37] hover:shadow-lg"
        >
          Get Started Today
        </a>
      </motion.div>
    </main>
  );
}
