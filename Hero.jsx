import React from "react";
import Myphoto from "../images/Myphoto.jpg";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-white px-6 md:px-16 gap-y-12 md:gap-x-20"
    >
      {/* IMAGE SECTION */}
      <div className="md:w-1/2 flex justify-center md:justify-start mt-14 md:mt-0">
        <img
          src={Myphoto}
          alt="Ruthveek Gourishetty"
          className="w-72 sm:w-80 md:w-96 rounded-3xl shadow-xl object-cover mt-20"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Hi, I'm
          <span className="block text-red-600 font-extrabold mt-2">
            Ruthveek Gourishetty
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-6 mb-10 text-gray-600 max-w-md">
          A passionate Frontend Developer crafting engaging and responsive web
          experiences 🚀
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#projects"
            className="inline-block bg-black hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-black hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Resume
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mt-2">
          <a href="#" className="text-green-600 hover:scale-110 transition">
            <FaWhatsapp size={36} />
          </a>

          <a
            href="https://www.linkedin.com/in/ruthveek-gourishetty-435154264/"
            className="text-blue-700 hover:scale-110 transition"
          >
            <FaLinkedin size={36} />
          </a>

          <a href="https://github.com/Grshetty" className="text-gray-900 hover:scale-110 transition">
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
