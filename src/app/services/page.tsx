"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { CodeIcon, MobileIcon, DesktopIcon } from "@/components/Icons";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    icon: <CodeIcon className="w-16 h-16" />,
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Integration",
      "Security Implementation"
    ],
    slug: "web-development",
    stats: {
      projects: "100+",
      clients: "50+",
      satisfaction: "98%"
    }
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
    icon: <MobileIcon className="w-16 h-16" />,
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Push Notifications",
      "Offline Support"
    ],
    slug: "mobile-development",
    stats: {
      projects: "75+",
      clients: "35+",
      satisfaction: "97%"
    }
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
    icon: <DesktopIcon className="w-16 h-16" />,
    features: [
      "Cross-Platform Support",
      "Data Security",
      "System Integration",
      "Performance Optimization"
    ],
    slug: "desktop-solutions",
    stats: {
      projects: "50+",
      clients: "25+",
      satisfaction: "99%"
    }
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center px-6 py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Section Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-16"
      >
        <motion.h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B22222] glow text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Elevate Your Business with Our Expertise
        </motion.h1>
        
        <motion.p
          className="mt-4 text-lg text-center text-[#A0A0A0] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At <span className="text-[#D4AF37] font-semibold">Archi Tech</span>, we engineer digital experiences that inspire. Our team of experts harnesses the latest technologies to craft <span className="font-semibold">world-class</span> solutions, ensuring your business stays ahead of the competition.
        </motion.p>
      </motion.div>

      {/* Services Grid with Animation */}
      <motion.div
        className="relative z-10 mt-12 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ServiceCard 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              features={service.features} 
              slug={service.slug}
              stats={service.stats}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-500/20">
          <div className="text-4xl font-bold text-yellow-400">200+</div>
          <div className="text-gray-400 mt-2">Projects Completed</div>
        </div>
        <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-500/20">
          <div className="text-4xl font-bold text-yellow-400">100+</div>
          <div className="text-gray-400 mt-2">Happy Clients</div>
        </div>
        <div className="text-center p-6 bg-black/50 rounded-lg border border-yellow-500/20">
          <div className="text-4xl font-bold text-yellow-400">98%</div>
          <div className="text-gray-400 mt-2">Client Satisfaction</div>
        </div>
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="relative z-10 mt-24 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-xl text-[#A0A0A0]">
          Ready to take your business to the next level? Let&apos;s build something <span className="text-[#D4AF37] font-semibold">extraordinary</span>.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#B22222] rounded-lg shadow-lg transition duration-300 hover:shadow-[#D4AF37]/50 hover:scale-105"
        >
          Get Started Today
        </a>
      </motion.div>
    </main>
  );
}
