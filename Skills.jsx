import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaLightbulb,
  FaUsers,
  FaRunning,
  FaSmile,
  FaCommentDots,
  FaLaptop,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800" />,
      link: "https://github.com/yourusername",
    },
    {
       name: "Linux", icon: <FaLaptop className="text-gray-800" /> 
    },
    
  ];

  const softSkills = [
    { name: "Leadership", icon: <FaLightbulb className="text-yellow-500" /> },
    { name: "Teamwork", icon: <FaUsers className="text-blue-600" /> },
    { name: "Problem Solving", icon: <FaLightbulb className="text-green-500" /> },
    { name: "Self-Motivation", icon: <FaRunning className="text-red-500" /> },
    { name: "Positive Attitude", icon: <FaSmile className="text-pink-500" /> },
    { name: "Communication", icon: <FaCommentDots className="text-purple-600" /> },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center justify-center w-28 h-28 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onClick={() => skill.link && window.open(skill.link, "_blank")}
      >
        <div className="text-4xl">{skill.icon}</div>
        <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
          {skill.name}
        </p>
      </motion.div>
    ));

  return (
    <div className="py-16 bg-gray-50" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        My Skills
      </h2>

      {/* Technical Skills */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Technical Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {renderSkills(technicalSkills)}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {renderSkills(softSkills)}
        </div>
      </section>
    </div>
  );
};

export default Skills;
