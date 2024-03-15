import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../clientSection/ClientSlick.css";

const ClientSlick = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="client_sclk">
        <Slider {...setting}>
          <div className="photo">
            <div className="card">
              <div className="profileW ">
                <img
                  className="profile text-center"
                  src="images/client.png"
                  alt=""
                />
              </div>
              <div className="card-detail pt-5">
                <h5 className="card-tittle text-center">Plio Dorak</h5>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum
                </p>
                <div className="text-center d-inline-block">
                  <img src="images/quote.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="photo">
            <div className="card">
              <div className="profileW ">
                <img
                  className="profile text-center"
                  src="images/client.png"
                  alt=""
                />
              </div>
              <div className="card-detail pt-5">
                <h5 className="card-tittle text-center">Plio Dorak</h5>
                <p className="card-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum
                </p>
                <div className="text-center d-inline-block">
                  <img src="images/quote.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientSlick;
