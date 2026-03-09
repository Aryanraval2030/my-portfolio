import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={100} className="text-blue-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={100} className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill size={100} className="text-blue-500" />,
    },
    {
      name: "React.js",
      icon: <FaReact size={100} className="text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={100} className="text-blue-500" />,
    },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt size={100} className="text-blue-500" /> },
    { name: "GitHub", icon: <FaGithubSquare size={100} className="text-blue-500" /> },
    { name: "Vercel", icon: <IoLogoVercel size={100} className="text-blue-500" /> },
  ];

  return (
    <div className="pt-[15vh]">
      <h1 className="mb-[5rem] text-4xl text-[#64ffda] text-center ">
        my skills
      </h1>

      <div className="py-6 text-center text-xl">
        <div className="flex gap-7 flex-wrap justify-center  ">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#1f2937] flex flex-col items-center px-6 py-3 rounded shadow"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="py-6 text-center text-xl">
        <h2 className="text-3xl font-bold mb-[7vh]">Tools & Platforms</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {tools.map((tool) => (
            <div
              key={tool}
              className="bg-[#1f2937] flex flex-col items-center px-6 py-3 rounded shadow"
            >
              {tool.icon}
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
