"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon, ArrowLeftIcon } from "@/components/Icons";

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  category: string;
  stats?: {
    revenue?: string;
    users?: string;
    performance?: string;
  };
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance e-commerce platform with advanced search, filtering, and payment integration. Built with modern technologies to handle high traffic and complex transactions.",
    image: "/portfolio/ecommerce.jpg",
    link: "https://example.com/ecommerce",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    category: "Web Development",
    stats: {
      revenue: "$2M+",
      users: "50K+",
      performance: "99.9%"
    }
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management system for clinics and hospitals. Features include patient records, appointment scheduling, and telemedicine capabilities.",
    image: "/portfolio/healthcare.jpg",
    link: "https://example.com/healthcare",
    techStack: ["Vue.js", "Python", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    category: "Enterprise Solutions",
    stats: {
      users: "10K+",
      performance: "99.99%"
    }
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial analytics and reporting platform for investment firms. Provides advanced data visualization and predictive analytics capabilities.",
    image: "/portfolio/finance.jpg",
    link: "https://example.com/finance",
    techStack: ["Angular", "TypeScript", "D3.js", "Firebase", "TensorFlow", "Python"],
    category: "Data Analytics",
    stats: {
      revenue: "$1.5M+",
      users: "5K+"
    }
  },
  {
    title: "Education Platform",
    description: "An interactive learning platform with video courses and progress tracking. Features include live classes, assignments, and certification programs.",
    image: "/portfolio/education.jpg",
    link: "https://example.com/education",
    techStack: ["Next.js", "GraphQL", "MongoDB", "Cloudinary", "WebRTC", "Stripe"],
    category: "EdTech",
    stats: {
      users: "100K+",
      performance: "99.95%"
    }
  }
];

const categories = ["All", "Web Development", "Enterprise Solutions", "Data Analytics", "EdTech"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItemProps | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our diverse range of projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black"
                  : "bg-[#1A1A1A] text-gray-400 hover:bg-[#2A2A2A]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-sm bg-yellow-400 text-black rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
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
                  className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors w-full justify-center"
                >
                  View Project
                  <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
