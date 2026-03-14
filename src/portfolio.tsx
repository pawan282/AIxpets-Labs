import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const portfolioCategories = [
  "All",
  "AI Automation",
  "Chatbots",
  "Machine Learning",
  "Computer Vision"
];

const portfolioData = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    description:
      "Automated chatbot system handling 80% of customer queries using NLP.",
    category: "Chatbots",
    result: "80% Support Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tags: ["ChatGPT", "NLP", "Automation"],
  },
  {
    id: 2,
    title: "AI Sales Prediction System",
    description:
      "Machine learning model predicting product demand and sales trends.",
    category: "Machine Learning",
    result: "35% Sales Forecast Accuracy",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    tags: ["Python", "ML", "Data Science"],
  },
  {
    id: 3,
    title: "Smart Warehouse Automation",
    description:
      "AI powered automation system optimizing warehouse logistics.",
    category: "AI Automation",
    result: "50% Faster Operations",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
    tags: ["Automation", "Robotics", "AI"],
  },
  {
    id: 4,
    title: "AI Face Recognition System",
    description:
      "Computer vision based security system using deep learning.",
    category: "Computer Vision",
    result: "99% Detection Accuracy",
    image:
      "https://images.unsplash.com/photo-1526378722484-cc5c510c0fef?q=80&w=1200",
    tags: ["OpenCV", "Deep Learning", "Security"],
  },
  {
    id: 5,
    title: "AI E-commerce Recommendation Engine",
    description:
      "Personalized product recommendation engine boosting conversions.",
    category: "Machine Learning",
    result: "25% Conversion Increase",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    tags: ["AI", "Ecommerce", "Recommendation"],
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === active);

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">

        <span className="inline-block bg-purple-100 text-purple-600 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
          Our Work
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Featured <span className="text-purple-600">AI Projects</span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Real-world AI solutions delivering measurable business results.
        </p>

      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-wrap justify-center gap-4">

        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-6 py-2 rounded-full font-semibold border transition ${
              active === c
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-slate-600 border-slate-300 hover:border-purple-600 hover:text-purple-600"
            }`}
          >
            {c}
          </button>
        ))}

      </div>

      {/* PORTFOLIO GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filtered.map((p, i) => (
          <div
            key={p.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition"
          >

            <div className="relative overflow-hidden">

              <img
                src={p.image}
                alt={p.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-6">

                <span className="text-purple-400 text-sm font-semibold mb-2">
                  ✨ {p.result}
                </span>

                <h3 className="text-white text-xl font-bold mb-2">
                  {p.title}
                </h3>

                <p className="text-slate-200 text-sm mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            <div className="p-6 flex justify-between items-center">

              <div>
                <h4 className="font-bold text-slate-900">{p.title}</h4>
                <p className="text-sm text-slate-500">📈 {p.result}</p>
              </div>

              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {p.category}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Portfolio;