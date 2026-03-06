import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex gap-[2rem] items-center">
        <Link to="/" className="px-2 w-[100px] transition-all hover:tracking-[2px] flex justify-center items-center">
          Home
        </Link>
        <Link to="/about" className="px-2 w-[100px] transition-all hover:tracking-[2px] flex justify-center items-center">
          about
        </Link>
        <Link to="/skills" className="px-2 w-[100px] transition-all hover:tracking-[2px] flex justify-center items-center">
          skills
        </Link>
        <Link to="/projects" className="px-2 w-[100px] transition-all hover:tracking-[2px] flex justify-center items-center">
          projects
        </Link>
        <Link to="/contact" className="px-2 w-[100px] transition-all hover:tracking-[2px] flex justify-center items-center">
          contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
