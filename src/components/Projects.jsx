"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCogs, FaArrowRight } from "react-icons/fa";
import TiltCard from "./TiltCard";

const projectData = [
  {
    title: "AI Automation Workflows",
    description: "Intelligent automated pipelines that sync CRM databases, trigger WhatsApp Business alerts, and schedule LinkedIn/X campaigns.",
    image: "/logo.png",
    tags: ["n8n", "WhatsApp API", "CRM Sync", "Social Growth"],
    metrics: [
      { value: "20+ hr", label: "Saved/Wk" },
      { value: "95%", label: "Automation Rate" },
      { value: "10x", label: "Efficiency Gain" }
    ],
    actionLabel: "View Case Study",
    icon: FaCogs,
    bgClass: "bg-cardBg/60 backdrop-blur-md border-cardBorder hover:border-primary/30",
    textColor: "text-primary hover:text-primary-hover",
  },
  {
    title: "Openprompt",
    description: "Prompt Marketplace - Prompt for LLM",
    liveLink: "https://openprompt.sparktac.in",
    image: "/projectimg/openprompt.png",
    tags: ["MERN Stack", "Material UI", "Node.js", "Express.js"],
    metrics: [
      { value: "200+", label: "Active Users" },
      { value: "10k+", label: "Transactions" },
      { value: "99.9%", label: "Accuracy" }
    ],
    actionLabel: "View GitHub",
    icon: FaGithub,
    bgClass: "bg-cardBg/60 backdrop-blur-md border-cardBorder hover:border-primary/30",
    textColor: "text-primary hover:text-primary-hover",
  },
  ,
  {
    title: "SparkTac",
    description: "A Company Website",
    liveLink: "https://sparktac.in",
    image: "/projectimg/sparktac.png",
    tags: ["Next.js", "React", "Node.js", "TailwindCSS"],
    metrics: [
      { value: "10k+", label: "Monthly Views" },
      { value: "50+", label: "Articles" },
      { value: "High", label: "SEO Ranking" }
    ],
    actionLabel: "View Live",
    icon: FaExternalLinkAlt,
    bgClass: "bg-cardBg/60 backdrop-blur-md border-cardBorder hover:border-primary/30",
    textColor: "text-primary hover:text-primary-hover",
  },
  {
    title: "Green Grocer",
    description: "A fully-fledged e-commerce grocery storefront allowing users to purchase goods, featuring a custom integrated admin dashboard panel.",
    githubLink: "https://github.com/Jenilsaija/Green-Grocer",
    image: "/projectimg/greengrocer.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    metrics: [
      { value: "500+", label: "Products" },
      { value: "10k+", label: "Monthly Sales" },
      { value: "98%", label: "Client Rating" }
    ],
    actionLabel: "View GitHub",
    icon: FaGithub,
    bgClass: "bg-cardBg/60 backdrop-blur-md border-cardBorder hover:border-primary/30",
    textColor: "text-primary hover:text-primary-hover",
  },
];

export default function Projects() {
  return (
    <section className="py-28 relative overflow-hidden bg-spaceBg px-6 md:px-12 border-t border-cardBorder" id="projects">
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Heading - Matches mockup styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-black block">✦ Creative Gallery</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-textHeading leading-tight font-sans">
              My Latest Works
            </h2>
            <p className="text-textMuted text-sm font-semibold max-w-lg">
              Perfect solution for digital experience.
            </p>
          </div>

          {/* Top-Right minimal link */}
          <Link href="https://github.com/Jenilsaija" passHref >
            <span target="_blank" rel="noopener noreferrer" className="text-xs uppercase font-mono tracking-widest font-black text-secondary hover:text-secondary-hover underline decoration-secondary/30 hover:decoration-secondary decoration-2 underline-offset-4 transition-all duration-300">
              Explore More Works
            </span>
          </Link>
        </div>

        {/* 2x2 Bento Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => {
            const Icon = project.icon;
            const targetUrl = project.liveLink || project.githubLink;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className={`flex flex-col h-full overflow-hidden rounded-3xl border ${project.bgClass} shadow-glass transition-all duration-500 group relative`}>

                  {/* Image container frame with white inner mockup slot */}
                  <div className="p-6 pb-0 shrink-0">
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-cardBg border border-cardBorder shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />

                      {project.title === "AI Automation Workflows" ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-primary/10 to-secondary/10 relative">
                          <FaCogs className="text-primary text-6xl animate-spin-slower" />
                          <span className="text-xs uppercase font-mono tracking-widest font-bold text-textMuted mt-4">Automation Flowchart</span>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      {/* Category overlay Tag */}
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[9px] font-bold font-mono tracking-widest uppercase bg-zinc-950/90 border border-white/10 text-zinc-100">
                        {project.title === "AI Automation Workflows" ? "AI & Automation" : "Developer Stack"}
                      </span>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-textHeading group-hover:text-primary transition-colors duration-300 font-sans">
                        {project.title}
                      </h3>
                      <p className="text-textMain text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase bg-cardBg text-textMain border border-cardBorder shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 3-Column Metrics Table */}
                    <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-cardBg border border-cardBorder text-center select-none shadow-inner">
                      {project.metrics.map((metric, metricIdx) => (
                        <div key={metricIdx} className="flex flex-col justify-center">
                          <span className="text-base font-black text-primary font-space leading-none">{metric.value}</span>
                          <span className="text-[8px] text-textMuted uppercase tracking-widest font-mono font-bold mt-1.5 leading-none">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Minimal Arrow Link Trigger */}
                    {targetUrl && <div className="pt-4 border-t border-cardBorder/50 flex justify-end">
                      <Link href={targetUrl} passHref>
                        <span
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest font-black ${project.textColor} hover:opacity-85 transition-opacity cursor-pointer`}
                        >
                          <span>{project.actionLabel}</span>
                          <FaArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
