import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import PortfolioItem from "@/components/PortfolioItem";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Web Development", description: "Crafting high-performance, scalable web applications." },
  { title: "Mobile Apps", description: "Developing seamless mobile experiences for iOS and Android." },
  { title: "Desktop Applications", description: "Building robust desktop software for businesses." },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex w-full">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
          Our Services
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      {/* PortfolioItem */}
      <section className="w-full max-w-7xl px-6 py-12 text-white">
        <PortfolioItem />
      </section>

      {/* ContactForm */}
      <section className="w-full max-w-7xl px-6 py-12">
        <ContactForm />
      </section>
    </main>
  );
}
