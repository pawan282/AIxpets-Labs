import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const instituteCourses = [
  {
    id: 1,
    title: "Complete AI & ML Program",
    subtitle: "Become an AI engineer with real projects",
    level: "Beginner",
    duration: "6 Months",
    rating: 4.9,
    reviews: 420,
    students: "3200+",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tags: ["Python", "ML", "Deep Learning"],
  },
  {
    id: 2,
    title: "Generative AI & LLM Course",
    subtitle: "Master ChatGPT, LLMs and AI tools",
    level: "Intermediate",
    duration: "3 Months",
    rating: 4.8,
    reviews: 260,
    students: "2100+",
    image:
      "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1200",
    tags: ["ChatGPT", "LLMs", "Prompt Engineering"],
  },
  {
    id: 3,
    title: "Data Science Program",
    subtitle: "Data analysis, ML & real datasets",
    level: "Beginner",
    duration: "5 Months",
    rating: 4.7,
    reviews: 300,
    students: "2800+",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    tags: ["Python", "Pandas", "ML"],
  },
];

export default function Institute() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-24">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">

        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
          Institute Training
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-6 mb-6">
          AI Courses for <span className="text-purple-600">Individuals</span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Industry focused AI programs with real projects and placement support.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold"
        >
          Enroll Now
        </button>

      </div>

      {/* COURSES */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

        {instituteCourses.map((course, i) => (
          <div
            key={course.id}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition"
          >

            <img
              src={course.image}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {course.title}
              </h3>

              <p className="text-slate-500 mb-4">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-100 px-3 py-1 rounded-full"
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
                    setForm({ ...form, course: course.title });
                  }}
                  className="text-purple-600 font-semibold"
                >
                  Enroll →
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)}
        >

          <div
            className="bg-white rounded-3xl p-10 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Enroll in Course
                </h2>

                <form onSubmit={submitForm} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                  />

                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                  >
                    <option value="">Select Course</option>
                    {instituteCourses.map((c) => (
                      <option key={c.id}>{c.title}</option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-full"
                  >
                    Submit Enrollment
                  </button>

                </form>
              </>
            ) : (

              <div className="text-center">

                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Enrollment Sent 🎉
                </h2>

                <p className="text-slate-500 mb-6">
                  Our team will contact you shortly.
                </p>

                <button
                  onClick={() => setShowForm(false)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-full"
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
}