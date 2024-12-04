import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaDatabase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-[#F5F7FA] to-[#B8C6DB]">
      {/* Banner Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-left max-w-md">
          <h1 className="text-6xl font-extrabold text-[#2A2A2A] leading-tight hover:text-[#2A2A2A] transition-all duration-300">
            Welcome to My Portfolio
          </h1>
          <p className="mt-6 text-xl text-[#2A2A2A] hover:text-[#2A2A2A] transition-all duration-300">
            Hi,I am Vishal Arya i am a Full-Stack Developer creating beautiful, functional websites that make an impact.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block px-6 py-4 bg-[#333333] text-[#F5F7FA] rounded-lg text-lg font-medium shadow-lg hover:bg-[#111111] transition duration-300"
          >
            View Projects
          </a>
        </div>
        <img
          src="src/assets/images/Myself.jpeg"
          alt="Coding illustration"
          className="w-1/2 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      {/* Skills Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-[#2A2A2A]">Skills</h2>
        <p className="mt-4 text-[#2A2A2A]">Technologies I work with:</p>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <SkillCard icon={<FaHtml5 />} skill="HTML5" />
          <SkillCard icon={<FaCss3Alt />} skill="CSS3" />
          <SkillCard icon={<FaJsSquare />} skill="JavaScript" />
          <SkillCard icon={<FaReact />} skill="React" />
          <SkillCard icon={<FaPhp />} skill="PHP" />
          <SkillCard icon={<FaDatabase />} skill="Databases" />
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="projects" className="mt-16">
        <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">Featured Projects</h2>
        <p className="mt-4 text-center text-[#2A2A2A]">A few projects I've worked on recently:</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title="E-Commerce Platform"
            description="A fully functional e-commerce platform with user authentication and payment integration."
            technologies={["React", "Node.js", "MongoDB"]}
            link="https://www.yourprojectlink.com"
          />
          <ProjectCard
            title="Personal Portfolio"
            description="A sleek and modern portfolio website showcasing my skills and projects."
            technologies={["React", "Tailwind CSS"]}
            link="https://www.yourportfolio.com"
          />
          <ProjectCard
            title="Task Manager"
            description="A task management app with features like task creation, assignment, and due dates."
            technologies={["PHP", "MySQL"]}
            link="https://www.yourprojectlink.com"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">Experience</h2>
        <div className="mt-8 space-y-8">
          <ExperienceCard
            role="Full-Stack Developer"
            company="Tech Solutions Inc."
            duration="Jan 2023 - Present"
            description="Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver customer-facing solutions."
          />
          <ExperienceCard
            role="Web Developer"
            company="Creative Labs"
            duration="Jun 2021 - Dec 2022"
            description="Worked on various front-end and back-end tasks for client websites. Implemented responsive designs using HTML, CSS, and JavaScript."
          />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mt-16 bg-gradient-to-br from-[#F5F7FA] to-[#B8C6DB] p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">Certifications</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CertificationCard
            title="Certified React Developer"
            institution="React Academy"
            year="2023"
            description="Comprehensive course covering the fundamentals of React and advanced concepts such as hooks, context, and routing."
          />
          <CertificationCard
            title="Full-Stack Web Development"
            institution="Tech University"
            year="2022"
            description="A full-stack web development course with hands-on experience building applications using Node.js, React, and MySQL."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 bg-gradient-to-br from-[#F5F7FA] to-[#B8C6DB] p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">What People Say</h2>
        <div className="mt-8 flex gap-8 justify-center">
          <TestimonialCard
            name="John Doe"
            feedback="Fantastic work! Delivered beyond expectations."
          />
          <TestimonialCard
            name="Jane Smith"
            feedback="Highly recommend for any web development needs."
          />
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="mt-16 bg-gradient-to-br from-[#F5F7FA] to-[#B8C6DB] p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#2A2A2A] text-center">Get In Touch</h2>
        <p className="mt-4 text-center text-[#2A2A2A]">
          Feel free to reach out for collaboration, inquiries, or just a friendly chat!
        </p>
        <div className="mt-8 text-center">
          <p className="text-lg text-[#2A2A2A]">Email: <a href="mailto:your.email@example.com" className="text-blue-400">your.email@example.com</a></p>
          <p className="mt-4 text-lg text-[#2A2A2A]">Phone: +1 234 567 890</p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="px-8 py-4 bg-[#333333] text-[#F5F7FA] rounded-lg text-lg font-medium shadow-lg hover:bg-[#111111] transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ icon, skill }) => (
  <div className="flex flex-col items-center p-6 bg-[#F5F7FA] shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
    <div className="text-5xl text-[#2A2A2A]">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-[#2A2A2A]">{skill}</h3>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, feedback }) => (
  <div className="p-6 bg-[#F5F7FA] shadow-lg rounded-lg max-w-md hover:shadow-xl transition">
    <p className="text-[#2A2A2A] italic">"{feedback}"</p>
    <h3 className="mt-4 text-lg font-bold text-[#2A2A2A]">{name}</h3>
  </div>
);

// Project Card Component
const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="p-6 bg-[#F5F7FA] shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
    <h3 className="text-xl font-bold text-[#2A2A2A]">{title}</h3>
    <p className="mt-2 text-[#2A2A2A]">{description}</p>
    <div className="mt-4 text-sm text-[#2A2A2A]">
      <strong>Technologies: </strong>{technologies.join(", ")}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block px-6 py-2 bg-[#444444] text-[#F5F7FA] rounded-lg text-lg hover:bg-[#333333] transition duration-300"
    >
      View Project
    </a>
  </div>
);

// Experience Card Component
const ExperienceCard = ({ role, company, duration, description }) => (
  <div className="p-6 bg-[#F5F7FA] shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
    <h3 className="text-xl font-bold text-[#2A2A2A]">{role}</h3>
    <p className="mt-2 text-[#2A2A2A] italic">{company}</p>
    <p className="mt-2 text-sm text-[#2A2A2A]">{duration}</p>
    <p className="mt-4 text-[#2A2A2A]">{description}</p>
  </div>
);

// Certification Card Component
const CertificationCard = ({ title, institution, year, description }) => (
  <div className="p-6 bg-[#F5F7FA] shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
    <h3 className="text-xl font-bold text-[#2A2A2A]">{title}</h3>
    <p className="mt-2 text-[#2A2A2A] italic">{institution} - {year}</p>
    <p className="mt-4 text-[#2A2A2A]">{description}</p>
  </div>
);

export default Home;