import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
