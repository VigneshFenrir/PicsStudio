import "./info.css";
const Info = () => {
  return (
    <>
      <section className="info-section">
        <div className="info-container">
          <div className="container contacts">
            <div className="heading">
              <h2 className="text-white">Contact Us</h2>
            </div>
            <div className="info-main">
              <div className="row">
                <div className="col-lg-3">
                  <div className="contactInfo">
                    <a href="" className="d-flex">
                      <div className="imgBox">
                        <img src="images/location.png" alt="" />
                      </div>
                      <div className="detail">location</div>
                    </a>
                    <a href="" className="d-flex">
                      <div className="imgBox">
                        <img src="images/mail.png" alt="" />
                      </div>
                      <div className="detail">vignesh2vicky007@gmail.com</div>
                    </a>
                    <a href="" className="d-flex">
                      <div className="imgBox">
                        <img src="images/call.png" alt="" />
                      </div>
                      <div className="detail">Call +01 1234567890</div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="links">
                    <ul className="">
                      <li>
                        <a href="">home</a>
                      </li>
                      <li>
                        <a href="">about</a>
                      </li>
                      <li>
                        <a href="">gallery</a>
                      </li>
                      <li>
                        <a href="">blog</a>
                      </li>
                      <li>
                        <a href="">testimonal</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="social-media d-flex">
                    <a className="facebook" href=" ">
                      <img src="images/facebook.png" alt="" />
                    </a>
                    <a className="insta" href=" ">
                      <img src="images/instagram.png" alt="" />
                    </a>
                    <a className="in" href=" ">
                      <img src="images/linkedin.png" alt="" />
                    </a>
                    <a className="ytube" href=" ">
                      <img src="images/youtube.png" alt="" />
                    </a>
                    <a className="twitter" href=" ">
                      <img src="images/twitter.png" alt="" />
                    </a>
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

export default Info;
