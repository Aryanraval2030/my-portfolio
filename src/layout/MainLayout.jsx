import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CursorDot from "../components/CursorDot";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-white tracking-[1px]">
      <CursorDot />
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Current page content */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;