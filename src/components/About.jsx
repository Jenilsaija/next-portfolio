"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaRocket, FaCheckCircle, FaBrain, FaCogs } from "react-icons/fa";
import TiltCard from "./TiltCard";

export default function About() {
  const router = useRouter();

  return (
    <section className="py-24 relative overflow-hidden bg-[#09090b] px-8" id="about">
      {/* Background soft glow aura */}
      <div className="absolute top-1/2 left-[-15%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Glass Tilt Card for Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <TiltCard className="p-8 md:p-10 flex flex-col justify-between h-full border border-white/5 bg-zinc-950/40 backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <FaBrain className="text-2xl text-blue-500 shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Eliminating Manual Friction Through Code
                  </h3>
                </div>
                
                <p className="text-zinc-300 text-base leading-relaxed font-sans">
                  My journey in tech is driven by a simple question: <b className="text-blue-400 font-semibold">How can we use intelligent code to eliminate manual friction?</b> As a Full Stack & AI Developer and the founder of <b className="text-white font-semibold">Sparktac</b>, I dedicate my time to engineering tools that empower businesses to scale autonomously.
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  💡 Through <b className="text-zinc-200 font-medium">n8n workflow orchestration</b> and custom <b className="text-zinc-200 font-medium">AI agent scripting</b>, I build ecosystems that do heavy lifting behind the scenes.
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  🔥 Whether it's crafting enterprise prompt management tools with <b className="text-zinc-200 font-medium">OpenPrompt</b>, deploying social growth frameworks with <b className="text-zinc-200 font-medium">OpenBuilder</b>, or revolutionizing real estate lead nurturing via <b className="text-zinc-200 font-medium">REWIC</b> on WhatsApp, I focus on creating high-impact solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => router.push("/#contact")}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Let's Automate
                </button>
                <button
                  onClick={() => router.push("/#projects")}
                  className="border border-zinc-800 bg-transparent text-zinc-300 hover:text-white text-sm px-6 py-3.5 rounded-xl font-semibold hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Glass Tilt Card for Pillars & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <TiltCard className="p-8 md:p-10 flex flex-col justify-between h-full border border-white/5 bg-zinc-950/40 backdrop-blur-md">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-3">
                  <FaCogs className="text-blue-500 text-xl shrink-0 animate-spin-slow" />
                  <span>Core Pillars of Expertise</span>
                </h3>
                <p className="text-zinc-400 text-sm">
                  Delivering end-to-end integration and visually stunning frontend frameworks.
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    "SaaS & B2B Product Engineering (React, Next.js, APIs)",
                    "Conversational AI & Intent Matching (WhatsApp Automation)",
                    "Workflow Orchestration & Scheduling Automation (n8n)",
                    "Multi-Agent AI Tooling and LLM Scripting",
                    "Custom UI/UX Design Kits for Modern Developers (shadcn/ui)"
                  ].map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-3 text-zinc-300 text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FaCheckCircle className="text-blue-500 mt-0.5 shrink-0 text-base" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Minimalist Stats grid */}
              <div className="mt-8 p-5 rounded-2xl bg-zinc-900/30 border border-white/5 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-blue-500 font-sans tracking-tight">100%</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mt-1">Automation</div>
                </div>
                <div className="border-x border-white/5">
                  <div className="text-2xl font-extrabold text-zinc-100 font-sans tracking-tight">3+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mt-1">AI Products</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-zinc-100 font-sans tracking-tight">2+ Yrs</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mt-1">Full Stack</div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
