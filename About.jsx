import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-800 flex items-center px-6 py-16"
    >
      <div className="container mx-auto max-w-4xl">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-10 border-b-4 border-gray-200 pb-3">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I am a <span className="font-semibold">Frontend React Developer</span> 
            focused on building high-quality, responsive, and visually appealing web applications.
            My passion lies in transforming ideas into smooth, functional, and 
            user-friendly digital experiences.
          </p>

          <p>
            I specialize in modern web technologies such as{" "}
            <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
            <strong>React</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Bootstrap</strong>. With a strong attention to detail, I aim to
            create interfaces that are both elegant and efficient.
          </p>

          <p>
            I consistently stay updated with emerging tools, UI/UX trends, and
            development practices to ensure the solutions I build are scalable,
            maintainable, and optimized for performance. My goal is to make a
            meaningful impact through clean code, thoughtful design, and a deep
            understanding of user needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
