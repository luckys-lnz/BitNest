import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-center text-gray-300 border-t border-yellow-500 relative overflow-hidden">
      {/* Elegant Gradient Line */}
      <div className="absolute top-0 left-1/2 w-64 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2"></div>

      {/* Footer Content */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          Engineering the Digital Legacy
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Empowering businesses with cutting-edge technology and seamless digital solutions.
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="#" className="text-yellow-500 hover:text-orange-500 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-yellow-500 hover:text-orange-500 transition duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-yellow-500 hover:text-orange-500 transition duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-yellow-500 hover:text-orange-500 transition duration-300">
            <Facebook size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm opacity-75">
          © {new Date().getFullYear()} <span className="font-semibold text-yellow-500">Arch & Sons Tech</span>. All rights reserved.
        </p>
      </div>

      {/* Soft Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-yellow-500 opacity-10 blur-3xl"></div>
    </footer>
  );
}
