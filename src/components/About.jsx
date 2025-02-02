"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-base-200 relative px-8" id="about">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[url('/logo.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-primary tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        {/* About Section Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="space-y-6 bg-base-300/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-base-content/30"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary">
              🚀 Transforming Ideas into Scalable Solutions
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              I am a highly skilled <b>Full Stack Developer</b> with expertise in <b>MERN Stack, Next.js</b>, 
              and building high-performance, scalable applications.
            </p>

            <p className="text-lg leading-relaxed text-gray-800 ">
              💡 My expertise lies in <b>React.js, Next.js, and Tailwind CSS</b>, ensuring 
              <b> SEO-friendly, blazing-fast, and responsive</b> designs. I specialize in 
              backend development using <b>Node.js, Express, and MongoDB</b> for seamless data management.
            </p>

            <p className="text-lg leading-relaxed text-gray-800 ">
              🔥 Whether it’s a <b>startup MVP, a SaaS product, or a complex business platform</b>, 
              I deliver <b>optimized, scalable, and secure</b> solutions with cutting-edge technologies.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="btn btn-primary text-lg font-semibold px-6 hover:scale-105 transition-transform">
                Hire Me
              </button>
              <button className="btn btn-outline text-lg px-6 hover:scale-105 transition-transform">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right - Highlight Box */}
          <motion.div
            className="bg-base-300/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-base-content/30"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Work With Me?
            </h3>
            <ul className="space-y-3 text-lg text-gray-900 ">
              <li>✅ 2+ Years of Development Experience</li>
              <li>✅ Expert in React.js, Next.js & Tailwind CSS</li>
              <li>✅ Backend Specialist (Node.js, Express, MongoDB)</li>
              <li>✅ Passionate about Clean UI/UX & Performance Optimization</li>
              <li>✅ Open for Freelance & Collaboration Opportunities</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
