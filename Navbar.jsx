import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 px-14 py-5 flex items-center justify-between shadow-sm z-50">

      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-tight text-gray-900 select-none">
        Ruthveek Gourishetty
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        {menu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-all relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* Right CTA button */}
      <button className="hidden md:block px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition">
        Resume
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl text-gray-900"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-8 flex flex-col items-center space-y-6 md:hidden">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-black"
            >
              {item.name}
            </a>
          ))}

          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
