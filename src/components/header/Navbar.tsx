import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "../box/box.css";

const Navbar = () => {
  const [slider, setslider] = useState(false);
  const slides = () => {
    setslider(!slider);
  };
  const closed = () => {
    setslider(slider);
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className={`sliderr `}>
            <ul className={`list-group  ${slider ? "left" : ""} `}>
              <li className="list-group-item">
                <a href="">home </a>
              </li>
              <li className="list-group-item">
                <a href="">about</a>
              </li>
              <li className="list-group-item">
                <a href="">blog</a>
              </li>
              <li className="list-group-item">
                <a href="">testimonal</a>
              </li>
              <li className="list-group-item">
                <a href="">gallery</a>
              </li>
              <a href="" className="btn close btn-primary" onClick={closed}>
                <FaXmark />
              </a>
            </ul>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-black  ">
            <div className="icon" onClick={() => slides()}>
              <FaBars size="35px" color="yellow" className="ms-2 me-2" />
            </div>

            <div className="container-fluid ">
              <a className="navbar-brand display-2 " href="#">
                picstudio
              </a>
              <div className="collapse navbar-collapse ">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="" className="nav-link active">
                      landing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      contact
                    </a>
                  </li>
                </ul>
                <div>
                  <FaSearch size="1rem" color="yellow" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
