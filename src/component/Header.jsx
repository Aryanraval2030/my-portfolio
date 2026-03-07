import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-[#161b22] h-[14vh] bg-[#161b22]/30 backdrop-blur-md flex justify-center gap-[40rem] z-10 text-xl items-center text-[#58a6ff] fixed top-0 w-[100%]">
      <div>
        <h1 className="text-[26px]">AR</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
