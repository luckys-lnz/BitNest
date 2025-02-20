"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Custom Earth Component
function Earth() {
  const earthTexture = useLoader(THREE.TextureLoader, "/earth0.jpg");
  const normalMap = useLoader(THREE.TextureLoader, "/earth-normal.png");

  // Texture wrapping at poles
  earthTexture.wrapS = earthTexture.wrapT = THREE.MirroredRepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.MirroredRepeatWrapping;

  // Texture filtering
  earthTexture.colorSpace = THREE.SRGBColorSpace;
  earthTexture.anisotropy = 16;
  earthTexture.minFilter = THREE.LinearMipMapLinearFilter;
  earthTexture.magFilter = THREE.LinearFilter;

  return (
    <mesh scale={2}>
      <sphereGeometry args={[1, 256, 256]} /> {/* Increase segments for smoother surface */}
      <meshStandardMaterial
        map={earthTexture}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.1, 0.1)} // Adjust normal map intensity
        roughness={0.4}
        metalness={0.02}
      />
    </mesh>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" }); // Clear the form after submitting
    }, 2000); // Simulating form submission
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* 3D Background */}
      <Canvas className="absolute inset-0 !z-0">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <hemisphereLight color={"#ffffff"} groundColor={"#404040"} intensity={1.2} />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} />

        {/* Earth with Properly Wrapped Texture */}
        <Earth />
      </Canvas>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-lg bg-[#0A0A0A]/80 p-8 rounded-xl shadow-2xl border border-yellow-500 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 text-center mb-6">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-md bg-gray-800 border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-md bg-gray-800 border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 rounded-md bg-gray-800 border border-yellow-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
            required
          />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ease-in-out duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 hover:shadow-yellow-400/60"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
