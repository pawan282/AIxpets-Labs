import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    title: "AI Consulting",
    description:
      "Strategic AI consulting to help businesses adopt artificial intelligence and drive digital transformation.",
    icon: "🤖",
  },
  {
    id: 2,
    title: "AI Automation",
    description:
      "Automate repetitive workflows and processes using intelligent automation and AI-powered tools.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Custom AI Development",
    description:
      "We build custom AI models, chatbots, and enterprise solutions tailored to your business needs.",
    icon: "🧠",
  },
  {
    id: 4,
    title: "Machine Learning Solutions",
    description:
      "Deploy machine learning systems that analyze data, predict trends, and enhance decision-making.",
    icon: "📊",
  },
  {
    id: 5,
    title: "AI Chatbots",
    description:
      "Build intelligent chatbots that improve customer experience and automate support.",
    icon: "💬",
  },
  {
    id: 6,
    title: "AI Training & Workshops",
    description:
      "Professional AI training programs for students, developers, and enterprise teams.",
    icon: "🎓",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">

        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
          Our Services
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          AI Services That{" "}
          <span className="text-orange-600">Drive Results</span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          End-to-end AI solutions that transform businesses and create real impact.
        </p>

      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {servicesData.map((service, i) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-orange-500 transition-all duration-300 hover:shadow-xl"
          >

            <div className="text-4xl mb-6">{service.icon}</div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition">
              {service.title}
            </h3>

            <p className="text-slate-500 mb-6">
              {service.description}
            </p>

            <a
              href="tel:+919811263046"
              className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Get This Service →
            </a>

          </div>
        ))}

      </div>

      {/* CONTACT CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-24 mb-24 text-center bg-slate-900 rounded-3xl py-10">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your AI Solution?
        </h2>

        <p className="text-slate-300 mb-10">
          Contact our expert team and start transforming your business with AI.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="tel:+919811263046"
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919811263046"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-200 transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
};

export default Services;