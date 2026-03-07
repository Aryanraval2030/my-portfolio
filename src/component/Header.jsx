import Navbar from "./Navbar";
function Header() {
  return (
    <header className="bg-[#161b22]/30 backdrop-blur-md flex justify-between px-6 items-center md:h-[14vh] h-[13vh] fixed top-0 w-full z-20 text-xl text-[#58a6ff]">
      {/* Logo */}
      <div>
        <h1 className="text-[26px]">AR</h1>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}

export default Header;
