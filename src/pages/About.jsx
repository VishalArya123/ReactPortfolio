import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";
import { AiOutlineTeam, AiOutlineDatabase } from "react-icons/ai";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#E0F7FA] to-[#FFF8E1] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-black hover:text-blue-600 transition-all duration-300">
          About Me
        </h1>
        <p className="mt-6 text-xl text-black text-center hover:text-gray-500 transition-all duration-300">
          I’m a dedicated Full-Stack Developer from Hyderabad with a passion for
          crafting dynamic, user-friendly web solutions. My journey in
          development began with an interest in problem-solving and has evolved
          into a commitment to delivering innovative, high-quality digital
          experiences.
        </p>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-black hover:text-blue-600 transition-all duration-300">
            My Skills
          </h2>
          <p className="mt-4 text-black text-center">
            A blend of front-end creativity and back-end logic, here are the
            tools I use to bring ideas to life:
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            <SkillCard icon={<FaHtml5 />} skill="HTML5" />
            <SkillCard icon={<FaCss3Alt />} skill="CSS3" />
            <SkillCard icon={<FaJsSquare />} skill="JavaScript" />
            <SkillCard icon={<FaReact />} skill="React & Vite" />
            <SkillCard icon={<FaPhp />} skill="PHP" />
            <SkillCard icon={<AiOutlineDatabase />} skill="MySQL & MongoDB" />
            <SkillCard icon={<FaNodeJs />} skill="Node.js" />
            <SkillCard icon={<FaGitAlt />} skill="Git & GitHub" />
            <SkillCard icon={<FaProjectDiagram />} skill="Project Management" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-black hover:text-blue-600 transition-all duration-300">
            Experience
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <ExperienceCard
              title="Tourist Guide Website"
              company="Personal Project"
              duration="2023"
              description="Developed a comprehensive tourist guide platform for visitors to Hyderabad, integrating user-friendly features and interactive content."
            />
            <ExperienceCard
              title="Portfolio Website"
              company="Personal Project"
              duration="2023"
              description="Designed and developed a portfolio showcasing my projects and skills using React, Vite, and Tailwind CSS."
            />
            <ExperienceCard
              title="E-Commerce Platform"
              company="Freelance Project"
              duration="2022"
              description="Built a fully functional e-commerce site with payment integration and user authentication."
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-black hover:text-blue-600 transition-all duration-300">
            Education
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <EducationCard
              title="10th Grade"
              institution="Pallavi Model School, Bowenpally, Hyderabad"
              year="Graduated: 2017"
              grade="90%"
            />
            <EducationCard
              title="12th Grade"
              institution="Trividya Junior College, Suchitra, Hyderabad"
              year="Graduated: 2019"
              grade="95.4%"
            />
            <EducationCard
              title="Undergraduate"
              institution="Sreenidhi Institute of Science and Technology, Ghatkesar, Hyderabad"
              year="Current"
              grade="CGPA: 8.9"
            />
          </div>
        </section>

        {/* Personal Values Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-black hover:text-blue-600 transition-all duration-300">
            What Drives Me
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard
              icon={<FaLightbulb />}
              title="Innovation"
              description="I thrive on bringing fresh ideas to the table and finding creative solutions to complex challenges."
            />
            <ValueCard
              icon={<AiOutlineTeam />}
              title="Collaboration"
              description="I believe in the power of teamwork and love working with others to achieve shared goals."
            />
            <ValueCard
              icon={<FaReact />}
              title="Continuous Learning"
              description="Staying updated with the latest technologies is key to my growth and success as a developer."
            />
          </div>
        </section>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ icon, skill }) => (
  <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300 border border-gray-300">
    <div className="text-5xl text-black">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-black">{skill}</h3>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ title, company, duration, description }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300 border border-gray-300">
    <h3 className="text-2xl font-bold text-black">{title}</h3>
    <p className="mt-1 text-black font-medium">
      {company} | {duration}
    </p>
    <p className="mt-4 text-black">{description}</p>
  </div>
);

// Education Card Component
const EducationCard = ({ title, institution, year, grade }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300 border border-gray-300">
    <h3 className="text-2xl font-bold text-black">{title}</h3>
    <p className="mt-2 text-black">{institution}</p>
    <p className="mt-2 text-black font-medium">{year}</p>
    <p className="mt-2 text-black font-semibold">{grade}</p>
  </div>
);

// Value Card Component
const ValueCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300 border border-gray-300">
    <div className="text-5xl text-black">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-black">{title}</h3>
    <p className="mt-2 text-black text-center">{description}</p>
  </div>
);

export default About;
