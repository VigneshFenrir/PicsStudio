import Lbox from "../box/Lbox";
import "../clientSection/clientSection.css";
import ClientSlick from "./ClientSlick";

const ClientSection = () => {
  return (
    <>
      <section className="client">
        <div className="container">
          <div className="row">
            <Lbox
              tittle={"What Says Customer"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page"
              }
              tag={"Readmore"}
            />
          </div>
        </div>
        <div className="client-container">
          <div className="client-bg">
            <img src="images/gallery-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="client-box">
              <div className="row client-row ">
                <div className="col-m-6 Cslick">
                  <ClientSlick />
                </div>
                <div className="col-m-6 Cslick position-relative">
                  <div className="camera-imgBox">
                    <img src="images/camera.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSection;
