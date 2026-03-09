import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={100} className="text-blue-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={100} className="text-blue-500" /> },
    { name: "JavaScript", icon: <RiJavascriptFill size={100} className="text-blue-500" /> },
    { name: "React.js", icon: <FaReact size={100} className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={100} className="text-blue-500" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt size={100} className="text-blue-500" /> },
    { name: "GitHub", icon: <FaGithubSquare size={100} className="text-blue-500" /> },
    { name: "Vercel", icon: <IoLogoVercel size={100} className="text-blue-500" /> },
  ];

  return (
    <div className="pt-[15vh]">
      <h1 className="mb-[5rem] text-4xl text-[#64ffda] text-center">
        my skills
      </h1>

      <div className="py-6 text-center text-xl">
        <div className="flex gap-7 flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1f2937] flex flex-col items-center px-6 py-3 rounded shadow"
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-6 text-center text-xl">
        <h2 className="text-3xl font-bold mb-[7vh]">Tools & Platforms</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1f2937] flex flex-col items-center px-6 py-3 rounded shadow"
            >
              {tool.icon}
              {tool.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;