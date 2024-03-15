import Box from "../box/Box";

import "./About.css";

const About = () => {
  return (
    <>
      <section className=" bg-black about">
        <div className="container">
          <div className="row ms-5 ">
            <Box
              tittle={"About Studio"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page"
              }
              tag={"Read More"}
            />
          </div>
        </div>
        <div className="aboutStudio">
          <div className="play bg-warning">
            <img src="images/play.png" alt="" />
          </div>

          <img src="images/about-img.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
