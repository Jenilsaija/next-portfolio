"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaCogs, FaProjectDiagram, FaGlobe, FaChevronRight } from "react-icons/fa";
import TiltCard from "./TiltCard";

const servicesList = [
  {
    title: "AI Workflows & n8n Syncs",
    projectsCount: "45+ Active Pipelines",
    icon: FaProjectDiagram,
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Conversational AI Agents",
    projectsCount: "20+ Active Support Bots",
    icon: FaRobot,
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    title: "Full Stack SaaS Apps",
    projectsCount: "15+ Deployed Products",
    icon: FaGlobe,
    color: "bg-accent/10 text-accent border-accent/20",
  }
];

export default function Services() {
  return (
    <section className="py-28 relative overflow-hidden bg-spaceBg px-6 md:px-12 border-t border-cardBorder" id="services">
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[35%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Asymmetric 2-Column Section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Stacked Rounded Service Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-5 rounded-2xl border border-cardBorder bg-cardBg shadow-glass hover:shadow-glassHover hover:border-primary/20 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      {/* Icon Circle badge */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${service.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-textHeading font-extrabold text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                          {service.title}
                        </h4>
                        <p className="text-[10px] text-textMuted font-mono uppercase tracking-widest mt-1">
                          {service.projectsCount}
                        </p>
                      </div>
                    </div>
                    
                    {/* Small neat chevron arrow */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-spaceBg border border-cardBorder text-textMuted group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                      <FaChevronRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Copy & High-Impact Metric counters (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 lg:pl-4"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-black block">✦ Solution Blueprint</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-textHeading leading-tight font-sans">
                What do I help?
              </h2>
            </div>

            <div className="space-y-6 text-textMain text-sm md:text-base leading-relaxed">
              <p>
                I will help you with finding manual friction bottlenecks and solve them using custom AI orchestrations. We use automated n8n pipeline design to create digital leverage, reduce operating costs, and scale your business without growing headcounts.
              </p>
              <p>
                We build self-optimizing pipelines, conversational tools, and robust backend integrations that work 24/7. Besides that, we optimize your software stack parameters to ensure 100% data alignment.
              </p>
            </div>

            {/* High-impact Big Counters */}
            <div className="pt-8 border-t border-cardBorder grid grid-cols-2 gap-8">
              <div>
                <span className="text-5xl md:text-6xl font-black text-primary font-space leading-none tracking-tight">50+</span>
                <p className="text-[9px] uppercase tracking-widest font-mono font-black text-textMuted mt-2 leading-none">
                  Workflows Synced
                </p>
              </div>
              <div className="border-l border-cardBorder pl-8">
                <span className="text-5xl md:text-6xl font-black text-textHeading font-space leading-none tracking-tight">10x</span>
                <p className="text-[9px] uppercase tracking-widest font-mono font-black text-textMuted mt-2 leading-none">
                  Efficiency Gain
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
