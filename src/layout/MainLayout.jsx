import Footer from "../component/Footer";
import Header from "../component/Header";

function Mainlayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Mainlayout;