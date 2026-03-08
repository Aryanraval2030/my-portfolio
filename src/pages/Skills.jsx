import React from "react";

function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"];
  const tools = ["Git", "GitHub", "Vercel"];

  return (
    <div className="pt-[15vh]">
      <h1 className="mb-[5rem] text-4xl text-[#64ffda] text-center ">
        my skills
      </h1>

      <div className="py-6 text-center">
        <div className="flex gap-4 flex-wrap justify-center">
          {skills.map((skill) => (
            <div key={skill} className="bg-[#1f2937] px-4 py-2 rounded shadow">
              {skill}
            </div>
          ))}
        </div>
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

// <div className="bg-[#1f2937] px-6 py-4 rounded shadow w-40 text-center">
//   {skill}
// </div>;
