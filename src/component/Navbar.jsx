import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      <ul className="hidden md:flex gap-[2rem] items-center">
        <Link to="/" className="hover:text-[#1072fc] text-[#1072fc] font-semibold relative group">Home
        <span className="absolute left-0 -bottom-1 h-[0.5px] bg-[#1072fc] transition-all duration-300 w-0 group-hover:w-full"></span></Link>
        <Link to="/about" className="hover:text-[#1072fc] text-[#1072fc] font-semibold relative group">About
                <span className="absolute left-0 -bottom-1 h-[0.5px] bg-[#1072fc] transition-all duration-300 w-0 group-hover:w-full"></span>
        </Link>
        <Link to="/skills" className="hover:text-[#1072fc] text-[#1072fc] font-semibold relative group">Skills
                <span className="absolute left-0 -bottom-1 h-[0.5px] bg-[#1072fc] transition-all duration-300 w-0 group-hover:w-full"></span></Link>
        <Link to="/projects" className="hover:text-[#1072fc] text-[#1072fc] font-semibold relative group">Projects
                <span className="absolute left-0 -bottom-1 h-[0.5px] bg-[#1072fc] transition-all duration-300 w-0 group-hover:w-full"></span></Link>
        <Link to="/contact" className="hover:text-[#1072fc] text-[#1072fc] font-semibold relative group">Contact
                <span className="absolute left-0 -bottom-1 h-[0.5px] bg-[#1072fc] transition-all duration-300 w-0 group-hover:w-full"></span></Link>
      </ul>

      <div className="md:hidden text-2xl cursor-pointer">
        {menuOpen ? (
          <FaTimes onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-[#161b22] flex flex-col items-center gap-6 py-8 md:hidden">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;