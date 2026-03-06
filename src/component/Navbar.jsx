import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex gap-[2rem]">
        <Link to="/" className="border-2 px-2 hover:tracking-[11px]">Home</Link>
        <Link to="/about" className="border-2 px-2">about</Link>
        <Link to="/skills" className="border-2 px-2">skills</Link>
        <Link to="/projects" className="border-2 px-2">projects</Link>
        <Link to="/contact" className="border-2 px-2">contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
