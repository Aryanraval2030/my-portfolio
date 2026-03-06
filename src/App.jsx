import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import CursorDot from "./component/CursorDot";

function App() {
  return (
    <>
      <div className="tracking-[1px] bg-[#0d1117] min-h-screen text-white">
        <BrowserRouter>
          <CursorDot />
          <Header />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
