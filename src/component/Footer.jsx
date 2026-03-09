import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosMailUnread } from "react-icons/io";
function Footer() {
  return (
    <footer className="bg-[#161b22] text-center py-8 mt-20">
      <h2 className="text-xl font-bold text-[#1072fc]">Aryan Raval</h2>

      <div className="flex justify-center gap-6 mt-4 text-xl">
        <a
          href="https://github.com/Aryanraval2030"
          target="_blank"
          rel="noopener noreferrer"
          className=" left-[25%] top-[30%] z-50"
        >
          <div className="border-2 h-[45px] w-[45px] p-2 rounded-full flex items-center justify-center cursor-pointer hover:text-[#58a6ff] transition-all duration-300">
            <FiGithub className="h-full w-full" />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aryan-raval-0205b7373/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 h-[45px] w-[45px]  p-2 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-600 transition duration-300 "
        >
          <FaLinkedinIn className="h-full w-full" />
        </a>

        {/* Email */}
        <a
          href="aryanraval1432@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 h-[45px] w-[45px]  p-2 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-600 transition duration-300 "
        >
          <IoIosMailUnread className="h-full w-full" />
        </a>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        © 2026 Aryan Raval. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
