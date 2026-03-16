"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Globe, Users, Sparkles } from "lucide-react"

export default function AboutPage() {

  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="max-w-3xl"
        >

          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
            About AIxpets Labs
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


      {/* STATS */}

      <section className="border-y border-gray-200 py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {[
            {num:"50K+",label:"Students Trained"},
            {num:"120+",label:"AI Projects Delivered"},
            {num:"35+",label:"Enterprise Clients"},
            {num:"25+",label:"Industry Partnerships"}
          ].map((item,i)=>(
            <div key={i}>
              <h3 className="text-4xl font-bold text-indigo-600">{item.num}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}

        </div>

      </section>


      {/* STORY */}

      <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16">

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          className="rounded-2xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-6">
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


      {/* MISSION + VISION */}

      <section className="bg-gray-50 py-28">

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


      {/* INNOVATION LAB */}

      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            AI Innovation Lab
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our research labs focus on building next-generation artificial
            intelligence technologies across multiple domains.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-10">

          <Feature
            icon={<Brain />}
            title="AI Research"
            desc="Exploring advanced machine learning architectures and intelligent systems."
          />

          <Feature
            icon={<Cpu />}
            title="AI Infrastructure"
            desc="Developing scalable AI platforms for enterprise applications."
          />

          <Feature
            icon={<Sparkles />}
            title="AI Product Development"
            desc="Building innovative AI products like HelloGini and intelligent automation platforms."
          />

        </div>

      </section>


      {/* TEAM */}

      <section className="bg-gray-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-bold">
              Leadership Team
            </h2>

            <p className="text-gray-600 mt-4">
              Experts driving the AIxpets Labs mission.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <TeamCard
              name="Marcus Thorne"
              role="Founder & CEO"
              img="https://randomuser.me/api/portraits/men/32.jpg"
            />

            <TeamCard
              name="Sarah Chen"
              role="VP Product"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            />

            <TeamCard
              name="Dr. Elias Vance"
              role="Chief Research Officer"
              img="https://randomuser.me/api/portraits/men/65.jpg"
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-28">

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
        className="rounded-xl mb-6 w-full h-[320px] object-cover"
      />

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-indigo-600 text-sm">{role}</p>

    </div>
  )
}