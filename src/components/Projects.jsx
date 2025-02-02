"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React.js and Tailwind CSS to showcase my work and projects.",
      liveLink: "https://example.com/portfolio",
      githubLink: "https://github.com/example/portfolio",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Website", // Dummy image
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
      liveLink: "https://example.com/e-commerce",
      githubLink: "https://github.com/example/e-commerce",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform", // Dummy image
    },
    {
      title: "Blog Application",
      description: "A blogging platform allowing users to create, edit, and share their blogs using a clean and responsive interface.",
      liveLink: "https://example.com/blog",
      githubLink: "https://github.com/example/blog",
      image: "https://via.placeholder.com/600x400?text=Blog+Application", // Dummy image
    },
  ];

  return (
    <section className="py-20 bg-base-200" id="projects">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-primary tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-base-300 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="btn btn-primary flex-1 flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
                    <FaExternalLinkAlt /> Live Link
                  </a>
                  <a href={project.githubLink} className="btn btn-outline flex-1 flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <Link href="/projects" className="btn btn-accent gap-5 items-center justify-center px-6 py-3 transition-colors duration-200 hover:bg-accent-focus">
            <span className="flex-1 text-center">View More Projects</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
