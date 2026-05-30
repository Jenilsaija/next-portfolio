"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion values for relative position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring interpolations for rotations (very subtle angles: max 6 degrees for premium elegance)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate position from -0.5 to 0.5 relative to center of the card
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);

    // Calculate glare coordinates inside card
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      }}
      className={`relative rounded-3xl overflow-hidden glassmorphism transition-all duration-500 cursor-pointer ${className} ${
        isHovered ? "shadow-glassHover border-primary/25 scale-[1.01]" : "shadow-glass"
      }`}
    >
      {/* Soft Radial Glare Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.05), transparent 80%)`,
          }}
        />
      )}
      <div style={{ transform: "translateZ(10px)" }} className="h-full w-full relative z-20">
        {children}
      </div>
    </motion.div>
  );
}
