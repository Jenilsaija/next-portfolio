"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device has a coarse pointer (touch device) or screen is small
    const checkDevice = () => {
      const mobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return () => window.removeEventListener("resize", checkDevice);

    // Add CSS class to disable standard cursor
    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Apply event bindings to hover states
    const bindHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, [role="button"], input[type="text"], input[type="email"], textarea, .btn, .card, [tabindex="0"]'
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    bindHoverListeners();

    // Watch DOM changes to bind new elements dynamically (such as filters, loaded list items)
    const observer = new MutationObserver(bindHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", checkDevice);
      observer.disconnect();
    };
  }, [isMobile]);

  // Linear Interpolation (LERP) trailing loop
  useEffect(() => {
    if (isMobile || isHidden) return;

    let animId;
    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const ease = 0.16; // Lerp damping speed
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animId = requestAnimationFrame(updateTrail);
    };

    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [position, isHidden, isMobile]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Tiny Laser Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 bg-primary pointer transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      />
      {/* Outer Halo ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 border transition-all duration-300 ${
          isHovered
            ? "w-16 h-16 bg-primary/15 border-primary shadow-[0_4px_20px_rgba(99,102,241,0.2)] scale-110"
            : "w-8 h-8 border-secondary/30 bg-secondary/5 scale-100"
        }`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
        }}
      />
    </>
  );
}
