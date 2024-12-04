import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#E0F7FA] to-[#FFF8E1] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Feel free to reach out to discuss projects, opportunities, or just to say hi!
        </p>

        {/* Contact Form and Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white shadow-xl rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium shadow-md hover:bg-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
              <p className="text-gray-700 text-lg">+123 456 7890</p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-blue-500 text-2xl mr-4" />
              <p className="text-gray-700 text-lg">youremail@example.com</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-3xl hover:text-blue-400 transition-all duration-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-3xl hover:text-gray-600 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
