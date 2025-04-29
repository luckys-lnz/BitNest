"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { ExternalLinkIcon, ArrowRightIcon } from "@/components/Icons";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  stats?: {
    revenue?: string;
    users?: string;
    performance?: string;
  };
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance e-commerce platform with advanced search, filtering, and payment integration.",
    image: "/portfolio/ecommerce.jpg",
    link: "https://example.com/ecommerce",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    stats: {
      revenue: "$2M+",
      users: "50K+",
      performance: "99.9%"
    }
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management system for clinics and hospitals.",
    image: "/portfolio/healthcare.jpg",
    link: "https://example.com/healthcare",
    techStack: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    stats: {
      users: "10K+",
      performance: "99.99%"
    }
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial analytics and reporting platform for investment firms.",
    image: "/portfolio/finance.jpg",
    link: "https://example.com/finance",
    techStack: ["Angular", "TypeScript", "D3.js", "Firebase"],
    stats: {
      revenue: "$1.5M+",
      users: "5K+"
    }
  },
  {
    title: "Education Platform",
    description: "An interactive learning platform with video courses and progress tracking.",
    image: "/portfolio/education.jpg",
    link: "https://example.com/education",
    techStack: ["Next.js", "GraphQL", "MongoDB", "Cloudinary"],
    stats: {
      users: "100K+",
      performance: "99.95%"
    }
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#2A2A2A] text-yellow-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.stats.revenue && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{item.stats.revenue}</div>
                        <div className="text-sm text-gray-400">Revenue</div>
                      </div>
                    )}
                    {item.stats.users && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{item.stats.users}</div>
                        <div className="text-sm text-gray-400">Users</div>
                      </div>
                    )}
                    {item.stats.performance && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-400">{item.stats.performance}</div>
                        <div className="text-sm text-gray-400">Uptime</div>
                      </div>
                    )}
                  </div>
                )}

                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
                >
                  View Project
                  <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
