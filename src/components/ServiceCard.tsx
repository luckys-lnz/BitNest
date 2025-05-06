"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import Tilt from "react-parallax-tilt";

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

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  price,
  slug,
  stats,
}: ServiceProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden"
    >
      <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
        <Link
          href={`/services/${slug}`}
          className="p-6 h-full flex flex-col justify-between"
        >
          {/* Icon */}
          <div className="w-12 h-12 text-yellow-400 mb-4">{icon}</div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

          {/* Description */}
          <p className="text-gray-400 mb-4">{description}</p>

          {/* Features */}
          <ul className="mb-4 space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-400 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
          </ul>

          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              {stats.projects && (
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">
                    {stats.projects}
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              )}
              {stats.clients && (
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">
                    {stats.clients}
                  </div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
              )}
              {stats.satisfaction && (
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">
                    {stats.satisfaction}
                  </div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              )}
            </div>
          )}

          {/* Price */}
          {price && (
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              {price}
            </div>
          )}

          {/* CTA */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors text-sm font-medium">
              Learn More
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
}
