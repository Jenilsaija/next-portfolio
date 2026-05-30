"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 6;

    // 3. Renderer setup - transparent for light theme CSS background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 4. Create organic drifting liquid blobs
    const blobGroup = new THREE.Group();
    scene.add(blobGroup);

    const blobGeom = new THREE.SphereGeometry(2.2, 32, 32);
    
    // Soft Electric Indigo Blob
    const tealBlobMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.05, // Extremely soft
    });
    const tealBlob = new THREE.Mesh(blobGeom, tealBlobMat);
    tealBlob.position.set(-2.5, 1.8, -2);
    blobGroup.add(tealBlob);

    // Soft Neon Emerald Blob
    const coralBlobMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.04, // Extremely soft
    });
    const coralBlob = new THREE.Mesh(blobGeom, coralBlobMat);
    coralBlob.position.set(2.5, -1.8, -2);
    blobGroup.add(coralBlob);

    // Soft Royal Blue Blob
    const amberBlobMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.04, // Extremely soft
    });
    const amberBlob = new THREE.Mesh(blobGeom, amberBlobMat);
    amberBlob.position.set(0, 0, -3);
    blobGroup.add(amberBlob);

    // Soft organic helper particles (very sparse, clean Indigo)
    const particlesCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Electric Indigo color
      colors[i] = 0.39;     // R (99/255)
      colors[i + 1] = 0.40;   // G (102/255)
      colors[i + 2] = 0.95;   // B (241/255)
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const createCircularTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 0.08,
      map: createCircularTexture(),
      transparent: true,
      opacity: 0.12,
      blending: THREE.NormalBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse drift
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      // Slow organic rotation
      particleSystem.rotation.y = targetX * 0.1 + performance.now() * 0.00001;
      particleSystem.rotation.x = targetY * 0.1;

      // Sway blobs gently using sine/cosine functions
      const time = performance.now() * 0.0004;
      
      tealBlob.position.x = -2.5 + Math.sin(time) * 0.6 + targetX * 0.3;
      tealBlob.position.y = 1.8 + Math.cos(time * 0.8) * 0.5 + targetY * 0.3;
      
      coralBlob.position.x = 2.5 + Math.cos(time * 0.9) * 0.6 + targetX * 0.3;
      coralBlob.position.y = -1.8 + Math.sin(time * 0.7) * 0.5 + targetY * 0.3;

      amberBlob.position.x = Math.sin(time * 0.5) * 0.4;
      amberBlob.position.y = Math.cos(time * 0.6) * 0.4;

      // Breathe scaling effect on blobs
      const scaleTeal = 1.0 + Math.sin(time * 1.2) * 0.08;
      tealBlob.scale.set(scaleTeal, scaleTeal, scaleTeal);

      const scaleCoral = 1.0 + Math.cos(time * 1.1) * 0.08;
      coralBlob.scale.set(scaleCoral, scaleCoral, scaleCoral);

      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      blobGroup.position.y = -scrollY * 0.0008;
      particleSystem.position.y = -scrollY * 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none bg-spaceBg"
    />
  );
}
