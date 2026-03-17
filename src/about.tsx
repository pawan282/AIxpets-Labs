"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Globe, Users, Sparkles } from "lucide-react"

export default function AboutPage() {

  return (
    <div className="bg-blue-100 text-[#0f172a]">

      {/* HERO */}

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="max-w-3xl"
        >

          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
            About AIxperts Labs
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Building the future of
            <span className="text-indigo-600"> Artificial Intelligence</span>
          </h1>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            AIxpets Labs Private Limited is an artificial intelligence innovation
            company focused on enterprise AI transformation, automation systems,
            and future-ready workforce development.
          </p>

        </motion.div>

      </section>


      {/* STORY */}

      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16">

        <img
          src="https://i0.wp.com/blogs.xpheno.com/wp-content/uploads/2025/01/Next-Big-Thing-in-AI-1.jpg?resize=1024%2C536&ssl=1"
          className="rounded-2xl"
        />

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            AIxpets Labs was founded with a vision to make artificial
            intelligence accessible, scalable, and transformative for
            organizations worldwide.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            We bridge the gap between advanced AI research and real-world
            implementation by building intelligent systems that empower
            businesses, institutions, and governments.
          </p>

        </div>

      </section>
      <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

  <h2 className="text-4xl font-bold mb-6">
    AI Innovation Lab
  </h2>

  <p className="text-slate-600 max-w-2xl mx-auto">
    Our research labs focus on building next-generation artificial intelligence technologies across multiple domains.
  </p>

</div>

    {/* AI LAB CARDS */}

    <div className="grid md:grid-cols-3 gap-8 mt-12">

  <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-3">
      AI Research
    </h3>
    <p className="text-slate-500">
      Exploring advanced machine learning architectures and intelligent systems.
    </p>
  </div>

  <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-3">
      AI Infrastructure
    </h3>
    <p className="text-slate-500">
      Developing scalable AI platforms for enterprise applications.
    </p>
  </div>

  <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-3">
      AI Development
    </h3>
    <p className="text-slate-500">
      Building innovative AI products like HelloGini and intelligent automation platforms.
    </p>
  </div>

</div>
    {/* STATS */}

  </div>
</section>


      {/* MISSION + VISION */}

      <section className="bg-gray-50 py-14">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6">

          <div>

            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To empower organizations and institutions with transformative
              artificial intelligence technologies, enabling them to build
              intelligent systems and future-ready talent.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              To become a global leader in artificial intelligence innovation,
              shaping the next generation of AI-driven enterprises, education,
              and digital economies.
            
            </p>
            

          </div>

        </div>

      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">

  <div>
    <p className="text-4xl font-bold text-blue-600">50K+</p>
    <p className="text-sm text-slate-500">Students Trained</p>
  </div>

  <div>
    <p className="text-4xl font-bold text-blue-600">120+</p>
    <p className="text-sm text-slate-500">AI Projects Delivered</p>
  </div>

  <div>
    <p className="text-4xl font-bold text-blue-600">35+</p>
    <p className="text-sm text-slate-500">Enterprise Clients</p>
  </div>

  <div>
    <p className="text-4xl font-bold text-blue-600">25+</p>
    <p className="text-sm text-slate-500">Industry Partnerships</p>
  </div>

</div> 



      {/* TEAM */}

      <section className="bg-gray-50 py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-bold">
              Leadership Team
            </h2>

            <p className="text-gray-600 mt-4">
              Experts driving the AIxpets Labs mission.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-3">

            <TeamCard
              name="Pradeep Kumar"
              role="Founder & CEO"
              img="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
            />

            <TeamCard
              name="Anshu Bharti"
              role="Co-Founder & COO"
              img="https://aixpertslabs.com/assets/Anshu-5f8fa3a3.jpeg"
            />

            <TeamCard
              name="Dr. Harshu Bharti"
              role="Co-founder & CTO"
              img="https://aixpertslabs.com/assets/Harshu-67b2905b.jpeg"
            />
            <TeamCard
              name="Saurav Suman"
              role="Head of Sales & Partnership"
              img="https://aixpertslabs.com/assets/Suman-bac29b31.png"
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-14">

        <h2 className="text-4xl font-bold">
          Join the AI Transformation
        </h2>

        <p className="text-gray-600 mt-4">
          Partner with AIxpets Labs to build intelligent systems and future-ready
          organizations.
        </p>

        <button className="mt-8 bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90">
          Contact Our Team
        </button>

      </section>

    </div>
  )
}



function Feature({icon,title,desc}:{icon:any,title:string,desc:string}) {
  return (
    <div className="border border-gray-200 p-8 rounded-xl hover:shadow-lg transition">

      <div className="text-indigo-600 mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-600 text-sm mt-2">
        {desc}
      </p>

    </div>
  )
}



function TeamCard({name,role,img}:{name:string,role:string,img:string}) {
  return (
    <div>

      <img
        src={img}
        className="rounded-xl mb-6 w-full h-[420px] object-cover"
      />

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-indigo-600 text-sm">{role}</p>

    </div>
  )
}