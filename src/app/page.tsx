import { ReactNode } from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import PortfolioItem from "@/components/PortfolioItem";
import ServiceCard from "@/components/ServiceCard";
import { CodeIcon, MobileIcon, DesktopIcon } from "@/components/Icons";

const services: {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  features: string[];
  price: string;
  slug: string;
}[] = [
    {
      title: "Web Development",
      description: "Crafting high-performance, scalable web applications with modern technologies and best practices.",
      icon: <CodeIcon />,
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Progressive Web Apps",
        "Performance Optimization"
      ],
      price: "Starting at $2,500",
      slug: "web-development"
    },
    {
      title: "Mobile Apps",
      description: "Developing seamless mobile experiences for iOS and Android with native and cross-platform solutions.",
      icon: <MobileIcon />,
      features: [
        "iOS & Android Development",
        "Cross-platform Apps",
        "Push Notifications",
        "Offline Capabilities",
        "App Store Optimization"
      ],
      price: "Starting at $3,500",
      slug: "mobile-apps"
    },
    {
      title: "Desktop Applications",
      description: "Building robust desktop software for businesses with modern frameworks and security features.",
      icon: <DesktopIcon />,
      features: [
        "Windows & macOS Apps",
        "Electron Applications",
        "System Integration",
        "Data Security",
        "Auto-updates"
      ],
      price: "Starting at $4,000",
      slug: "desktop-applications"
    }
  ];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex w-full">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver cutting-edge solutions tailored to your business needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              price={service.price}
              slug={service.slug}
            />
          ))}
        </div>
      </section>

      {/* PortfolioItem */}
      <section className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <PortfolioItem />
      </section>

      {/* ContactForm */}

      <section className="w-full max-w-7xl px-6 py-20">
        {/* <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-4">
          Contact Us
        </h2> */}
        <ContactForm />
      </section>
    </main >
  );
}
