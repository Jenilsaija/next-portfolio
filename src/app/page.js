"use client";
import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experiance";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div className="relative bg-transparent overflow-hidden">
      
      {/* Hero Presentation Dashboard */}
      <Hero />

      {/* Services I Offer Grid */}
      <Services />

      {/* Projects Showcase with Metrics Tables */}
      <Projects />

      {/* Professional Journey Timeline */}
      <Experience />

      {/* Testimonials Review Matrix */}
      <Testimonials />

      {/* Ready to Automate CTA Cards & Email Form */}
      <Contact />

    </div>
  );
}
