"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaWhatsapp, FaRobot, FaBrain, FaServer, FaCogs, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiTypescript,
  SiVercel, SiShadcnui
} from "react-icons/si";
import TiltCard from "./TiltCard";

const skillsCategories = [
  {
    title: "AI & Orchestration",
    skills: [
      { name: "n8n Orchestration", icon: FaCogs },
      { name: "Conversational AI", icon: FaWhatsapp },
      { name: "AI Agent Scripting", icon: FaRobot },
      { name: "LLM Integration", icon: FaBrain },
    ]
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ]
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "RESTful APIs", icon: FaServer },
      { name: "Vercel & Cloud", icon: SiVercel },
      { name: "Git & CI/CD", icon: FaGitAlt },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#09090b] px-8" id="skills">
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical <span className="text-blue-500">Expertise</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Categories Matrix */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {skillsCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Header Label */}
              <div className="flex items-center space-x-3 border-b border-white/5 pb-2">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-500">
                  {category.title}
                </span>
                <div className="flex-1 h-[1px] bg-zinc-900" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <TiltCard
                      className="p-6 flex flex-col items-center justify-center border border-white/5 bg-zinc-950/40 backdrop-blur-md group hover:-translate-y-1 hover:border-white/10 transition-all duration-300 h-[140px]"
                    >
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center mb-3">
                        <skill.icon className="text-4xl text-zinc-400 group-hover:text-blue-500 group-hover:scale-105 transition-all duration-300" />
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-xs font-semibold tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-300 text-center font-sans">
                        {skill.name}
                      </h3>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
