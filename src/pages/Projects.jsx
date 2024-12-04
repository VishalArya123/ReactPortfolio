const projects = [
  {
    name: "E-Commerce Platform",
    description: "A fully functional e-commerce site with payment integration and user authentication.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/300", // Replace with actual project images
    link: "https://www.example.com/e-commerce",
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://via.placeholder.com/300",
    link: "https://www.example.com/portfolio",
  },
  {
    name: "Task Management App",
    description: "A web-based task management app with real-time collaboration features.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    image: "https://via.placeholder.com/300",
    link: "https://www.example.com/task-manager",
  },
  {
    name: "Blog Platform",
    description: "A content management system for creating and managing blogs.",
    techStack: ["React", "Firebase"],
    image: "https://via.placeholder.com/300",
    link: "https://www.example.com/blog-platform",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#E0F7FA] to-[#FFF8E1] min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-center text-black mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-56 object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black hover:text-blue-600 transition-all duration-300">
        {project.name}
      </h2>
      <p className="mt-2 text-gray-700 hover:text-gray-500 transition-all duration-300">
        {project.description}
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Tech Stack:</h3>
        <ul className="flex gap-2 mt-2">
          {project.techStack.map((tech, idx) => (
            <li
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-6">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-black text-white rounded-lg text-lg font-medium shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
      >
        View Website
      </a>
    </div>
  </div>
);

export default Projects;
