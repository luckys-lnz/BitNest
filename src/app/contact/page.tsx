import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white">
      <h1 className="text-5xl font-bold text-center">Contact Us</h1>
      <p className="mt-6 text-lg text-gray-300 text-center">
        Let's discuss how we can bring your ideas to life.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  );
}
