"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedinIn, FaGithub, FaEnvelope, FaRobot, FaBriefcase, FaMobileAlt } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThreeDHeroCanvas from "./ThreeDHeroCanvas";

export default function Hero() {
  const router = useRouter();

  const handleStrategyCall = () => {
    router.push("/#contact");
  };

  const handleViewWork = () => {
    router.push("/#projects");
  };

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-spaceBg px-6 md:px-12">
      {/* Soft background visual gradients */}
      <div className="absolute top-[10%] left-[15%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Asymmetrical 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: confindent header & copy (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-widest bg-primary/10 text-primary uppercase">
                  ✦ Available for Projects
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-textHeading leading-[1.08] font-sans">
                Hey There,<br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">Jenil Saija</span>
              </h1>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-textHeading/80 leading-relaxed font-sans max-w-2xl">
              I build beautifully simple automated systems, self-optimizing AI agents, and custom workflows. And I love what I do.
            </h2>

            <p className="text-textMain text-sm md:text-base leading-relaxed max-w-xl">
              Founder of <b className="text-textHeading font-semibold">Sparktac</b>. Specialized in MERN Stack, n8n automation pipeline syncs, WhatsApp conversational business bots, and cost-reducing SaaS structures.
            </p>

            {/* Coral Rust Email link */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-textMuted block font-bold">Direct Line</span>
              <a
                href="mailto:jrsaija@gmail.com"
                className="text-lg md:text-xl font-black text-secondary hover:text-secondary-hover underline decoration-secondary/30 hover:decoration-secondary decoration-2 underline-offset-4 transition-all duration-300 inline-block mt-1 font-mono"
              >
                jrsaija@gmail.com
              </a>
            </div>

            {/* Actions & Experience Metric */}
            <div className="pt-6 border-t border-cardBorder flex flex-wrap gap-8 items-center justify-between">
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={handleStrategyCall}
                  className="bg-primary hover:bg-primary-hover text-white text-[10px] uppercase font-mono tracking-wider font-bold px-6 py-4 rounded-full shadow-lg shadow-primary/15 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-none"
                >
                  Book a Strategy Call <FaArrowRight size={10} />
                </button>
                <button
                  onClick={handleViewWork}
                  className="border border-cardBorder bg-cardBg hover:bg-primary/5 hover:border-primary/30 text-textHeading text-[10px] uppercase font-mono tracking-wider font-bold px-6 py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  ✦ View Works
                </button>
              </div>

              {/* Big Minimal Stats block */}
              <div className="flex items-center space-x-4">
                <span className="text-5xl md:text-6xl font-black text-textHeading font-space leading-none tracking-tighter">02</span>
                <div className="text-[9px] uppercase tracking-widest font-mono font-black text-textMuted leading-tight">
                  Years<br />Experience
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Presentation Frame (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center relative px-4"
          >
            {/* Abstract organic brush backdrop */}
            <svg viewBox="0 0 200 200" className="absolute w-[120%] h-[120%] text-primary/8 fill-current -z-10 scale-110 transform rotate-12 select-none pointer-events-none">
              <path d="M45,-77.2C58.3,-69.5,69.1,-57,76.5,-42.6C83.9,-28.2,87.9,-12,85.6,3.4C83.4,18.9,74.9,33.5,64.7,46C54.6,58.4,42.8,68.7,29.1,75.4C15.4,82.1,-0.2,85.1,-15.7,82.4C-31.2,79.7,-46.7,71.2,-58.5,59.3C-70.3,47.4,-78.6,32.1,-82.9,15.6C-87.1,-0.8,-87.3,-18.4,-80.7,-33C-74.1,-47.6,-60.7,-59.2,-46,-66.4C-31.3,-73.6,-15.7,-76.4,0.3,-76.9C16.3,-77.4,32.6,-75.6,45,-77.2Z" transform="translate(100 100)" />
            </svg>

            {/* Profile Frame with Soft Glare & Tilt */}
            <div className="relative w-80 h-[430px] md:w-[340px] md:h-[450px] rounded-3xl border border-cardBorder bg-cardBg shadow-glass p-4 transition-all duration-300 z-20">

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-cardBorder">
                <Image
                  src="/Images/jenilsaija.jpg"
                  alt="Jenil Saija Profile Avatar"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Elegant Circular designer stamp badge */}
              <div className="absolute -bottom-6 -right-6 bg-cardBg border border-cardBorder p-4 rounded-full shadow-glass hover:scale-105 transition-all duration-300 w-28 h-28 flex flex-col items-center justify-center text-center select-none z-30">
                <svg className="w-[84px] h-[84px] animate-spin-slow text-primary fill-none absolute" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  <text className="text-[7.5px] uppercase font-mono font-black tracking-widest fill-textHeading">
                    <textPath href="#circlePath" startOffset="0%">
                      ✦ Sparktac Chief Architect ✦ AI specialist
                    </textPath>
                  </text>
                </svg>
                <span className="text-secondary text-lg">✦</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}