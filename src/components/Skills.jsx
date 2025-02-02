"use client";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiTypescript,
  SiPostgresql, SiMysql, SiDaisyui, SiShadcnui
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="py-20 bg-base-200  px-8 text-base-content transition-all duration-500" id="skills">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-bold text-center mb-16 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group card bg-base-300 shadow-xl p-6 border border-base-content/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Floating Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>

              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-4">
                <skill.icon className="text-6xl text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Data Array
const skillsData = [
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "DaisyUI", icon: SiDaisyui },
  { name: "ShadCN/UI", icon: SiShadcnui },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git", icon: FaGitAlt },
];
