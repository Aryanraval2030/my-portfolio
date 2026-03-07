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
        <div className="absolute  h-[100vh] inset-0 ">
          <Particles    particleColors={["#8892b0"]}   particleHoverFactor={2} moveParticlesOnHover={true}  />
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
