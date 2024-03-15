import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Blogs from "./components/blogs/Blogs";
import ClientSection from "./components/clientSection/ClientSection";
import Info from "./components/infosection/Info";
import Footer from "./components/footer/Footer";
import "./components/box/box.css";

// import Boxsection from "./components/Boxsection";

const App = () => {
  useEffect(() => {
    document.title = "Vignesh React Project";
  }, []);
  return (
    <>
      <div className="app">
        <Header />
        <About />
        <Gallery />
        <Blogs />
        <ClientSection />
        <Info />
        <Footer />
      </div>
    </>
  );
};

export default App;

{
  /* <div className="row bg-primary">
        <Boxsection
          tittle={"karana karana kabalam"}
          image={"images/gallery-3.jpg"}
          para={"iniki setha naliki paal"}
          button={"kumuku"}
        />
        <Boxsection
          tittle={"karana karana kabalam"}
          image={"images/gallery-3.jpg"}
          para={"iniki setha naliki paal"}
          button={"kumuku"}
        />
        <Boxsection
          tittle={"karana karana kabalam"}
          image={"images/gallery-3.jpg"}
          para={"iniki setha naliki paal"}
          button={"kumuku"}
        />
        <Boxsection
          tittle={"karana karana kabalam"}
          image={"images/gallery-3.jpg"}
          para={"iniki setha naliki paal"}
          button={"kumuku"}
        />
      </div> */
}
