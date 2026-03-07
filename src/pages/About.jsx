function About() {
  return (
    <div className="pt-[15vh] px-5 md:px-7">
      <h1 className="mb-[4rem] md:mb-[5rem] text-3xl md:text-4xl text-[#64ffda] text-center">
        about me
      </h1>

      <div className="md:text-center flex flex-col md:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="md:w-[70%]">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#a371f7] mb-4 tracking-wider leading-7 md:leading-9 text-center md:text-left">
            I’m <span className="text-[#64ffda]">Aryan Raval</span>, a
            passionate{" "}
            <span className="text-[#64ffda]">Frontend Developer</span> currently
            learning{" "}
            <span className="text-[#64ffda]">Full Stack Development</span>. I
            enjoy creating <span className="text-[#64ffda]">responsive</span>{" "}
            and{" "}
            <span className="text-[#64ffda]">modern web interfaces</span> and
            turning ideas into{" "}
            <span className="text-[#64ffda]">real web experiences</span>.
            Currently I’m improving my skills in{" "}
            <span className="text-[#64ffda]">React</span> and
            <span className="text-[#64ffda]">Modern JavaScript</span> while
            pursuing a{" "}
            <span className="text-[#64ffda]">
              Full Stack Development Course
            </span>{" "}
            and preparing for my <span className="text-[#64ffda]">BCA</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-[30%] flex justify-center md:justify-end">
          <img
            src="https://www.shutterstock.com/image-photo/vector-illustration-satoru-gojo-isolated-260nw-2584592123.jpg"
            alt="profile"
            className="w-[200px] sm:w-[250px] md:w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
