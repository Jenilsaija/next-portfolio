"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaBriefcase, FaRobot } from "react-icons/fa";

const experienceData = [
  {
    company: "Sparktac",
    title: "Founder & Lead Developer",
    duration: "June 2024 - Present",
    description:
      "Founded Sparktac to bridge the gap between high-performance web applications and autonomous AI agents. Architected enterprise B2B SaaS platforms (OpenPrompt) and centralized visual workspaces for automating LinkedIn and Twitter bot orchestrations (OpenBuilder). Managed full-product deployment pipelines, serverless infrastructures, and SaaS optimization parameters.",
    year: "Present",
    icon: FaBrain,
    glow: "rgba(99, 102, 241, 0.4)",
  },
  {
    company: "Squad Technologies Pvt. Ltd.",
    title: "Junior Full Stack Developer",
    duration: "June 2024 - Present",
    description:
      "Developed and maintained scalable web applications using the NextJS stack (Mysql, Node.js, Express.js, React) and Next.js. Collaborated with cross-functional teams, including product, design, and QA, to deliver high-quality products. Implemented key features, improved performance, and ensured code maintainability.",
    year: "2024",
    icon: FaBriefcase,
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    company: "REWIC – WhatsApp AI Ecosystem",
    title: "Lead Architect & Developer",
    duration: "Mar 2024 - May 2024",
    description:
      "Designed and engineered an automated conversational system for property inquiry parsing, intent matching, and real estate lead nurturing on WhatsApp. Developed complex workflow logic using n8n and customized Node.js API parsing scripts. Successfully synchronized automated pipelines with centralized CRM databases for seamless tracking.",
    year: "2024",
    icon: FaRobot,
    glow: "rgba(99, 102, 241, 0.4)",
  },
  {
    company: "Squad Technologies Pvt. Ltd.",
    title: "Trainee Full Stack Developer",
    duration: "Mar 2024 - May 2024",
    description:
      "Focused on UI/UX design and implementation using React.js and Tailwind CSS. Built responsive and user-friendly interfaces, optimized performance for seamless user experience, and collaborated with designers to translate mockups into functional code with different database and gained very good learning and experience.",
    year: "2024",
    icon: FaBriefcase,
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    company: "Cloud Brain Technologies",
    title: "Intern Software Developer",
    duration: "Sep 2023 - Feb 2024",
    description:
      "Gained hands-on backend development experience. Assisted in engineering RESTful API schemas and modular backend controllers using Node.js, Express.js, and MongoDB. Learned operational standards, Git versioning, and software development lifecycle parameters.",
    year: "2023",
    icon: FaBriefcase,
    glow: "rgba(99, 102, 241, 0.4)",
  },
];

export default function Experience() {
  return (
    <section className="py-28 relative overflow-hidden bg-spaceBg px-6 md:px-12 border-t border-cardBorder" id="experience">
      <div className="absolute top-1/2 right-[-15%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-black block">✦ Journey Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-textHeading mt-2 font-sans">
            My Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Custom Vertical Dotted Axis Pipeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Elegant Dashed Timeline line - aligns centered under the 48px circles */}
          <div className="absolute left-[24px] md:left-[30%] md:translate-x-[24px] top-4 bottom-4 w-[2px] border-l-2 border-dashed border-cardBorder -translate-x-1/2 select-none pointer-events-none" />

          <div className="space-y-4">
            {experienceData.map((data, index) => {
              const Icon = data.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-stretch w-full pl-12 md:pl-0"
                >

                  {/* Left Column: Date & Company (takes 30% on desktop) */}
                  <div className="w-full md:w-[30%] md:pr-10 text-left md:text-right pt-6 shrink-0 space-y-1.5 flex flex-col justify-start md:justify-center md:pb-6">
                    <h4 className="text-sm font-black text-textHeading leading-tight font-sans">
                      {data.company}
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest leading-none">
                      {data.duration}
                    </span>
                  </div>

                  {/* Center dotted timeline axis - w-12 is 48px wide, so center is 24px */}
                  <div className="absolute left-0 md:relative md:left-0 w-12 flex justify-center pt-8 md:shrink-0 md:pb-6">
                    {/* Milestone Outline Double Ring */}
                    <div
                      className="w-6 h-6 rounded-full bg-cardBg border-2 flex items-center justify-center z-20 group transition-all duration-300 hover:scale-125 cursor-pointer relative"
                      style={{
                        borderColor: data.glow.replace("0.4", "1"),
                        boxShadow: `0 0 12px ${data.glow.replace("0.4", "0.2")}`,
                      }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" style={{ backgroundColor: data.glow.replace("0.4", "1") }} />
                    </div>
                  </div>

                  {/* Right Column: Role & Bio Description (takes 60% on desktop) */}
                  <div className="w-full md:w-[60%] pl-2 md:pl-10 pb-12 pt-6 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 80, damping: 15 }}
                      className="w-full"
                    >
                      <div className="p-6 md:p-8 rounded-3xl border border-cardBorder bg-cardBg shadow-glass hover:shadow-glassHover hover:border-primary/20 transition-all duration-500 space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-black text-textHeading font-sans leading-tight">
                            {data.title}
                          </h3>
                        </div>

                        <p className="text-textMain text-xs md:text-sm leading-relaxed">
                          {data.description}
                        </p>

                        <div className="pt-3 border-t border-cardBorder/50 flex justify-end">
                          <span className="px-3 py-1 rounded-md text-[9px] font-mono font-bold bg-spaceBg border border-cardBorder text-textMuted shadow-inner select-none">
                            {data.year}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}