"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        {/* BG IMAGE + OVERLAY */}
        <div className="absolute inset-0">
          <img
            src="https://www.shutterstock.com/image-photo/futuristic-poster-header-background-ai-600nw-2700672289.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <span className="inline-block px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 border border-white/20 text-white rounded-full mb-8 backdrop-blur">
            ARCHITECTING INTELLIGENCE
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Building the Future of{" "}
            <span className="text-orange-400">
              Artificial Intelligence
            </span>
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10">
            AIxpets Labs Private Limited is an artificial intelligence innovation
            company focused on enterprise AI transformation, automation systems,
            and future-ready workforce development.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:scale-105 transition">
              Contact Team
            </button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition">
              Our Vision
            </button>
          </div>

        </div>
      </section>


      {/* WHO WE ARE */}
     {/* STRATEGIC DOMAINS */}
<section className="relative py-20 text-black overflow-hidden">

  {/* BG IMAGE */}
  <div className="absolute inset-0">
    <img

      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/85"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-">
        Strategic Domains
      </h2>
      <p className="text-slate-600 text-xl tracking-widest uppercase">
        The pillars of our technological stack
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-4 gap-5">

      {/* BIG CARD */}
      <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-black/30 backdrop-blur-xl hover:shadow-2xl transition">
        <div className="mb-4 text-blue-400 text-2xl"></div>
        <h3 className="text-2xl font-bold mb-3">
          Enterprise AI Consulting
        </h3>
        <p className="text-slate-400 text-xl leading-relaxed">
          We engineer bespoke strategic roadmaps that bridge the gap between legacy operations and the frontier of cognitive computing.
        </p>
      </div>

      {/* SMALL CARD */}
      <div className="p-8 rounded-3xl bg-white/5 border border-black/30 backdrop-blur-xl hover:shadow-2xl transition">
        <div className="mb-4 text-purple-400 text-xl"></div>
        <h3 className="text-2xl font-semibold mb-2">
          AI Automation
        </h3>
        <p className="text-slate-400 text-xl">
          High-fidelity autonomous workflows that eliminate friction.
        </p>
      </div>

      {/* SMALL CARD */}
      <div className="p-8 rounded-3xl bg-white/5 border border-black/30 backdrop-blur-xl hover:shadow-2xl transition">
        <div className="mb-4 text-blue-300 text-xl"></div>
        <h3 className="text-2xl font-semibold mb-2">
          Elite Training
        </h3>
        <p className="text-slate-400 text-xl">
          Upskilling global workforces with AI-first programs.
        </p>
      </div>

      {/* SMALL CARD */}
      <div className="p-8 rounded-3xl bg-white/5 border border-black/30 backdrop-blur-xl hover:shadow-2xl transition">
        <div className="mb-4 text-green-400 text-xl"></div>
        <h3 className="text-2xl font-semibold mb-2">
          Innovation Lab
        </h3>
        <p className="text-slate-400 text-xl">
          Continuous R&D focused on proprietary AI frameworks.
        </p>
      </div>

      {/* WIDE CARD */}
      <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-black/30 backdrop-blur-xl hover:shadow-2xl transition flex justify-between items-center">

        <div>
          <h3 className="text-2xl font-bold mb-2">
            Agentic Frameworks
          </h3>
          <p className="text-slate-400 text-xl">
            Building autonomous multi-agent systems capable of reasoning and execution.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
          <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
          <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
        </div>

      </div>

    </div>

  </div>
</section>


      {/* STATS */}
     

      {/* AI LAB */}
     {/* AI LAB */}
<section className="pt-8 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-3">AI Innovation Lab</h2>
      <p className="text-slate-500">
        Next-generation artificial intelligence research and development
      </p>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "AI Research",
          desc: "Exploring advanced machine learning architectures and intelligent systems.",
          icon: "🧠",
        },
        {
          title: "AI Infrastructure",
          desc: "Developing scalable AI platforms for enterprise applications.",
          icon: "⚙️",
        },
        {
          title: "AI Development",
          desc: "Building innovative AI products like HelloGini.",
          icon: "🚀",
        },
        {
          title: "AI Automation",
          desc: "Seamless deployment of AI models into production-ready environments.",
          icon: "📦",
        },
        {
          title: "Data Engineering",
          desc: "Designing robust data pipelines and architectures for AI systems.",
          icon: "📊",
        },
        {
          title: "AI Security",
          desc: "Ensuring safe, ethical, and secure AI implementations across platforms.",
          icon: "🔐",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >

          {/* ICON */}
          <div className="text-3xl mb-4">{item.icon}</div>

          {/* TITLE */}
          <h3 className="font-bold text-lg mb-3 group-hover:text-orange-500 transition">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* INTELLIGENCE FRONTIERS */}
{/* INTELLIGENCE FRONTIERS */}
<section className="relative py-14 text-white overflow-hidden">

  {/* BG IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://www.shutterstock.com/image-photo/futuristic-poster-header-background-ai-600nw-2700672289.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-xl">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-4xl tracking-[0.3em] text-blue-300 mb-4">
  FUTURE <span className="text-orange-500">R&D</span>
</p>
          

          <p className="text-4xl   uppercase text-orange-500 mb-4">
  Intelligence Frontiers
</p>

          <div className="space-y-6 text-slate-300">

            <div>
              <h3 className="font-semibold xl  text-white mb-1">
                • Generative AI
              </h3>
              <p className="text-sm">
                Fine-tuning large language models for domain-specific enterprise intelligence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                • Autonomous Systems
              </h3>
              <p className="text-sm">
                Building goal-oriented agents that operate independently within secure ecosystems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                • Workflow Platforms
              </h3>
              <p className="text-sm">
                Next-gen SaaS products integrating AI directly into enterprise stacks.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT GRID */}
       {/* RIGHT CIRCLE SYSTEM */}
<div className="flex justify-center items-center relative w-full h-[400px]">

  {/* GLOW */}
<div className="absolute w-[380px] h-[380px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

  {/* ROTATING RING () */}
 {/* ORBIT SYSTEM */}
<div className="absolute w-[320px] h-[320px] border border-cyan-300/20 rounded-full animate-spin [animation-duration:20s]">
  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#22d3ee]"></div>
</div>

<div className="absolute w-[260px] h-[260px] border border-cyan-300/30 rounded-full animate-spin [animation-duration:14s]">
  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#22d3ee]"></div>
</div>

<div className="absolute w-[200px] h-[200px] border border-cyan-300/40 rounded-full animate-spin [animation-duration:10s]">
  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#22d3ee]"></div>
</div>

  {/* MIDDLE RING */}
 

  {/* CENTER */}
  <div className="w-[140px] h-[140px] rounded-full bg-cyan-500/30 backdrop-blur-xl border border-cyan-300/40 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.6)]">
    <p className="text-cyan-300 font-semibold">AIxperts</p>
    <p className="text-xs text-slate-300">Future Lab</p>
  </div>

  {/* LABELS */}
  <div className="absolute top-4 right-10 text-xs px-3 py-1 rounded-full border border-cyan-300/40 bg-white/5 backdrop-blur">
    Development
  </div>

  <div className="absolute left-6 top-1/2 text-xs px-3 py-1 rounded-full border border-cyan-300/40 bg-white/5 backdrop-blur">
    Growth
  </div>

  <div className="absolute right-4 top-1/2 text-xs px-3 py-1 rounded-full border border-cyan-300/40 bg-white/5 backdrop-blur">
    AI Systems
  </div>

  <div className="absolute bottom-4 text-xs px-3 py-1 rounded-full border border-cyan-300/40 bg-white/5 backdrop-blur">
    Compliance
  </div>

</div>

      </div>

    </div>

  </div>
</section>


      {/* TEAM (FIXED PREMIUM) */}
<section className="py-18 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Leadership Team
          </h2>
          <p className="text-slate-500 mt-3">
            Experts driving AIxpets Labs mission
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <TeamRowCard
            name="Pradeep Kumar"
            role="Founder & CEO"
            img="https://aixpertslabs.com/assets/pradeep_kumar-69a6af88.jpeg"
          />

          <TeamRowCard
            name="Anshu Bharti"
            role="Co-Founder & COO"
            img="https://aixpertslabs.com/assets/Anshu-5f8fa3a3.jpeg"
          />

          <TeamRowCard
            name="Dr. Harshu Bharti"
            role="Co-founder & CTO"
            img="https://aixpertslabs.com/assets/Harshu-67b2905b.jpeg"
          />

          <TeamRowCard
            name="Saurav Suman"
            role="Head of Sales"
            img="https://aixpertslabs.com/assets/Suman-bac29b31.png"
          />

        </div>
      </div>
    </section>
      {/* CTA */}
      <section className="py-20 text-center bg-white text-white">
        <h2 className="text-4xl font-bold mb-4">
          Join the AI Transformation
        </h2>

        <p className="text-slate-400 mb-8">
          Partner with AIxpets Labs to build intelligent systems.
        </p>

        <button className="px-10 py-4 bg-orange-500 rounded-xl font-semibold hover:scale-105 transition">
          Contact Our Team
        </button>
      </section>

    </div>
  )
}

function TeamRowCard({ name, role, img }) {
  return (
    <div className="group flex items-center gap-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 p-6">

      {/* IMAGE (FIXED RATIO - NO CUT ISSUE) */}
      <div className="w-[160px] h-[200px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500 transition">
          {name}
        </h3>

        <p className="text-slate-500 mt-1 text-sm">
          {role}
        </p>

        {/* premium divider */}
        <div className="w-12 h-[3px] bg-slate-300 mt-4 group-hover:w-20 group-hover:bg-orange-400 transition-all duration-300"></div>

        <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-md">
          Driving innovation and leading AI transformation initiatives across enterprise ecosystems.
        </p>
      </div>

    </div>
  );
}