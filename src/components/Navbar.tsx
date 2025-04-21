"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-yellow-500/30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-wide">
          <Image src="/logo.png" alt="Arch & Sons Tech Logo" width={80} height={80} />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Archi Tech
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="relative group transition-all"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md text-white py-6 px-6 space-y-4 shadow-xl">
          {["About", "Services", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
