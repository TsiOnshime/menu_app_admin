import React from "react";
import Innovate from "../images/innovate.png";
import Portfolio1 from "../images/portfolio1.png";
import Fashion from "../images/fashion.png";
import Codeflow from "../images/codeflow.png";
import AiAnalytics from "../images/aiAnalytics.png";
const projects = [
  {
    title: "Innovate Corp",
    description:
      "A fully responsive SaaS homepage built with React and Tailwind, featuring a modern hero section, pricing tiers, testimonials, and strong CTAs. Designed with clean UI, smooth spacing, and conversion-focused layout best practices.",
    tags: ["React", "Tailwind"],
    img: Innovate,
    link: "https://innovatecorp2.onrender.com/",
  },
  {
    title: "Responsive Developer Portfolio",
    description:
      "A custom portfolio site showcasing skills, experience, and sample work. Built with React and Tailwind, optimized for responsiveness, fast loading, and a minimal modern aesthetic. Includes sections for projects, contact, and social links.",
    tags: ["React", "Tailwind"],
    img: Portfolio1,
    link: "https://userportfolio-4szw.onrender.com/",
  },
  {
    title: "Fashion Blog Landing Page",
    description:
      "A stylish, responsive landing page for a fashion blog built with React and Tailwind CSS. Features a modern layout with hero section, blog previews, about section, and newsletter signup. Designed to highlight content with clean typography and elegant spacing.",
    tags: ["React", "Tailwind"],
    img: Fashion,
    link: "https://fashion-blog-sra6.onrender.com",
  },
  {
    title: "Codeflow Landing Page",
    description:
      "A modern, fully responsive AI development platform built with React and Tailwind CSS. The site showcases CodeFlow’s core features—including AI code completion, automated testing, and smart debugging—through a clean, SaaS-style interface.",
    tags: ["React", "Tailwind"],
    img: Codeflow,
    link: "https://codeflow-landingpage.onrender.com/",
  },
  {
    title: "AI Analytics – Series A Fundraising Platform",
    description:
      "A modern investor-focused landing page built with React and Tailwind, showcasing a fictional AI-powered analytics startup raising Series A funding.",
    tags: ["React", "Tailwind"],
    img: AiAnalytics,
    link: "https://pitchlandingpage-xhh5.onrender.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-16" id="projects">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-14">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-0 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 hover:underline transition mb-4"
              >
                Visit Project →
              </a>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
