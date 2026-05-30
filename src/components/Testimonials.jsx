"use client";
import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const testimonialsData = [
  {
    text: "Jenil transformed our customer support framework. Our agents now handle 30% more inquiries per day because the automated AI router prioritizes high-value customers.",
    clientName: "Dymalex",
    clientMeta: "Software Development Company",
    initials: "D",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    text: "This automation pipeline saved us 20+ hours per week. The n8n integrations are robust, and we've experienced zero downtime in the first six months.",
    clientName: "Yarnaak Steel Pvt. Ltd.",
    clientMeta: "Steel Manufacturing Company",
    initials: "Y",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    text: "Our client onboarding process is entirely automated now. Inquiries are resolved within 5 minutes, significantly improving our overall retention rate.",
    clientName: "Blue Trencher",
    clientMeta: "Logistics Startup",
    initials: "B",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    text: "The custom AI consulting session cleared all doubts we had regarding agent integrations. The roadmap provided was key to our project success.",
    clientName: "RCK structures",
    clientMeta: "Construction Firm",
    initials: "R",
    color: "bg-primary/10 text-primary border-primary/20",
  }
];

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden bg-spaceBg px-6 md:px-12 border-t border-cardBorder" id="testimonials">
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading - Matches mockup styling */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-black block">✦ Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-textHeading mt-2 font-sans">
            People talk about us
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((test, index) => (
            <motion.div
              key={test.clientName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="p-6 md:p-8 flex flex-col justify-between h-full border border-cardBorder bg-cardBg transition-all duration-300">
                <div className="space-y-5">
                  
                  {/* Testimony copy */}
                  <p className="text-textMain text-sm leading-relaxed italic text-center md:text-left">
                    "{test.text}"
                  </p>

                </div>

                {/* Client info signature with stylized avatar initials circle */}
                <div className="mt-6 pt-4 border-t border-cardBorder flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shrink-0 font-sans border ${test.color} shadow-inner select-none`}>
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="text-textHeading font-extrabold text-sm leading-tight">{test.clientName}</h4>
                      <p className="text-[10px] text-textMuted font-mono uppercase tracking-widest mt-0.5">{test.clientMeta}</p>
                    </div>
                  </div>
                </div>

              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
