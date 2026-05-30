"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDHeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight || 450;

    // 1. Create Scene
    const scene = new THREE.Scene();

    // 2. Create Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 5.5;

    // 3. Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 4. Main Orbit Group
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // Core Wireframe Sphere (Soft Violet lines)
    const coreGeometry = new THREE.SphereGeometry(1.2, 20, 20);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed, // Violet
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    systemGroup.add(core);

    // Glowing Nucleus Core (Indigo)
    const nucleusGeometry = new THREE.SphereGeometry(0.55, 16, 16);
    const nucleusMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5, // Indigo
      transparent: true,
      opacity: 0.45,
    });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    systemGroup.add(nucleus);

    // Orbital ring helpers
    const buildOrbitRing = (radius, rotX = 0, rotY = 0) => {
      const points = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const ringGeom = new THREE.BufferGeometry().setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x4f46e5,
        transparent: true,
        opacity: 0.08,
      });
      const ring = new THREE.Line(ringGeom, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      systemGroup.add(ring);
    };

    // Render intersecting rings
    buildOrbitRing(2.1, Math.PI / 4, 0);
    buildOrbitRing(2.5, -Math.PI / 6, Math.PI / 4);

    // Orbiting nodes representing primary skills
    const techSkills = [
      { name: "React", color: 0x00d8ff, speed: 0.009, radius: 2.1, angle: 0 },
      { name: "Node.js", color: 0x339933, speed: 0.007, radius: 2.1, angle: Math.PI },
      { name: "Next.js", color: 0x09090b, speed: 0.006, radius: 2.5, angle: Math.PI / 2 },
      { name: "MongoDB", color: 0x47a248, speed: 0.005, radius: 2.5, angle: -Math.PI / 2 },
    ];

    const nodes = techSkills.map((tech) => {
      const nodeGeom = new THREE.SphereGeometry(0.18, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: tech.color,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(nodeGeom, nodeMat);
      mesh.userData = { ...tech };
      systemGroup.add(mesh);
      return mesh;
    });

    // 5. Light support
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7c3aed, 1.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 6. Interactive Grab/Rotation state
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMouse.x;
      const deltaY = e.clientY - previousMouse.y;

      systemGroup.rotation.y += deltaX * 0.006;
      systemGroup.rotation.x += deltaY * 0.006;

      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const localMount = mountRef.current;
    localMount.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Core spinning
      core.rotation.y += 0.002;
      core.rotation.x += 0.001;
      nucleus.rotation.y -= 0.001;

      // Nucleus scale glowing animation
      const pulseFactor = 1 + Math.sin(performance.now() * 0.0025) * 0.06;
      nucleus.scale.set(pulseFactor, pulseFactor, pulseFactor);

      // Position nodes inside orbital angles
      nodes.forEach((node) => {
        const data = node.userData;
        data.angle += data.speed;

        if (data.radius === 2.1) {
          const x = Math.cos(data.angle) * data.radius;
          const z = Math.sin(data.angle) * data.radius;
          node.position.x = x;
          node.position.y = z * Math.sin(Math.PI / 4);
          node.position.z = z * Math.cos(Math.PI / 4);
        } else {
          const x = Math.cos(data.angle) * data.radius;
          const z = Math.sin(data.angle) * data.radius;
          node.position.x = x * Math.cos(Math.PI / 4);
          node.position.y = z * Math.sin(-Math.PI / 6);
          node.position.z = z * Math.cos(-Math.PI / 6) + x * Math.sin(Math.PI / 4);
        }
      });

      // Slowly rotate the entire galaxy when not dragging
      if (!isDragging) {
        systemGroup.rotation.y += 0.0015;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      localMount.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      nodes.forEach((node) => {
        node.geometry.dispose();
        node.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[320px] lg:h-[450px] relative cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
    />
  );
}
