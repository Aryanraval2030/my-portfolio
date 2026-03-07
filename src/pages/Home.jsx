import { Typewriter } from "react-simple-typewriter";
import { ArrowBigDown } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosMailUnread } from "react-icons/io";

function Home() {
  return (
    <>
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-5 md:px-7 pt-[20vh] text-center">
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

        <div className="text-center">
          <p className="pt-5 text-[#58a6ff] text-base sm:text-lg md:text-xl">
         I build modern and responsive web applications <br />
using HTML, CSS, JavaScript and React.
          </p>
          <div className="flex  justify-center gap-8 mt-3">
            <span className="inline-block p-2 rounded-full text-3xl border-2 border-[#112240]">
              <FiGithub />
            </span>
            <span className="inline-block p-2 rounded-full text-3xl border-2 border-[#112240]">
              <FaLinkedinIn />
            </span>
            <span className="inline-block p-2 rounded-full text-3xl border-2 border-[#112240]">
              <IoIosMailUnread />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[10vh] md:mt-[18vh] flex justify-center w-full">
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
