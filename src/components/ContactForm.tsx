"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from "three";

interface FormData {
  name: string;
  email: string;
  message: string;
}

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
    <mesh scale={1.5}>
      <sphereGeometry args={[1, 256, 256]} />
      <meshStandardMaterial
        map={earthTexture}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.15, 0.15)}
        roughness={0.3}
        metalness={0.1}
        emissive="#000000"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2000);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Stars Background - Always visible */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars 
            radius={150} 
            depth={60} 
            count={8000} 
            factor={4} 
            saturation={0}
            fade
          />
        </Canvas>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Earth - Hidden on mobile, visible on lg */}
          <div className="hidden lg:block w-1/2 h-[600px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={2.0}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2.5}
                enablePan={false}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <directionalLight position={[-5, -5, -5]} intensity={1} />
              <hemisphereLight color={"#ffffff"} groundColor={"#404040"} intensity={1} />
              <Earth />
              <EffectComposer>
                <Bloom
                  intensity={0.5}
                  luminanceThreshold={0.1}
                  luminanceSmoothing={0.9}
                />
                <Vignette offset={0.5} darkness={0.5} />
              </EffectComposer>
            </Canvas>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full flex flex-col justify-center bg-[#0A0A0A]/95 lg:bg-[#0A0A0A]/80 p-6 sm:p-8 rounded-xl shadow-2xl border-yellow-500 backdrop-blur-md"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 text-center mb-6">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-yellow-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-yellow-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-yellow-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors min-h-[150px]"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  disabled={loading || success}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ease-in-out duration-300 relative overflow-hidden ${
                    loading || success
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 hover:shadow-yellow-400/60"
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                      opacity: loading ? 1 : 0,
                      y: loading ? 0 : 20,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                      opacity: success ? 1 : 0,
                      scale: success ? [0.8, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ rotate: -45, scale: 0 }}
                        animate={{
                          rotate: success ? 0 : -45,
                          scale: success ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </motion.svg>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: success ? 1 : 0, x: success ? 0 : -10 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        Sent!
                      </motion.span>
                    </div>
                  </motion.div>

                  <motion.span
                    initial={false}
                    animate={{
                      opacity: !loading && !success ? 1 : 0,
                      y: !loading && !success ? 0 : -20,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
