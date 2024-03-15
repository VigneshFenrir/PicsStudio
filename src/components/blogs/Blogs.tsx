import Box from "../box/Box";
import "../blogs/blogs.css";

const Blogs = () => {
  return (
    <>
      {/* blog section starts */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Box
              tittle={"Latest Blog"}
              text={
                "It is a long established fact that a reader will be distracted by the readable content of a page"
              }
              tag={"Read More"}
            />
          </div>
        </div>
        <div className="blog-container">
          <div className="bg-blog">
            <img src="images/gallery-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="blog-box">
              <div className="row blog-top ">
                <div className="col-md-6">
                  <div className="card box1 ">
                    <img
                      src="images/blog1.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-tittle">BEST PHOTOGRAPHY</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Post By: Pic studio
                      </h6>
                      <p className="card-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum It
                        is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card box2">
                    <img
                      src="images/blog2.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-tittle">PHOTOGRAPHY</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Post By: Pic studio
                      </h6>
                      <p className="card-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum It
                        is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                      </p>
                    </div>
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

export default Blogs;
