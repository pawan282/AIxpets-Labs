import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    title: "AI Consulting",
    description:
      "Strategic AI consulting to identify opportunities, reduce costs, and accelerate growth using intelligent systems.",
    icon: "🤖",
    points: ["AI Roadmap", "Use-case Discovery", "ROI Planning"],
  },
  {
    id: 2,
    title: "AI Automation",
    description:
      "Automate repetitive workflows with AI-driven systems that increase efficiency and reduce human effort.",
    icon: "⚙️",
    points: ["Process Automation", "RPA + AI", "Workflow Optimization"],
  },
  {
    id: 3,
    title: "Custom AI Development",
    description:
      "Custom-built AI solutions, chatbots, and LLM-based products tailored to your business.",
    icon: "🧠",
    points: ["Custom Models", "LLM Integration", "AI SaaS"],
  },
  {
    id: 4,
    title: "Machine Learning",
    description:
      "Advanced ML systems that analyze data, predict trends, and improve business decisions.",
    icon: "📊",
    points: ["Prediction Models", "Data Analysis", "Forecasting"],
  },
  {
    id: 5,
    title: "AI Chatbots",
    description:
      "Smart AI chatbots for customer support, lead generation, and automation.",
    icon: "💬",
    points: ["WhatsApp Bots", "Website Bots", "Voice AI"],
  },
  {
    id: 6,
    title: "AI Training",
    description:
      "Professional AI training programs for students, developers, and enterprises.",
    icon: "🎓",
    points: ["Workshops", "Corporate Training", "Hands-on Projects"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your business & goals" },
  { step: "02", title: "Strategy", desc: "Creating AI roadmap & planning" },
  { step: "03", title: "Development", desc: "Building & training AI models" },
  { step: "04", title: "Deployment", desc: "Launching & scaling solutions" },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
{/* HERO */}
<div className="relative bg-slate-950 overflow-hidden">

  {/* GRADIENT GLOW */}
  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl opacity-50"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

    {/* TAG */}
    <span className="inline-block bg-white/10 text-orange-400 border border-white/20 text-xs font-semibold px-5 py-2 rounded-full backdrop-blur-md mb-6 uppercase tracking-widest">
      Our Services
    </span>

    {/* HEADING */}
    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
      Transform Your Business With{" "}
      <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
        AI Solutions
      </span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
      We design, build, and deploy AI systems that automate workflows,
      enhance decision-making, and create measurable business impact.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

      <a
        href="tel:+919811263046"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        🚀 Get Started
      </a>

      <a
        href="#services"
        className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
      >
        Explore Services
      </a>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">

      {[
        { value: "50+", label: "Projects Delivered" },
        { value: "10+", label: "Industries" },
        { value: "100%", label: "Client Satisfaction" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl py-6 px-4 text-center hover:scale-105 transition"
        >
          <h3 className="text-3xl font-bold text-white mb-1">
            {stat.value}
          </h3>
          <p className="text-slate-400 text-sm">
            {stat.label}
          </p>
        </div>
      ))}

    </div>

  </div>
</div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {servicesData.map((service, i) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-6">{service.icon}</div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600">
              {service.title}
            </h3>

            <p className="text-slate-500 mb-4">{service.description}</p>

            <ul className="text-sm text-slate-400 mb-6 space-y-1">
              {service.points.map((p, index) => (
                <li key={index}>✔ {p}</li>
              ))}
            </ul>

            <a
              href="tel:+919811263046"
              className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Get This Service →
            </a>
          </div>
        ))}

      </div>

      {/* PROCESS */}
      

      {/* WHY US */}
      <div className="max-w-5xl mx-auto px-6 mt-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose AIxpets Labs?</h2>
        <p className="text-slate-500 mb-10">
          We combine deep AI expertise with real-world business understanding to deliver impactful solutions.
        </p>

       {/* PROCESS */}
<div className="max-w-7xl mx-auto px-6 mt-32">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">
      Our Process
    </h2>
    <p className="text-slate-500">
      A proven approach to deliver scalable AI solutions
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your business goals, challenges, and opportunities",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Creating AI roadmap, use-cases, and implementation plan",
      },
      {
        step: "03",
        title: "Development",
        desc: "Building, training, and testing AI models and systems",
      },
      {
        step: "04",
        title: "Deployment",
        desc: "Launching, scaling, and optimizing AI solutions",
      },
    ].map((item, i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        {/* STEP NUMBER */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-6 shadow-md">
          {item.step}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition">
          {item.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* HOVER LINE */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-b-3xl"></div>

      </div>
    ))}

  </div>
</div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-32 mb-24 text-center bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl py-6 text-white shadow-xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your AI Solution?
        </h2>

        <p className="mb-10 text-white/90">
          Let's create something powerful together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="tel:+919811263046"
            className="bg-white text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919811263046"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-8 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
};

export default Services;