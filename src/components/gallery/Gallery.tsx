import Lbox from "../box/Lbox";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      {/* section 2 starts */}
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <Lbox
              tittle={"Our Gallery"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page"
              }
              tag={"See More"}
            />
          </div>
        </div>

        <div className="position-relative">
          <div className="gallery-container ">
            <div className="gallery-bg ">
              <img src="images/gallery-bg.png" alt="" />
            </div>
          </div>

          <div className="gallery-content ">
            <div className="box b1">
              <div className="imgbox">
                <img src="images/gallery-1.jpg" alt="" />
              </div>
            </div>
            <div className="box d-flex b2">
              <div className="imgbox">
                <img src="images/gallery-2.jpg" alt="" />
              </div>
              <div className="imgbox">
                <img src="images/gallery-3.jpg" alt="" />
              </div>
            </div>
            <div className="box d-flex b3">
              <div className="imgbox">
                <img src="images/gallery-4.jpg" alt="" />
              </div>
              <div className="imgbox">
                <img src="images/gallery-5.jpg" alt="" />
              </div>
            </div>
            <div className="box b4">
              <div className="imgbox">
                <img src="images/gallery-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gallery section ends */}
    </>
  );
};

export default Gallery;
