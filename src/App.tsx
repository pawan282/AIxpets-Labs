import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BrainCircuit, 
  Workflow, 
  Users, 
  Zap, 
  Menu, 
  X, 
  Mic, 
  ChevronRight,
  BarChart3,
  ShieldCheck,
  Cpu,
  Globe,
  Sparkles,
  Layers,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Search,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Academic', href: '#' },
    { name: 'Portfolio', href: '#' },
     { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
         <img
    src="https://aixpertslabs.com/assets/logo8-4a902e74.png"
    alt="AIxperts Labs Logo"
    className="h-10 w-auto"
  />
</div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 border-r border-slate-200 pr-8 mr-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-slate-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a href="#" className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" /> 
            </a>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-100">
              Free Consultation 
            </button>
          </div>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden px-8 py-24 overflow-hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-2xl font-bold text-slate-900">
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white w-full py-5 rounded-2xl font-bold text-xl">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {

  const companies = [
    "Google","Microsoft","Amazon","Meta","Apple","Netflix",
    "Adobe","Salesforce","IBM","Intel","Nvidia","Oracle"
  ];

  const doubledCompanies = [...companies, ...companies];

  return (
    <>
      <section className="relative h-[80vh] flex items-start  py-16 pt-02 overflow-hidden hero-futuristic-bg">

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10  pt-10">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles className="w-4 h-4" /> Leading the AI Revolution
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight">
              Engineering <span className="text-orange-500">Intelligence</span> for the Future
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed">
              AIxpets Labs is a premier innovation hub specializing in enterprise AI strategy, autonomous automation, and workforce transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-700 transition-all flex items-center gap-3">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Our Methodology
              </button>
            </div>

            <div className="mt-16 flex items-center gap-10 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-bold text-white">50K+</p>
                <p className="text-sm text-slate-400 uppercase">Students Trained</p>
              </div>

              <div className="w-px h-10 bg-white/10"></div>

              <div>
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-slate-400 uppercase">AI Projects</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5 animate-float">

              <img
                src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=3132"
                className="w-full h-auto"
              />

            </div>

          </motion.div>

        </div>
      </section>


      {/* ===== COMPANY SLIDER ===== */}

      <section className="bg-[#0a0f2c] py-10 overflow-hidden">

        <p className="text-center text-white text-lg mb-8">
          Our Students Work at <span className="text-purple-400">Top Companies</span>
        </p>

        <div className="overflow-hidden">

          <div className="flex gap-08 animate-scroll w-max">

            {doubledCompanies.map((company,i)=>(
              <div
                key={i}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-semibold whitespace-nowrap"
              >
                {company}
              </div>
            ))}

          </div>

        </div>

      </section>

    </>
  );
};

const CredibilityStrip = () => {
  return (
    <div className="bg-white border-b border-slate-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Strategic Partners & Collaborators</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-opacity duration-500">
          {['Microsoft', 'Google', 'NVIDIA', 'OpenAI', 'Meta', 'Amazon'].map((brand) => (
            <span key={brand} className="text-2xl font-black tracking-tighter text-slate-900">{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CapabilityStack = () => {
  const layers = [
    { title: 'Intelligence Layer', desc: 'Custom LLMs and proprietary neural architectures.', icon: <BrainCircuit className="w-5 h-5" /> },
    { title: 'Agentic Layer', desc: 'Autonomous task execution and self-healing workflows.', icon: <Workflow className="w-5 h-5" /> },
    { title: 'Interface Layer', desc: 'Voice-native and multimodal human-machine interaction.', icon: <Mic className="w-5 h-5" /> },
    { title: 'Infrastructure Layer', desc: 'Secure, scalable, and compliant AI compute stacks.', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">The AIxpets <br /><span className="text-orange-600">Capability Stack</span></h2>
          <p className="text-slate-500 text-lg leading-relaxed">Our vertical integration ensures that every layer of your AI transformation is optimized for performance and security.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((layer, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{layer.title}</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'Financial Services', desc: 'Risk modeling, fraud detection, and automated wealth management.', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Healthcare', desc: 'Diagnostic assistance and personalized patient care pathways.', icon: <Activity className="w-6 h-6" /> },
    { name: 'Manufacturing', desc: 'Predictive maintenance and autonomous supply chain optimization.', icon: <Layers className="w-6 h-6" /> },
    { name: 'Retail & E-commerce', desc: 'Hyper-personalized customer journeys and inventory intelligence.', icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <section className="py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">Industry <br />Verticals</h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12">We deploy specialized AI solutions across diverse sectors, solving unique challenges with precision engineering.</p>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-600 transition-all flex items-center gap-3">
              Industry Insights <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="text-orange-600 mb-6">{ind.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{ind.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Impact Stories</h2>
          <p className="text-slate-500 text-lg">Measurable results from our most ambitious enterprise collaborations.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {[
            { title: 'Global Bank Transformation', client: 'Fortune 500 Bank', impact: '40% Cost Reduction', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000' },
            { title: 'Autonomous Logistics Hub', client: 'LogiTech Corp', impact: '99.9% Accuracy', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000' },
          ].map((study, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[400px] rounded-[40px] overflow-hidden mb-8">
                <img src={study.img} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
                <div className="absolute bottom-10 left-10">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">{study.impact}</span>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{study.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationEcosystem = () => {
  return (
    <section className="py-32 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Knowledge Hub</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">The Education <br /><span className="text-orange-600 italic">Ecosystem</span></h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12">Empowering the next generation of AI leaders through institutional-grade training and university partnerships.</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">50K+</p>
                <p className="text-sm text-slate-400 uppercase tracking-widest">Students Trained</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-2">120+</p>
                <p className="text-sm text-slate-400 uppercase tracking-widest">Partner Institutions</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-[48px] border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Curriculum Tracks</h3>
            <div className="space-y-4">
              {['AI Strategy for Executives', 'Deep Learning Engineering', 'AI Ethics & Governance', 'Autonomous Agent Design'].map((track, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-100 hover:border-orange-500 transition-all group cursor-pointer shadow-sm">
                  <span className="font-bold text-slate-900">{track}</span>
                  <ChevronRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ThoughtLeadership = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Thought Leadership</h2>
          <button className="text-orange-600 font-bold flex items-center gap-2 group">
            All Insights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'The Future of Autonomous Agents', date: 'Mar 10, 2026', category: 'Research' },
            { title: 'Scaling AI in Regulated Industries', date: 'Mar 05, 2026', category: 'Strategy' },
            { title: 'Ethics in the Era of AGI', date: 'Feb 28, 2026', category: 'Ethics' },
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-64 bg-slate-100 rounded-3xl mb-8 overflow-hidden">
                <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4 block">{post.category}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{post.title}</h3>
              <p className="text-slate-400 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: 'Enterprise AI Strategy',
      desc: 'High-level strategic roadmaps for AI adoption, focusing on ROI, risk mitigation, and long-term scalability.',
      icon: <Globe className="w-6 h-6" />,
      tag: 'Strategic'
    },
    {
      title: 'Autonomous Workflows',
      desc: 'Designing and deploying self-optimizing agents that handle complex operational tasks with zero friction.',
      icon: <Workflow className="w-6 h-6" />,
      tag: 'Automation'
    },
    {
      title: 'Institutional Training',
      desc: 'Customized education programs for universities and corporate leadership to master the AI landscape.',
      icon: <BrainCircuit className="w-6 h-6" />,
      tag: 'Education'
    },
    {
      title: 'Custom LLM Solutions',
      desc: 'Development of proprietary language models tailored to your specific industry data and security needs.',
      icon: <Cpu className="w-6 h-6" />,
      tag: 'Product'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              Architecting the <br />
              <span className="text-slate-400">Next Era of Intelligence</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We provide the technical foundation and strategic vision required for organizations to thrive in an AI-first world.
            </p>
            <button className="text-slate-900 font-bold flex items-center gap-2 group hover:text-orange-600 transition-colors uppercase tracking-widest text-sm">
              View Capabilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-12 rounded-[32px] bg-slate-50 border border-slate-200 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {s.icon}
              </div>
              <div className="flex items-center justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border border-slate-200 px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">{s.desc}</p>
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Detailed Analysis <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HelloGini = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-full opacity-50" />
              <div className="relative rounded-[48px] overflow-hidden border border-slate-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop" 
                  alt="HelloGini Interface" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
                
                {/* Voice Visualizer Mock */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-6">
                    <div className="flex gap-1 items-center h-8">
                      {[0.4, 0.8, 0.5, 0.9, 0.6, 0.3, 0.7].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [h*100 + '%', (1-h)*100 + '%', h*100 + '%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-orange-500 rounded-full"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Voice Processing</p>
                      <p className="text-lg font-bold text-slate-900 tracking-tight">"Analyzing intent..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold uppercase tracking-widest mb-8">
              Flagship Innovation
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              HelloGini: <br />
              <span className="text-orange-600 italic">Voice-Native AI</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Developed by AIxpets Labs, HelloGini is a revolutionary voice-first interface designed for universal accessibility. It transforms human-machine interaction into a natural, emotive dialogue.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { label: 'Universal Accessibility', desc: 'Bridging the digital divide through voice.' },
                { label: 'Emotive Intelligence', desc: 'Understanding tone, context, and sentiment.' },
                { label: 'Privacy-First Architecture', desc: 'On-device processing for ultimate security.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-1">{item.label}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-slate-200">
              Explore the Interface <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-12 shadow-2xl shadow-orange-200 rotate-12">
          <Zap className="w-10 h-10" />
        </div>
        <h2 className="text-6xl md:text-8xl font-bold text-slate-900 mb-10 tracking-tighter leading-none">
          Ready to <span className="text-orange-600">Evolve?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed">
          Join the elite organizations transforming their future with AIxpets Labs. The next era of intelligence starts now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-orange-600 hover:scale-105 transition-all shadow-2xl shadow-slate-200">
            Start Transformation
          </button>
          <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-50 transition-all">
            Contact Strategy Team
          </button>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">AIxpets Labs</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-10">
              The global standard for AI innovation, education, and enterprise transformation.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-orange-50 hover:text-orange-600 transition-all cursor-pointer" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4">
              {['Enterprise Consulting', 'AI Automation', 'Workforce Training', 'Custom LLMs', 'AI Strategy'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Innovation Lab', 'Case Studies', 'Careers', 'Contact'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-orange-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Intelligence Feed</h4>
            <p className="text-slate-500 mb-8 text-sm">Get the latest AI breakthroughs delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-orange-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-slate-800 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-sm">© 2026 AIxpets Labs Private Limited. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="text-slate-400 hover:text-orange-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-orange-600 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <Solutions />
        <CapabilityStack />
        <Industries />
        <CaseStudies />
        <EducationEcosystem />
        <HelloGini />
        <ThoughtLeadership />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
