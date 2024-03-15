import Navbar from "./Navbar";
import Slick from "./Slick";
import "./header.css";

const Header = () => {
  return (
    <>
      {/* header section starts */}
      <div className="section">
        <Navbar />
      </div>
      {/* header section ends */}
      {/* slider section starts */}
      <section className="slider-section position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <Slick />
            </div>
            <div className="col-lg-8 px-0">
              <div className="img-box">
                <img src={"images/slider-img.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slider section starts */}
    </>
  );
};

export default Header;
