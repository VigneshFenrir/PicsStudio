import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // fade: true,
  };
  return (
    <>
      <div id="slick" className=" row bg-black text-white mt-5 slickk">
        <Slider {...settings}>
          <div className="col-lg-6">
            <h1 className="picstudio">
              pic <span>studio</span>
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              hic laboriosam cumque odit architecto maiores veritatis dolorum
              distinctio dolores suscipit.
            </p>
            <div>
              <a className="btn btn-warning" href="">
                request a quote
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="picstudio">
              pic <span>studio</span>
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              hic laboriosam cumque odit architecto maiores veritatis dolorum
              distinctio dolores suscipit.
            </p>
            <div>
              <a className="btn btn-warning" href="">
                request a quote
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="picstudio">
              pic <span>studio</span>
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              hic laboriosam cumque odit architecto maiores veritatis dolorum
              distinctio dolores suscipit.
            </p>
            <div>
              <a className="btn btn-warning" href="">
                request a quote
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default slick;
