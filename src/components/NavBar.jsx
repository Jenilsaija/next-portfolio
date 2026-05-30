"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check current active class on mount
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Journey", href: "/#experience" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "pt-4 px-4 md:px-8" : "pt-6 px-6"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl w-full rounded-2xl border transition-all duration-500 relative ${
            isScrolled
              ? "bg-cardBg/80 backdrop-blur-lg border-cardBorder py-3.5 px-6 shadow-glass"
              : "bg-transparent border-transparent py-2 px-0"
          } flex items-center justify-between`}
        >
          {/* Scroll Progress purple bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />

          <Link href="/">
            <motion.span
              className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer font-sans"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              JENIL SAIJA
            </motion.span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => {
              const isCapsule = link.name === "Services";
              return (
                <Link key={idx} href={link.href}>
                  <span className={`relative text-[10px] uppercase tracking-widest font-mono font-black transition-all duration-300 cursor-pointer select-none ${
                    isCapsule
                      ? "border border-primary/45 hover:border-primary text-primary px-4.5 py-2.5 rounded-full hover:bg-primary/5"
                      : "text-textMuted hover:text-primary py-2"
                  }`}>
                    {link.name}
                    {!isCapsule && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 rounded-full bg-secondary scale-0 transition-transform duration-300 hover:scale-100 group-hover:scale-100" />
                    )}
                  </span>
                </Link>
              );
            })}

            {/* Glowing physical theme switcher */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-cardBg border border-cardBorder text-textMuted hover:text-primary hover:border-primary/20 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? <FaMoon size={15} /> : <FaSun size={15} className="text-accent animate-pulse" />}
            </button>

            <Link href="/#contact" className="bg-primary hover:bg-primary-hover text-white text-[10px] uppercase font-mono tracking-wider font-bold px-5 py-3 rounded-xl shadow-lg shadow-primary/15 hover:scale-105 transition-all cursor-pointer select-none">
              Let's Automate
            </Link>
          </div>

          {/* Mobile Hamburger Toggle & Theme switch container */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-cardBg text-textMuted hover:text-primary border border-cardBorder transition-all cursor-pointer"
              aria-label="Toggle theme mobile"
            >
              {theme === "light" ? <FaMoon size={14} /> : <FaSun size={14} className="text-secondary animate-pulse" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textMuted hover:text-primary text-xl p-2 transition-colors cursor-pointer"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full absolute top-[110%] left-0 bg-cardBg/95 backdrop-blur-xl border border-cardBorder rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="flex flex-col space-y-4 px-6 py-6">
                {navLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setIsOpen(false)}>
                    <span className="text-sm font-bold text-textMuted hover:text-primary block py-2.5 transition-colors cursor-pointer border-b border-cardBorder">
                      {link.name}
                    </span>
                  </Link>
                ))}
                
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary hover:bg-primary-hover text-white text-center text-[10px] uppercase font-mono tracking-wider font-bold py-3.5 rounded-xl shadow-lg shadow-primary/10"
                >
                  Let's Automate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
