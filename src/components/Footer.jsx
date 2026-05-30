"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Jenilsaija", color: "hover:bg-[#24292e] hover:text-white hover:shadow-[0_0_15px_rgba(36,41,46,0.2)]", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/jenil-saija", color: "hover:bg-[#0077b5] hover:text-white hover:shadow-[0_0_15px_rgba(0,119,181,0.2)]", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/SaijaJenil", color: "hover:bg-[#1da1f2] hover:text-white hover:shadow-[0_0_15px_rgba(29,161,242,0.2)]", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:jrsaija@gmail.com", color: "hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]", label: "Email" },
  ];

  return (
    <footer className="relative bg-cardBg text-textMuted py-12 px-6 overflow-hidden border-t border-cardBorder">
      <div className="absolute top-[80%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <Link href="/">
            <span className="text-xl font-extrabold tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer font-sans select-none">
              JENIL SAIJA
            </span>
          </Link>
          <p className="text-xs text-textMuted/80 max-w-xs leading-relaxed">
            Full Stack Web Developer & AI Consultant crafting highly interactive automated operations.
          </p>
        </div>

        {/* Middle Column Socials */}
        <div className="flex items-center space-x-3.5">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center bg-cardBg border border-cardBorder text-textMuted transition-all duration-300 shadow-sm ${social.color}`}
            >
              <social.icon size={14} />
            </motion.a>
          ))}
        </div>

        {/* Right Column Copyrights */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
          <p className="text-xs font-mono text-textMuted/70">
            &copy; {currentYear} - All Rights Reserved.
          </p>
          <p className="text-xs text-textMuted">
            Engineered by <span className="text-textHeading font-semibold">Jenil Saija</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
