import Footer from "../component/Footer";
import Header from "../component/Header";

function Mainlayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Mainlayout;