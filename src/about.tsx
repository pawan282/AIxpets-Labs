"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

type Stat = {
  id: number
  icon: string
  number: string
  label: string
}

type Team = {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

const statsData: Stat[] = [
  { id: 1, icon: "🎓", number: "10,000+", label: "Students Trained" },
  { id: 2, icon: "🏢", number: "150+", label: "Enterprise Projects" },
  { id: 3, icon: "🌎", number: "20+", label: "Countries Served" },
  { id: 4, icon: "⭐", number: "5+", label: "Years Experience" },
]

const teamData: Team[] = [
  {
    id: 1,
    name: "Pradeep Kumar",
    role: "Founder & CEO",
    bio: "AI strategist and entrepreneur focused on transforming businesses with AI.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "AI Engineer",
    bio: "Specialist in machine learning systems and enterprise AI solutions.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Anita Verma",
    role: "Data Scientist",
    bio: "Expert in predictive analytics and AI model development.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="bg-gray-50 py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            India's Most Trusted{" "}
            <span className="text-blue-600">AI Company</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Founded by Pradeep Kumar — headquartered at Logix Cyber Park, Noida.
            Building the future of AI since 2019.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* images */}
          <div className="relative" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              className="rounded-xl shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80"
              className="absolute -bottom-10 -right-10 w-40 rounded-lg shadow-md"
            />

            <div className="absolute -left-10 bottom-10 bg-white p-4 rounded-xl shadow">
              <p className="text-3xl font-bold text-blue-600">5+</p>
              <p className="text-sm text-gray-500">Years Excellence</p>
            </div>
          </div>

          {/* text */}
          <div data-aos="fade-left">
            <span className="text-blue-600 font-semibold">Our Story</span>

            <h2 className="text-3xl font-bold mt-3">
              Why AI Experts Labs?
            </h2>

            <p className="text-gray-600 mt-4">
              AI Experts Labs was founded with a single vision — to make
              Artificial Intelligence accessible to every business and
              professional in India and beyond.
            </p>

            <p className="text-gray-600 mt-4">
              Under the leadership, we have grown from a small AI consulting
              firm to India's leading AI training and solutions company with
              10,000+ students trained and 150+ enterprise projects delivered.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <span>📍</span>
                <div>
                  <p className="font-semibold">Headquarters</p>
                  <p className="text-gray-500 text-sm">
                    Logix Cyber Park, Tower C, 9th Floor, Sector 62, Noida
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span>✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-500 text-sm">
                    pradeep@aixpertslabs.com
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          {statsData.map((s) => (
            <div
              key={s.id}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="text-2xl font-bold mt-2">{s.number}</h3>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">Our Team</span>
            <h2 className="text-3xl font-bold mt-2">
              Meet The <span className="text-blue-600">Experts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {teamData.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={m.image}
                  className="rounded-t-xl w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="font-semibold text-lg">{m.name}</h3>
                  <p className="text-blue-600 text-sm">{m.role}</p>

                  <p className="text-gray-500 text-sm mt-3">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  )
}