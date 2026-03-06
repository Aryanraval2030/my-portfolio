import React from "react";

function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"];
  const tools = ["Git", "GitHub", "Vercel"];

  return (
    <div className="pt-[15vh]">
      <h1 className="mb-[5rem] text-4xl text-[#64ffda] text-center ">
        my skills
      </h1>

      <div className="relative py-20 px-4 max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 bg-[#a371f7] h-full -translate-x-1/2"></div>

        {skills.map((skill, index) => (
          <div key={skill} className="flex w-full mb-20 relative">
            {/* Left side */}
            <div
              className={`w-1/2 flex ${
                index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
              }`}
            >
              {index % 2 === 0 && (
                <div className="bg-[#1f2937] px-6 py-4 rounded shadow w-40 text-center">
                  {skill}
                </div>
              )}
            </div>

            {/* Dot */}
            <div className="w-0.5 relative flex justify-center">
              <div className="w-4 h-4 bg-[#10b981] rounded-full absolute top-0 -translate-y-1/2"></div>
            </div>

            {/* Right side */}
            <div
              className={`w-1/2 flex ${
                index % 2 !== 0 ? "justify-start pl-8" : "justify-end pr-8"
              }`}
            >
              {index % 2 !== 0 && (
                <div className="bg-[#1f2937] px-6 py-4 rounded shadow w-40 text-center">
                  {skill}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="py-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Tools & Platforms</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {tools.map((tool) => (
            <div key={tool} className="bg-[#1f2937] px-4 py-2 rounded shadow">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
