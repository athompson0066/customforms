import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";
import { 
  DraftingCompass, 
  Filter, 
  CreditCard, 
  BadgeCheck, 
  ArrowRight, 
  CheckCircle2, 
  Handshake,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Database,
  Zap,
  Layout,
  Check,
  Settings2,
  Rocket,
  Palette,
  Brain,
  Route,
  ShieldCheck,
  MessageCircle,
  Send,
  Bot,
  Minus
} from "lucide-react";

const Header = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <DraftingCompass size={24} />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-white uppercase">
            Aiolos <span className="text-accent-gold">Media</span>
          </h2>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#demo">Live Demo</a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenEstimator}
            className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(3,0,184,0.4)] cursor-pointer"
          >
            Secure Your Onboarding
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="flex md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-slate-950 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              <a 
                className="text-lg font-medium text-slate-400 hover:text-white transition-colors" 
                href="#features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                className="text-lg font-medium text-slate-400 hover:text-white transition-colors" 
                href="#demo"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Demo
              </a>
              <a 
                className="text-lg font-medium text-slate-400 hover:text-white transition-colors" 
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <button 
                onClick={() => {
                  onOpenEstimator();
                  setIsMenuOpen(false);
                }}
                className="mt-4 flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:bg-primary/90"
              >
                Secure Your Onboarding
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => (
  <section className="relative overflow-hidden px-6 py-12 lg:px-12 lg:py-32">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-gold">
          Premium Lead Automation
        </div>
        <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
          Stop playing <span className="gold-gradient-text">phone tag</span> with leads.
        </h1>
        <p className="max-w-lg text-base text-slate-400 sm:text-lg leading-relaxed">
          High-converting estimator widgets for luxury home renovation firms. Automate your lead qualification with boutique digital solutions tailored for high-end contractors.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenEstimator}
              className="flex h-14 w-full sm:w-auto min-w-[240px] items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            >
              Get Your Custom Widget Quote
            </button>
            <button className="flex h-14 w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:bg-white/10 cursor-pointer">
              View Case Studies
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span>Designed for:</span>
            <div className="flex gap-4 items-center">
              <span className="text-slate-300">Jobber</span>
              <span className="text-slate-300">HubSpot</span>
              <span className="text-slate-300">Buildertrend</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl"></div>
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIkPk7gQc25j61k8D0MdCwv4DuchkqTJtaHrTWaYPlb3jsHrfcQDQEOdRqty_5NBC3D2qEtBrzJIjaKnLFdY9JXhvS4osgMtIs6SACBXNSvHCAhQGydI102GnDqdmPwKoUXfq_WYDCONdefsigYdV2m2tyQrvze-MokHOLGBpicoh-5ADuDlKE8bmmJwa_SdJMnQF2VMyrVuEQ1pOh90uLai8Baxc6VKlzBpySPlxNk_qrlmw1Y3pgPGsTpQ1WI8yFtOJTpn0h8E"
            alt="Luxury modern architectural kitchen renovation interior"
            className="h-full w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const LogicAdvantage = () => (
  <section className="px-6 py-24 lg:px-12 bg-slate-950">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            The Logic Advantage
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Built on Real-World Renovation Data</h2>
          <p className="text-lg text-slate-400">
            We aren't just designers; we are industry consultants. Our estimators are built using real-world renovation data, not just random number generators. This ensures your quotes are accurate and your leads are qualified.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Database size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white">Data-Driven</h4>
                <p className="text-sm text-slate-500">Based on actual labor and material costs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white">Dynamic Logic</h4>
                <p className="text-sm text-slate-500">Adjusts based on project scope and quality.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/5 bg-slate-900 p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-sm font-bold text-slate-400">Project: Premium Kitchen</span>
              <span className="text-xs font-bold uppercase text-accent-gold">Calibrating...</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Material Logic</span>
                <span>85% Accurate</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-accent-gold"
                />
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Labor Calibration</span>
                <span>92% Accurate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-slate-900/50 px-6 py-24 lg:px-12" id="features">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Premium Solutions for Modern Contractors</h2>
        <p className="max-w-2xl text-slate-400">We build the bridge between curious browsers and committed clients, ensuring your time is spent on projects that matter.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Lead Qualification",
            desc: "Filter out tire-kickers automatically with intelligent project scoping that identifies high-intent luxury clients.",
            icon: <Filter size={24} />
          },
          {
            title: "Automated Pricing",
            desc: "Provide instant, accurate estimates based on your specific labor and material costs, updated in real-time.",
            icon: <CreditCard size={24} />
          },
          {
            title: "Boutique Branding",
            desc: "Custom-designed widgets that mirror your high-end brand aesthetic perfectly, maintaining elite professionalism.",
            icon: <BadgeCheck size={24} />
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col gap-6 rounded-2xl border border-white/5 bg-slate-950 p-8 transition-all hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Demo = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => (
  <section className="px-6 py-24 lg:px-12" id="demo">
    <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/5 bg-slate-900 p-6 sm:p-8 lg:p-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-white">The Aiolos Estimator in Action</h2>
          <p className="text-lg text-slate-400">Experience the seamless flow your clients will love. Our estimator captures every detail from square footage to finish quality.</p>
          <div className="flex flex-col gap-4 border-l-2 border-accent-gold/40 pl-6">
            <p className="text-sm italic text-slate-300">"Use our live estimator to see exactly how your future widget will perform for your business."</p>
          </div>
          <button 
            onClick={onOpenEstimator}
            className="flex w-full sm:w-fit items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all hover:gap-4 cursor-pointer"
          >
            Try Interactive Demo <ArrowRight size={20} />
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-inner shadow-white/5"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-slate-900/50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            <div className="ml-4 h-5 w-full max-w-[200px] rounded bg-white/5"></div>
          </div>
          <div className="relative aspect-video w-full bg-slate-950 p-6 flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUwGerJsWKqUBxXyn1rpQsnPLUxY8pkxEg7cu40FNf9l6ySXBu2O93Etg8bopg_vsitDc-jX2PlVIOsXxRsdr5FyHlaVU9rEQQBxCVXBZ3GkpiiU-ta1ICBMK-6CXoCchgudEycCEOD0Ifin6WZ-B_csWCKB3lPqL0KLp8YCEnwnzj6lyemAyxIJ7KeB0vQ1llC0uOcmLyUGPY1tHYnq54rjvIJG7ZCy8XKwm2Cns7rlJl6942tshGwYo4Y6nOoWkrzOrG_QMrI9w"
              alt="Digital mockup of a sleek renovation estimator widget interface"
              className="absolute inset-0 h-full w-full object-cover opacity-10"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="relative w-full max-w-md space-y-4 z-10">
              <div className="h-8 w-2/3 rounded bg-white/10"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 rounded bg-primary/20 border border-primary/30"></div>
                <div className="h-12 rounded bg-white/5 border border-white/10"></div>
              </div>
              <div className="h-24 w-full rounded bg-white/5"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section className="px-6 py-24 lg:px-12 bg-slate-950">
    <div className="mx-auto max-w-4xl">
      <div className="mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white">Your Journey to Launch</h2>
        <p className="mt-4 text-slate-400">A clear, 3-step process to automate your lead qualification.</p>
      </div>
      <div className="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-white/5 sm:before:left-1/2 sm:before:-ml-px">
        {[
          {
            title: "Submit Deposit",
            desc: "Confirm your spot by paying the setup deposit. This secures your build slot in our boutique agency.",
            icon: <CreditCard size={20} />
          },
          {
            title: "Project Calibration",
            desc: "Fill out our 'Project Intake' form (takes 5 mins) so we can calibrate your pricing logic to your specific market.",
            icon: <Layout size={20} />
          },
          {
            title: "Live Deployment",
            desc: "We install your widget, test the routing, and provide your first 'Lead Audit' report within 3-5 business days.",
            icon: <Zap size={20} />
          }
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-start gap-8 sm:gap-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:absolute sm:left-1/2 sm:-ml-5 z-10">
              {step.icon}
            </div>
            <div className={`flex flex-col sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:ml-auto'}`}>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will this work on my website?",
      a: "Yes, it’s compatible with any platform that allows a script tag (WordPress, Squarespace, Wix, Webflow, etc.). Installation is a simple copy-paste process."
    },
    {
      q: "What if I change my pricing later?",
      a: "No problem—our monthly maintenance plan covers price adjustments whenever your labor or material costs shift. Just send us the update and we'll handle the rest."
    },
    {
      q: "Who owns the leads?",
      a: "You do. Every lead is routed directly to your email or CRM (Jobber, HubSpot, Buildertrend, etc.). We never store or sell your client data."
    },
    {
      q: "How long does setup take?",
      a: "Once we receive your intake info, your widget will be live within 3–5 business days. We handle all the technical heavy lifting."
    }
  ];

  return (
    <section className="px-6 py-24 lg:px-12 bg-slate-900/30">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Tech Anxiety? We've Got You.</h2>
          <p className="mt-4 text-slate-400">Common questions from contractors moving to automation.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-slate-950 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <span className="font-bold text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-slate-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerResults = () => (
  <section className="px-6 py-24 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white">Partner Results</h2>
        <p className="mt-4 text-slate-400">Real impact for high-end renovation firms.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Elite Kitchens & Baths",
            result: "40% reduction in unqualified site visits within 30 days.",
            quote: "The estimator filters out the 'just looking' crowd before they ever hit my inbox."
          },
          {
            name: "Modern Deck Builders",
            result: "Average lead value increased by 25% through better scoping.",
            quote: "We're finally spending our time on projects that actually fit our premium model."
          },
          {
            name: "Heritage Home Renovation",
            result: "3-5 hours saved weekly on manual quoting and follow-ups.",
            quote: "It's like having a full-time sales assistant that never sleeps."
          }
        ].map((result, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-slate-900 p-8"
          >
            <h4 className="text-lg font-bold text-white mb-2">{result.name}</h4>
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {result.result}
            </div>
            <p className="text-sm italic text-slate-400 leading-relaxed">"{result.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => (
  <section className="px-6 py-24 lg:px-12" id="pricing">
    <div className="mx-auto max-w-5xl">
      <div className="mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white">Investment Levels</h2>
        <p className="mt-4 text-slate-400">Transparent pricing for premium digital assets.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Plan 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col rounded-3xl border border-white/5 bg-slate-900 p-8 sm:p-10 transition-all hover:scale-[1.02]"
        >
          <h3 className="text-xl font-bold text-white">Custom Setup</h3>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-black text-white">$249</span>
            <span className="text-sm font-medium text-slate-500 uppercase">/ per service</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">One-time setup fee to launch a custom, high-converting estimator for your specific service category.</p>
          <ul className="mt-8 flex flex-col gap-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-accent-gold" />
              Custom UI/UX Design
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-accent-gold" />
              Cost Logic Integration
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-accent-gold" />
              CRM Webhook Setup
            </li>
          </ul>
          <button 
            onClick={onOpenEstimator}
            className="mt-10 rounded-xl border border-white/10 bg-white/5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10 cursor-pointer"
          >
            Calculate Your Setup
          </button>
        </motion.div>
        {/* Plan 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex flex-col rounded-3xl border border-primary/50 bg-slate-900 p-8 sm:p-10 shadow-[0_0_50px_rgba(3,0,184,0.15)] transition-all hover:scale-[1.02]"
        >
          <div className="absolute -top-4 right-8 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Highly Recommended</div>
          <h3 className="text-xl font-bold text-white">Hosting & Maintenance</h3>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-black text-white">$149</span>
            <span className="text-sm font-medium text-slate-500 uppercase">/month</span>
          </div>
          <p className="mt-4 text-sm text-slate-400">Ongoing hosting, security updates, material cost adjustments, and lead performance reporting.</p>
          <ul className="mt-8 flex flex-col gap-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-primary" />
              Cloud Hosting & Security
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-primary" />
              Material Price Updates
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-primary" />
              Priority Support
            </li>
          </ul>
          <button 
            onClick={onOpenEstimator}
            className="mt-10 rounded-xl bg-primary py-4 text-sm font-bold text-white transition-shadow hover:shadow-lg cursor-pointer"
          >
            Start Monthly Plan
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Onboarding = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => (
  <section className="px-6 py-24 lg:px-12">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-8 sm:p-12 lg:p-20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 rounded-full bg-white/5 p-4">
          <Handshake size={48} className="text-accent-gold" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Start Your Onboarding</h2>
        <p className="max-w-xl text-base sm:text-lg text-slate-400 mb-10">
          Secure your build slot today. We require a 50% deposit via PayPal to begin the custom architectural scoping of your widget.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button 
            onClick={onOpenEstimator}
            className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-white px-8 text-lg font-bold text-slate-950 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <CreditCard size={24} />
            Pay 50% Deposit via PayPal
          </button>
          <p className="text-xs text-slate-500">Secure transaction. Full project documentation provided after payment.</p>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950 px-6 py-12 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <DraftingCompass size={16} />
            </div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">Aiolos <span className="text-accent-gold">Media</span></h2>
          </div>
          <p className="max-w-xs text-sm text-slate-500">Digital boutique specialized in high-conversion tools for the home renovation industry.</p>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Services</span>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Estimators</a>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Web Design</a>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Lead Gen</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Agency</span>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Our Work</a>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Privacy</a>
            <a className="text-sm text-slate-500 hover:text-white" href="#">Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Connect</span>
            <a className="text-sm text-slate-500 hover:text-white flex items-center gap-2" href="#"><Linkedin size={14} /> LinkedIn</a>
            <a className="text-sm text-slate-500 hover:text-white flex items-center gap-2" href="#"><Instagram size={14} /> Instagram</a>
            <a className="text-sm text-slate-500 hover:text-white flex items-center gap-2" href="#"><Mail size={14} /> Contact</a>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
        <p className="text-xs text-slate-600">© 2024 Aiolos Media. All rights reserved.</p>
        <div className="flex gap-6">
          <div className="h-6 w-10 bg-white/5 rounded"></div>
          <div className="h-6 w-10 bg-white/5 rounded"></div>
        </div>
      </div>
    </div>
  </footer>
);

const CostEstimator = ({ isOpen, onClose, onFinish }: { isOpen: boolean; onClose: () => void; onFinish: () => void }) => {
  const [step, setStep] = useState(1);
  const [servicePage, setServicePage] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const services = [
    { id: "custom-homes", title: "Custom Homes", desc: "Unique architectural vision", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmHoiKponNsqwM-2px5Ulod19qmVdlty5X2kEo1K6YQlrFLYFmWuw_hL089QZ2nWpGTXC8V9WXN1F1bHIRAVawqq6vGICj5Shvznj8xMc9IhqhG0HZruUUcTuHy8EeONb59CW0kDMpQL70O3LTKRtiFt9xcoDS7pgeT54C9pPnH1hYiOQuSi7GoTOV0vs80KvHplZKP5azXfUXXFMneCMNggXXZJvmXwLjwOoHf6TTqk6DYpr-NEoeWgNm-exekNffWTTg24X2zXA" },
    { id: "full-reno", title: "Full Home Renovations", desc: "Complete transformation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnKtDLRjyQcPTwNBpzOqLqZK6Saf8Xo9QGEh-wjrJTdue1OjFlDYYtzIHPuKpfvunx6c9FARMPDS-BPF9LLv9TbvVC0OEZuxZ0c96S3Knt8y0XgA48GwycMI7dwrTJMGwdQZxcw3J6GeemjWNJu0itDEtxwFuug77JkCyaVfJ9eUWJVYCtLB3H05yU06laIBRKQhd6M1acT4z6Bf9ISjiwo5L6cJUroseNQVu-7jN3wzRwRstqOC4aUs499Uouah3zNYWVB32fMI" },
    { id: "kitchen", title: "Kitchen", desc: "Gourmet design", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYEhLm7zuDKnbLdu8iSRDPeP3VoEDnWsMF6xAeCilmCQE_mWv0EXv0KDnTAuy0e8eMXJcQxYvzkV3P9JZYU7W6oc1iPObSsCQgIj1bAxEO7Vx4xIZ07tEuxHOGkibr3BS1melgv0qwyRNgK1me0k2mhi1W9a5zxLmov7u240Ir1wAoazvPEXnc6ajOnyDCZNqmOi9yGiTFpLnjFr5oRMaM5_wEqgVCZaqvSkz_nzOS1npHSRLzK2w5gKEjTXsPniG2Cn--yk_xHZw" },
    { id: "bathroom", title: "Bathroom", desc: "Spa-like retreat", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIZpJCaWcV21goQBD2Q7nE5whYAOmo6_rinvEzf1nZJ0sZHykwyzUWnjnSlwLXbwAZIoxjwYvj89PjFPjdl0qbhPXEjY41pKo5g0iUXrMySqW_et4tH5gzWiXxVy2_kE42JYBQIKwsK1TMq1CJfyffk9r0xC-QoZU3qOpTT3hK89Fws-gACu_ulXTJf1JaTVmkrzDhCvyJxhmcogbG7MuazrE754NXlJ6YJzDSoOY7T7C_WlvUfEtFnYAWE1zMgN83X1cXIcqOVuo" },
    { id: "basement", title: "Basement", desc: "Entertainment hub", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxsfQCzIWBtvruYOrbeuFZ_867cNqm-f-DtC55BqLN6b6UsorPeeIx5kFHDDoXT20xbdiwrbsJfQ18sFM5VbA3kDNC7awWtlyWRPHoJ5Z32jGm62gQjV6QJOZ4nm5ovLpFzwp2AETFBX_yZ7AAuOevuDossKGZSCHVlK5E7sj6AMMjqQioA0HjbZSNaQn_UrEK43U9eNDv051vLuMi01Ad9_rhOV8qxXktCbZCkNdsl56DeAMHtFNtG0aTpouObuUX1y_sSMlZk74" },
    { id: "additions", title: "Home Additions", desc: "Expanding your space", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGIkPk7gQc25j61k8D0MdCwv4DuchkqTJtaHrTWaYPlb3jsHrfcQDQEOdRqty_5NBC3D2qEtBrzJIjaKnLFdY9JXhvS4osgMtIs6SACBXNSvHCAhQGydI102GnDqdmPwKoUXfq_WYDCONdefsigYdV2m2tyQrvze-MokHOLGBpicoh-5ADuDlKE8bmmJwa_SdJMnQF2VMyrVuEQ1pOh90uLai8Baxc6VKlzBpySPlxNk_qrlmw1Y3pgPGsTpQ1WI8yFtOJTpn0h8E" },
    { id: "condo", title: "Condo Renovations", desc: "Urban luxury redefined", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LArLvuaO4zIPef797tiVXSuk6gEOBVvdZBUPqEY8ADvVcRqF_dmx7DKIfDM_BRUWmdvwhXek1WrM1GlEUh8yFbOvNLOIYNIaM94-_SyvOnborv2tDbdS6DgxjViJ9QpD4N5B2hkvvej02mBqCygaFa77dtoWTbos4_66GwpafFtMpXEuUFCkOfechzViCh4pqvsw7yH6hy5fbPa1ruxxRHXzh2DMf3usdY8lIwTD-qaEHBSroxWon7gLkJkcZoqbYxOlewVnFgE" },
  ];

  const SERVICES_PER_PAGE = 4;
  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE);
  const currentServices = services.slice(servicePage * SERVICES_PER_PAGE, (servicePage + 1) * SERVICES_PER_PAGE);

  const totalSetupFee = selectedServices.length * 249;
  const totalMonthlyFee = selectedServices.length > 0 ? 149 : 0;
  const depositAmount = totalSetupFee / 2;

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl flex flex-col lg:flex-row"
      >
        {/* Main Wizard Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Modal Header */}
          <div className="px-6 pt-6 sm:px-10 sm:pt-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                  <DraftingCompass size={16} />
                </div>
                <h2 className="text-lg font-black tracking-tight text-white uppercase">Widget Configurator</h2>
              </div>
              <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-primary font-bold text-xs tracking-widest uppercase">Step 0{step} of 04</span>
                <span className="text-slate-400 text-xs font-medium">{Math.round((step / 4) * 100)}% Completed</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 sm:px-10 custom-scrollbar">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Select Your Estimators</h3>
                    <p className="text-slate-400">Choose which service categories you want to add to your custom estimation form</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentServices.map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`group relative cursor-pointer rounded-2xl p-3 transition-all border-2 ${
                          selectedServices.includes(service.id) 
                            ? "border-primary bg-primary/5" 
                            : "border-transparent bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <div className="aspect-video rounded-xl mb-3 overflow-hidden relative">
                          <img 
                            src={service.img} 
                            alt={service.title} 
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          {selectedServices.includes(service.id) && (
                            <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                              <CheckCircle2 size={14} />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-white text-sm">{service.title}</h4>
                        <p className="text-[10px] text-slate-500">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Service Pagination Controls */}
                  <div className="flex items-center justify-center gap-4 pt-2 pb-4">
                    <button 
                      onClick={() => setServicePage(prev => Math.max(0, prev - 1))}
                      disabled={servicePage === 0}
                      className={`p-2 rounded-lg border border-white/10 transition-colors ${servicePage === 0 ? "text-slate-700 cursor-not-allowed" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                    >
                      <ArrowRight size={16} className="rotate-180" />
                    </button>
                    <div className="flex gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1.5 w-1.5 rounded-full transition-all ${servicePage === i ? "bg-primary w-4" : "bg-white/10"}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={() => setServicePage(prev => Math.min(totalPages - 1, prev + 1))}
                      disabled={servicePage === totalPages - 1}
                      className={`p-2 rounded-lg border border-white/10 transition-colors ${servicePage === totalPages - 1 ? "text-slate-700 cursor-not-allowed" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Agency Intake Details</h3>
                    <p className="text-slate-400">Provide your business information to begin the custom widget build process.</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Business Name</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all" placeholder="Elite Renovations Inc." />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Name</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all" placeholder="Johnathan Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Work Email</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary outline-none transition-all" placeholder="john@eliterenos.com" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Logic Calibration</h3>
                    <p className="text-slate-400">Define the pricing logic for your selected estimators.</p>
                  </div>
                  <div className="space-y-8">
                    {selectedServices.map(id => {
                      const s = services.find(srv => srv.id === id);
                      return (
                        <div key={id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                              <Brain size={16} />
                            </div>
                            <h4 className="font-bold text-white">{s?.title} Logic</h4>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Starting Price ($)</label>
                              <input className="w-full bg-background-dark border-border-dark rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="e.g. 5000" type="number" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Primary Variable</label>
                              <select className="w-full bg-background-dark border-border-dark rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm">
                                <option>Square Footage</option>
                                <option>Linear Footage</option>
                                <option>Number of Units</option>
                                <option>Material Grade</option>
                                <option>Complexity Tier</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pricing Notes / Logic Details</label>
                            <textarea className="w-full bg-background-dark border-border-dark rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3 text-sm" placeholder="Explain how you calculate costs for this service..." rows={2}></textarea>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-black tracking-[0.3em] uppercase border border-accent-gold/20">
                      One-Time Setup Investment
                    </div>
                    <h3 className="text-4xl font-black text-white">${totalSetupFee.toLocaleString()}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      This covers the custom logic, architectural branding, and integration for {selectedServices.length} service widgets.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
                    <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                      <Zap size={16} className="text-accent-gold" />
                      Secure Your Setup
                    </h4>
                    <p className="text-xs text-slate-400 mb-6">Lock in your build slot with a 50% deposit. Remaining balance due upon launch.</p>
                    <button 
                      onClick={onFinish}
                      className="w-full bg-accent-gold hover:bg-yellow-600 text-slate-950 font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-accent-gold/20"
                    >
                      Pay 50% Deposit (${depositAmount.toLocaleString()})
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Modal Footer (Navigation) */}
          <div className="px-6 py-6 sm:px-10 border-t border-white/5 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => step > 1 && setStep(step - 1)}
                className={`flex items-center gap-2 font-bold text-sm transition-colors ${step > 1 ? "text-slate-400 hover:text-white" : "text-slate-700 cursor-not-allowed"}`}
              >
                <ArrowRight size={18} className="rotate-180" /> Back
              </button>
              {step < 4 ? (
                <button 
                  onClick={() => setStep(step + 1)}
                  disabled={selectedServices.length === 0}
                  className={`flex items-center gap-2 rounded-xl px-8 py-3 font-bold text-white transition-all ${selectedServices.length === 0 ? "bg-slate-800 cursor-not-allowed opacity-50" : "bg-primary hover:shadow-lg hover:shadow-primary/20"}`}
                >
                  Next Step <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3 font-bold text-white transition-all hover:bg-white/10"
                >
                  Close Configurator
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside className="hidden lg:flex w-80 bg-slate-950/50 p-10 border-l border-white/5 flex-col">
          <div className="flex items-center gap-3 mb-8">
            <Database size={20} className="text-primary" />
            <h3 className="font-bold text-white">Config Summary</h3>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
            {selectedServices.length > 0 ? (
              selectedServices.map(id => {
                const s = services.find(srv => srv.id === id);
                return (
                  <div key={id} className="flex flex-col gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">{s?.title}</p>
                      <span className="text-xs font-bold text-accent-gold">$249</span>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[9px] text-slate-400 flex items-center gap-2">
                        <Check size={10} className="text-primary" />
                        Custom Branded Interface
                      </p>
                      <p className="text-[9px] text-slate-400 flex items-center gap-2">
                        <Check size={10} className="text-primary" />
                        Conditional Pricing Logic
                      </p>
                      <p className="text-[9px] text-slate-400 flex items-center gap-2">
                        <Check size={10} className="text-primary" />
                        Lead Qualification Engine
                      </p>
                      <p className="text-[9px] text-slate-400 flex items-center gap-2">
                        <Check size={10} className="text-primary" />
                        Automated Scoping Questions
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-6 rounded-xl border border-dashed border-white/10 text-center">
                <p className="text-xs text-slate-500 italic">No widgets selected</p>
              </div>
            )}
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Total Setup Fee</p>
              <div className="text-2xl font-black text-white">
                ${totalSetupFee.toLocaleString()}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Monthly Hosting</p>
              <div className="text-xl font-black text-accent-gold">
                ${totalMonthlyFee.toLocaleString()}/mo
              </div>
            </div>
          </div>
        </aside>
      </motion.div>
    </div>
  );
};

const CalibrationDashboard = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="text-primary flex items-center justify-center">
            <Settings2 size={32} />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight uppercase">Aiolos <span className="text-accent-gold">Media</span></h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Widget Calibration Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onBack} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Exit Dashboard</button>
            <a className="text-sm font-bold text-slate-400 hover:text-white transition-colors" href="#">Analytics</a>
            <a className="text-sm font-bold text-slate-400 hover:text-white transition-colors" href="#">Documentation</a>
          </nav>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-[10px] font-bold flex items-center gap-2 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold"></span>
              </span>
              Logic Engine: Calibrating
            </div>
            <button className="bg-accent-gold hover:bg-yellow-600 text-slate-950 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-accent-gold/10 flex items-center gap-2">
              <Rocket size={16} />
              Save & Deploy
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-8 p-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex flex-col gap-2 shrink-0">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold group" href="#brand">
            <Palette size={18} />
            Brand Identity
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-100 transition-all font-bold" href="#logic">
            <Brain size={18} />
            Pricing & Logic
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-100 transition-all font-bold" href="#routing">
            <Route size={18} />
            Lead Routing
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-100 transition-all font-bold" href="#trust">
            <ShieldCheck size={18} />
            Trust & Credibility
          </a>
          
          <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-white/5">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Widget Preview</p>
            <div className="aspect-video rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center group cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-gold/5"></div>
              <Layout size={32} className="text-slate-700 group-hover:text-primary transition-colors" />
              <p className="absolute bottom-2 text-[10px] text-slate-600 font-bold">Click for Live Preview</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-12 max-w-4xl">
          <section>
            <h1 className="text-4xl font-black tracking-tight mb-2 text-white">Widget Calibration Dashboard</h1>
            <p className="text-slate-400 text-lg">Configure your luxury estimator logic, brand aesthetics, and automation workflows.</p>
          </section>

          {/* 1. Brand Identity */}
          <section className="scroll-mt-24" id="brand">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-lg bg-primary text-white font-black">1</span>
              <h2 className="text-2xl font-bold text-white">Brand Identity</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-slate-900 border border-white/5 shadow-xl">
              <div className="space-y-6">
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Primary Brand Hex</span>
                  <div className="flex gap-2">
                    <div className="size-11 rounded-lg border border-white/10 bg-primary shrink-0 shadow-inner"></div>
                    <input className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3 font-mono" type="text" defaultValue="#0300b8"/>
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Gold Highlight Hex</span>
                  <div className="flex gap-2">
                    <div className="size-11 rounded-lg border border-white/10 bg-accent-gold shrink-0 shadow-inner"></div>
                    <input className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3 font-mono" type="text" defaultValue="#d4af37"/>
                  </div>
                </label>
              </div>
              <div className="space-y-6">
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Widget Font Family</span>
                  <select className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3">
                    <option>Manrope (Default Luxury)</option>
                    <option>Inter</option>
                    <option>Montserrat</option>
                    <option>Playfair Display</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Company Logo Assets</span>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors bg-slate-950/50">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Drop PNG or SVG here</p>
                    <p className="text-[10px] text-slate-600 mt-1">Max file size: 2MB</p>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* 2. Pricing & Logic */}
          <section className="scroll-mt-24" id="logic">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-lg bg-primary text-white font-black">2</span>
              <h2 className="text-2xl font-bold text-white">Pricing & Logic (The Brain)</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/5 shadow-xl bg-slate-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    <th className="px-6 py-4">Service Category</th>
                    <th className="px-6 py-4">Tier 1 (Refresh)</th>
                    <th className="px-6 py-4">Tier 2 (Standard)</th>
                    <th className="px-6 py-4">Tier 3 (Full Build)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: "Hardscaping", t1: "$5,000+", t2: "$12,000+", t3: "$25,000+" },
                    { name: "Lighting Systems", t1: "$2,500+", t2: "$6,000+", t3: "$15,000+" },
                    { name: "Outdoor Kitchens", t1: "$8,000+", t2: "$18,000+", t3: "$40,000+" },
                    { name: "Aquascaping", t1: "$4,500+", t2: "$10,000+", t3: "$30,000+" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm text-white">{row.name}</td>
                      <td className="px-6 py-4"><input className="w-full bg-slate-950/50 border-none rounded text-sm py-2 px-3 text-slate-300" type="text" defaultValue={row.t1}/></td>
                      <td className="px-6 py-4"><input className="w-full bg-slate-950/50 border-none rounded text-sm py-2 px-3 text-slate-300" type="text" defaultValue={row.t2}/></td>
                      <td className="px-6 py-4"><input className="w-full bg-slate-950/50 border-none rounded text-sm py-2 px-3 text-slate-300" type="text" defaultValue={row.t3}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-slate-950/30 flex justify-center border-t border-white/5">
                <button className="text-xs font-bold text-primary flex items-center gap-2 hover:underline uppercase tracking-widest">
                  <CheckCircle2 size={14} /> Add 4 More Categories
                </button>
              </div>
            </div>
          </section>

          {/* 3. Lead Routing */}
          <section className="scroll-mt-24" id="routing">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-lg bg-primary text-white font-black">3</span>
              <h2 className="text-2xl font-bold text-white">Lead Routing & Integrations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-slate-900 border border-white/5 shadow-xl">
              <div className="space-y-6">
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Notification Emails</span>
                  <input className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3" placeholder="sales@agency.com, leads@agency.com" type="text"/>
                </label>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 block">CRM Integration</span>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-white/5 mb-3">
                    <div className="flex items-center gap-3">
                      <Database size={18} className="text-blue-400" />
                      <span className="text-sm font-bold">HubSpot</span>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                      <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Handshake size={18} className="text-green-400" />
                      <span className="text-sm font-bold">Jobber</span>
                    </div>
                    <div className="h-6 w-11 rounded-full bg-slate-800 relative cursor-pointer">
                      <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">PayPal Gateway URL</span>
                  <input className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-3" placeholder="https://www.paypal.com/ncp/payment/..." type="url"/>
                  <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase tracking-wider">Required for instant deposit feature</p>
                </label>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">System Note</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Leads are stored in the Aiolos database for 90 days as a backup, even if CRM sync is active.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Trust & Credibility */}
          <section className="scroll-mt-24 mb-20" id="trust">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-lg bg-primary text-white font-black">4</span>
              <h2 className="text-2xl font-bold text-white">Trust & Credibility</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 p-8 rounded-2xl bg-slate-900 border border-white/5 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Professional Associations</span>
                  <textarea className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-4 text-sm" placeholder="ASLA, ICPI Certified, HBA Member..." rows={3}></textarea>
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Service Area Regions</span>
                  <textarea className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-4 text-sm" placeholder="Greenwich, CT; Stamford, CT; Westchester County, NY..." rows={3}></textarea>
                </label>
              </div>
              <label className="block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Featured 'Win' Story (Testimonial)</span>
                  <span className="text-[10px] text-accent-gold font-black uppercase tracking-widest">High Conversion Item</span>
                </div>
                <textarea className="w-full bg-slate-950 border-white/10 rounded-lg text-slate-100 focus:ring-primary focus:border-primary p-4 text-sm" placeholder="Describe a project where you solved a major problem for a client..." rows={4}></textarea>
              </label>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const ChatBot = ({ onOpenEstimator }: { onOpenEstimator: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "Hi! I'm your Aiolos AI assistant. How can I help you transform your contractor business with custom estimation logic today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "How does it work?",
    "What is the pricing?",
    "Show me a demo",
    "Build my estimator"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input.trim();
    if (!textToSend || isLoading) return;

    if (textToSend.toLowerCase().includes("build my estimator") || textToSend.toLowerCase().includes("get started")) {
      onOpenEstimator();
      setMessages(prev => [...prev, { role: "user", text: textToSend }, { role: "model", text: "Opening the configurator for you now! Let's get your custom estimator built." }]);
      setInput("");
      return;
    }

    setInput("");
    setMessages(prev => [...prev, { role: "user", text: textToSend }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not defined in the environment.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Gemini history must alternate roles and typically start with 'user'.
      // We skip the initial hardcoded model greeting to ensure the history starts correctly.
      const history = messages
        .slice(1) // Skip the first message (the hardcoded model greeting)
        .map(m => ({ role: m.role, parts: [{ text: m.text }] }));

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the Aiolos AI Sales Assistant. Your goal is to help contractors understand the value of Aiolos Media's custom estimation widgets and guide them through our sales funnel.
          Key Information:
          - Services: We build custom estimation widgets for contractors (Custom Homes, Full Renovations, Kitchens, Bathrooms, Basements, Additions, Condos).
          - The Problem: Most contractors use generic calculators that give bad estimates, leading to lost leads or wasted time.
          - The Solution: Our 'Logic-First' approach. We build widgets based on YOUR actual pricing logic, material costs, and labor rates.
          - Pricing: $249 one-time setup per service category + $149/month for hosting, maintenance, and lead routing.
          - Features: Custom branding, CRM integration (HubSpot, Jobber), instant deposit collection, mobile-responsive.
          - Call to Action: Encourage users to click 'Build My Estimator' or 'Get Started' to use our configurator.
          - Tone: Professional, high-end, helpful, and persuasive. Keep responses concise and formatted with markdown for readability.`,
        },
        history: history
      });

      const response = await chat.sendMessage({ message: textToSend });
      setMessages(prev => [...prev, { role: "model", text: response.text || "I'm sorry, I couldn't process that. How else can I help?" }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "model", text: "I'm having a bit of trouble connecting right now. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-primary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Aiolos Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <Minus size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-950/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    m.role === "user" 
                      ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10" 
                      : "bg-white/5 text-slate-300 border border-white/5 rounded-tl-none"
                  }`}>
                    <div className="markdown-body">
                      <Markdown>{m.text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="size-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="size-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-slate-950/50 border-t border-white/5">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(action)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all uppercase tracking-wider"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/5 bg-slate-900">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about our estimators..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:border-primary outline-none transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3 text-center">
                Powered by Aiolos Intelligence • <button onClick={onOpenEstimator} className="text-primary hover:underline font-bold">Build Yours Now</button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 bg-primary text-white rounded-full shadow-xl shadow-primary/20 flex items-center justify-center hover:bg-blue-600 transition-all relative group"
      >
        <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with Sales
        </div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  if (view === 'dashboard') {
    return <CalibrationDashboard onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen">
      <Header onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <main className="pt-24">
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <LogicAdvantage />
        <Features />
        <Demo onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <PartnerResults />
        <Timeline />
        <Pricing onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <FAQ />
        <Onboarding onOpenEstimator={() => setIsEstimatorOpen(true)} />
      </main>
      <Footer />
      
      <ChatBot onOpenEstimator={() => setIsEstimatorOpen(true)} />

      <AnimatePresence>
        {isEstimatorOpen && (
          <CostEstimator 
            isOpen={isEstimatorOpen} 
            onClose={() => setIsEstimatorOpen(false)} 
            onFinish={() => {
              setIsEstimatorOpen(false);
              setView('dashboard');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
