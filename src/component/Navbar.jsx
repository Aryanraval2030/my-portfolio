import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex gap-[2rem]">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/skills">skills</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
