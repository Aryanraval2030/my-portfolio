import { Typewriter } from "react-simple-typewriter";
import { ArrowBigDown } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosMailUnread } from "react-icons/io";
import Particles from "../Particles";

function Home() {
  return (
    <>
      <div className="relative min-h-[85vh] overflow-hidden flex flex-col justify-center items-center px-5 md:px-7 md:pt-[20vh] pt-[15vh] text-center">
        {/* Background */}
        <a
          href="https://github.com/Aryanraval2030"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[25%] top-[30%] z-50"
        >
          <div className="border-2 h-[45px] w-[45px] md:h-[60px] md:w-[60px] p-3 rounded-full flex items-center justify-center animate-bounce cursor-pointer hover:text-[#58a6ff] transition-all duration-300">
            <FiGithub className="h-full w-full" />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aryan-raval-0205b7373/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 h-[45px] w-[45px] md:h-[60px] md:w-[60px] animate-bounce absolute right-[23%] top-[30%] p-3 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-600 transition duration-300 z-50"
        >
          <FaLinkedinIn className="h-full w-full" />
        </a>

        {/* Email */}
        <a
          href="aryanraval1432@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 h-[45px] w-[45px] md:h-[60px] md:w-[60px] animate-bounce absolute right-[43%] top-[24%] md:right-[45%] md:top-[20%] p-3 rounded-full flex items-center justify-center cursor-pointer hover:text-[#e6edf3] transition duration-300 z-50"
        >
          <IoIosMailUnread className="h-full w-full" />
        </a>

        <div className="absolute  h-[100vh] inset-0 ">
          <Particles
            particleColors={["#8892b0"]}
            particleHoverFactor={2}
            moveParticlesOnHover={true}
          />
        </div>
        {/* Hero Content */}
        <div className="relative ">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[3rem] md:leading-[5rem] text-[#ccd6f6]">
            hello, i'm Aryan raval
          </h1>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#64ffda] leading-[3rem] md:leading-[5rem]">
            I am a{" "}
            <span className="text-transparent [-webkit-text-stroke:0.7px_#64ffda]">
              <Typewriter
                words={[
                  "front-end developer",
                  "back-end developer",
                  "freelancer",
                  "coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
      </div>
      {/* buttons*/}
      <div className="flex justify-center md:gap-[10rem] gap-[10px] bg-transparent">
        <button className="border-2 md:text-2xl text-sm font-serif py-3 px-4 rounded-lg bg-[#112240] text-[#58a6ff] backdrop-blur-[10px] relative border-emerald-500 font-semibold group overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-emerald-500 scale-0 origin-top-left group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>

          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            view projects
          </span>
        </button>

        <button className="border-2 md:text-2xl text-sm font-serif py-3 px-4 rounded-lg bg-[#112240] text-[#58a6ff] backdrop-blur-[10px] relative border-emerald-500 font-semibold group overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-emerald-500 scale-0 origin-top-left group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>

          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Download Resume
          </span>
        </button>
      </div>

      <div className="mt-[5vh] md:mt-[18vh] flex justify-center w-full">
        <ArrowBigDown
          className="h-[5rem] w-[5rem] md:h-[9rem] md:w-[9rem] text-[#a371f7] animate-bounce"
          fill="currentColor"
        />
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
