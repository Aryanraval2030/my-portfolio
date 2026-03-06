import { Typewriter } from "react-simple-typewriter";
import { ArrowBigDown } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="h-[70vh] flex flex-col justify-center items-center px-7 pt-[12vh]">
        <h1 className="font-serif text-5xl leading-[5rem] text-[#ccd6f6]">
          hello, i'm Aryan raval
        </h1>
        <h1 className="font-serif text-5xl text-[#64ffda] leading-[5rem]">
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
          <p className="pt-5 text-[#58a6ff] text-xl">
            I build interactive and responsive web applications
          </p>
          <p className="text-[#58a6ff] text-xl">
            I design and develop modern websites
          </p>
        </div>
      </div>
      <div className="mt-[18vh] flex justify-center w-[100%]">
        <ArrowBigDown
          className="h-[9rem] w-[9rem] text-[#a371f7] animate-bounce"
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





