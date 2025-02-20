import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-32 text-white">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B22222] glow text-center">Contact Us</h1>
      <p className="mt-6 text-lg text-gray-300 text-center">
        Let's discuss how we can <span className="text-[#D4AF37] font-semibold">bring your ideas to life.</span>
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  );
}
