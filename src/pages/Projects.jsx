import Card from "../component/Card";

function Projects() {
  return (
    <div className="pt-[15vh] px-5 md:px-7">

      <h1 className="mb-[4rem] md:mb-[5rem] text-3xl md:text-4xl text-[#64ffda] text-center">
        projects
      </h1>

      <Card />

      <div className="mt-9">
        <Card />
      </div>

    </div>
  );
}

export default Projects;