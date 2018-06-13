import React, { Component } from "react";
import header1 from "./images/header-1.jpg";
import header2 from "./images/header-2.jpg";

class Aman extends Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={header1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={header2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={header1} alt="Third slide" />
          </div>
        </div>
      </div>
    );
  }
}
export default Aman;
