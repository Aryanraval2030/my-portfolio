import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl text-[#64ffda]">Skills</h1>
    </motion.div>
  );
}

export default Skills;