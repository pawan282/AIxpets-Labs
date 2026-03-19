import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  "All",
  "AI Automation",
  "Chatbots",
  "Machine Learning",
  "Computer Vision"
];

const projects = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    category: "Chatbots",
    problem: "High support load & slow response time",
    solution: "LLM-powered chatbot integrated with CRM",
    result: "80% Support Automation",
    impact: "Reduced cost by 60% & improved CX",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600",
    tags: ["ChatGPT", "NLP", "Automation"],
  },
  {
    id: 2,
    title: "AI Sales Prediction System",
    category: "Machine Learning",
    problem: "Unpredictable sales & poor forecasting",
    solution: "ML model using historical + seasonal data",
    result: "35% Accuracy Improvement",
    impact: "Optimized inventory & planning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    id: 3,
    title: "Smart Warehouse Automation",
    category: "AI Automation",
    problem: "Manual operations causing delays",
    solution: "AI-driven logistics automation system",
    result: "50% Faster Operations",
    impact: "40% reduction in manual effort",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600",
    tags: ["Automation", "Robotics", "AI"],
  },
  {
    id: 4,
    title: "AI Face Recognition",
    category: "Computer Vision",
    problem: "Security vulnerabilities",
    solution: "Deep learning-based face detection system",
    result: "99% Accuracy",
    impact: "Enterprise-grade security upgrade",
    image: "https://images.unsplash.com/photo-1526378722484-cc5c510c0fef?q=80&w=1600",
    tags: ["OpenCV", "Deep Learning"],
  },
  {
    id: 5,
    title: "E-commerce Recommendation Engine",
    category: "Machine Learning",
    problem: "Low conversion rate",
    solution: "Personalized AI recommendation engine",
    result: "25% Conversion Boost",
    impact: "Significant revenue growth",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
    tags: ["AI", "Ecommerce"],
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
      {/* HERO */}
{/* HERO */}
{/* HERO */}
<div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video/bh2xv3pb2nrmt0cwzzya1w323r_result_.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* GRADIENT GLOW */}
  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
  bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl opacity-50"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 text-center">

    {/* TAG (same as services) */}
    <span className="inline-block 
    bg-white/10 border border-white/20 
    text-orange-400 text-sm md:text-base font-extrabold 
    px-8 py-3 rounded-full backdrop-blur-md 
    uppercase tracking-[0.50em] 
    mb-8 shadow-lg">
      OUR PORTFOLIO
    </span>

    {/* HEADING (bigger like services) */}
    <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight mb-6">
      Showcasing Our{" "}
      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
        AI Projects
      </span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10">
      Explore real-world AI solutions we’ve built — from automation systems 
      to intelligent platforms driving business transformation.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

      <a
        href="#projects"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        🚀 View Projects
      </a>

      <a
        href="/contact"
        className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
      >
        Start Your Project
      </a>

    </div>

    {/* STATS (same style as services strip) */}
    <div className="max-w-5xl mx-auto border-y border-white/10">

      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="p-8 border-r border-white/10 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            Projects Completed
          </p>
          <p className="text-3xl font-bold text-white">50+</p>
        </div>

        <div className="p-8 border-r border-white/10 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            AI Solutions
          </p>
          <p className="text-3xl font-bold text-white">20+</p>
        </div>

        <div className="p-8 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            Client Satisfaction
          </p>
          <p className="text-3xl font-bold text-white">100%</p>
        </div>

      </div>

    </div>

  </div>
</div>

      {/* FILTER */}
      <div className="flex justify-center flex-wrap gap-4 mt-20 mb-16 px-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-6 py-2 rounded-full font-semibold ${
              active === c
                ? "bg-purple-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-purple-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filtered.map((p, i) => (
          <div
            key={p.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
          >

            <img
              src={p.image}
              className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold mb-2">{p.title}</h3>

              <p className="text-sm text-slate-500 mb-2">
                ❌ {p.problem}
              </p>

              <p className="text-sm text-slate-500 mb-2">
                💡 {p.solution}
              </p>

              <p className="text-sm font-semibold text-purple-600 mb-1">
                📈 {p.result}
              </p>

              <p className="text-xs text-green-600 mb-3">
                🚀 {p.impact}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                {p.category}
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* PROCESS */}
      <div className="max-w-6xl mx-auto px-6 mt-32 text-center">
        <h2 className="text-4xl font-bold mb-10">How We Deliver</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-50 rounded-xl">🔍 Discovery</div>
          <div className="p-6 bg-slate-50 rounded-xl">📊 Strategy</div>
          <div className="p-6 bg-slate-50 rounded-xl">⚙️ Build</div>
          <div className="p-6 bg-slate-50 rounded-xl">🚀 Deploy</div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <p className="text-xl italic text-slate-600">
          "AIxpets Labs transformed our operations with automation. We saw
          immediate ROI within months."
        </p>
        <p className="mt-4 font-semibold">— Enterprise Client</p>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-32 mb-24 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Want Similar Results?
        </h2>

        <p className="mb-6">
          Let’s build your next AI solution together.
        </p>

        <a
          href="tel:+919811263046"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold"
        >
          📞 Start Your Project
        </a>
      </div>

    </div>
  );
};

export default Portfolio;