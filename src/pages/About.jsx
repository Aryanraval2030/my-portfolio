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

            Hi! I'm Aryan, a passionate Frontend Developer from Ahmedabad. I
            love building clean and{" "}

            <span className="text-[#64ffda]">interactive websites</span> using
            React.js, <span className="text-[#64ffda]">TailwindCSS</span>, and
            modern web technologies.

            I have{" "}
            <span className="text-[#64ffda]">experience working</span> on
            projects ranging from personal portfolios to small web applications.

            I enjoy turning complex problems into simple, beautiful, and{" "}

            <span className="text-[#64ffda]">
              user-friendly interfaces
            </span>.

            When I'm not coding, I like exploring new technologies,
            <span className="text-[#64ffda]"> designing UI/UX</span>, and
            learning new things every day.

            I am always excited to collaborate and contribute to{" "}

            <span className="text-[#64ffda]">
              meaningful projects
            </span>.

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