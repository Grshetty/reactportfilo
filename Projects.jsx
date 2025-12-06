import React, { useState } from "react";
import Sams from "../images/Sams.jpg";
import LMS from "../images/LMS.png";
import Ambasdor from "../images/Ambasdor.png";
import RiceCart from "../images/RiceCart.png";
import Portfilo from "../images/Portfilo.png";
import Adidas from "../images/Adidas.png";
import PortfiloReact from "../images/PortfiloReact.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "SAMS",
      desc: "A fully responsive school website showcasing academics, staff details, events, and admissions.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
      img: Sams,
    },
    {
      id: 2,
      title: "Library Management System",
      desc: "A front‑end library system where users can add, update, view, and delete books.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
      img: LMS,
    },
    {
      id: 3,
      title: "CAMS",
      desc: "A modern college website featuring departments, faculty highlights, events, and admissions.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
      img: Sams,
    },
    {
      id: 4,
      title: "Ambassador Car Website (Practice)",
      desc: "A vintage‑themed website celebrating the iconic Ambassador car.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
      img: Ambasdor,
    },
    {
      id: 5,
      title: "RiceCart (Practice)",
      desc: "A simple responsive website showcasing different varieties of rice.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
      img: RiceCart,
    },
    {
      id: 7,
      title: "Portfolio",
      desc: "A modern personal portfolio website with smooth UI and clean animations.",
      tech: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
      img: Portfilo,
    },
    {
      id: 8,
      title: "Adidas React Website (Practice)",
      desc: "A responsive Adidas‑themed React practice project featuring product grids.",
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
      img: Adidas,
    },
    {
      id: 9,
      title: "React Portfolio",
      desc: "A fully responsive portfolio built using React and Tailwind CSS.",
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
      img: PortfiloReact,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="projects" className="min-h-screen bg-white text-gray-900 px-6 md:px-16 py-20">
      <h2 className="text-4xl font-bold text-center mb-14 tracking-wide">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-12">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 tracking-wide whitespace-nowrap">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-100 border border-gray-300 rounded-full font-medium"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold border rounded-lg hover:bg-gray-900 hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold border rounded-lg hover:bg-gray-900 hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14 space-x-5">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-lg font-semibold border transition ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed text-gray-500"
              : "bg-white hover:bg-gray-900 hover:text-white"
          }`}
        >
          Previous
        </button>

        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-lg font-semibold border transition ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed text-gray-500"
              : "bg-white hover:bg-gray-900 hover:text-white"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
