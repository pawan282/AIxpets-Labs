import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const corporateCourses = [
  {
    id: 1,
    title: "AI for Business Leaders",
    subtitle: "Strategic AI adoption for executives",
    level: "Executive",
    duration: "2 Days",
    rating: 4.8,
    reviews: 120,
    teamSize: "5-30",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    tags: ["AI Strategy", "Automation", "Leadership"],
  },
  {
    id: 2,
    title: "Generative AI for Teams",
    subtitle: "ChatGPT & LLM tools for productivity",
    level: "Intermediate",
    duration: "3 Days",
    rating: 4.7,
    reviews: 90,
    teamSize: "10-50",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tags: ["ChatGPT", "Prompt Engineering", "AI Tools"],
  },
  {
    id: 3,
    title: "Machine Learning for Engineers",
    subtitle: "Hands-on ML training for development teams",
    level: "Advanced",
    duration: "5 Days",
    rating: 4.9,
    reviews: 150,
    teamSize: "10-100",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    tags: ["Python", "ML", "Deep Learning"],
  },
];

const Corporate = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    teamSize: "",
    program: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">

        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
          Corporate Training
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-6 mb-6">
          Upskill Your Team With{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            AI Expertise
          </span>
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Enterprise-grade AI training programs designed to boost productivity,
          innovation, and real business impact.
        </p>

        {/* STATS */}
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">1000+</h3>
            <p className="text-sm text-slate-500">Professionals Trained</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
            <p className="text-sm text-slate-500">Companies</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">4.8★</h3>
            <p className="text-sm text-slate-500">Avg Rating</p>
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Free Proposal
        </button>

      </div>

      {/* DELIVERY MODES */}
      <div className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-slate-50 rounded-2xl">🏢 On-site Training</div>
        <div className="p-6 bg-slate-50 rounded-2xl">🌐 Virtual Sessions</div>
        <div className="p-6 bg-slate-50 rounded-2xl">🔁 Hybrid Model</div>
      </div>

      {/* PROGRAMS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

        {corporateCourses.map((course, i) => (
          <div
            key={course.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all"
          >

            <img src={course.image} className="h-52 w-full object-cover" />

            <div className="p-6">

              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600">
                {course.title}
              </h3>

              <p className="text-slate-500 mb-4">{course.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">
                  ⭐ {course.rating} ({course.reviews})
                </span>

                <button
                  onClick={() => {
                    setShowForm(true);
                    setForm({ ...form, program: course.title });
                  }}
                  className="text-indigo-600 font-semibold"
                >
                  Get Proposal →
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* WHY US */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl font-bold mb-6">
          Why Companies Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-slate-50 rounded-xl">⚡ Fast Implementation</div>
          <div className="p-6 bg-slate-50 rounded-xl">🧠 Real-world Projects</div>
          <div className="p-6 bg-slate-50 rounded-xl">📈 ROI-focused Training</div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-12 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          Train Your Team with AI Experts
        </h2>
        <p className="mb-6">Let’s build future-ready teams together.</p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Request Proposal
        </button>
      </div>

      {/* MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Corporate Training Enquiry
                </h2>

                <form onSubmit={submitForm} className="space-y-4">

                  {["companyName","contactName","email","phone"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full border border-slate-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  ))}

                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                  >
                    <option value="">Team Size</option>
                    <option>5-10</option>
                    <option>10-50</option>
                    <option>50-100</option>
                    <option>100+</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-500"
                  >
                    Submit Enquiry
                  </button>

                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Enquiry Submitted 🎉
                </h2>
                <p className="text-slate-500 mb-6">
                  Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Corporate;