import React, { Component } from "react";
import header1 from "./images/header-1.jpg";
import header2 from "./images/header-2.jpg";
import header3 from "./images/header-3.jpg";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/baguetteBox.css";
import "./css/bootstrap-dropdownhover.min.css";
import "./font/css/font-awesome.min.css";
import "./simple-line-icon/css/simple-line-icons.css";
import "./css/style.css";
import "./css/slider.css";
import "./css/ourcss.css";
import icon1 from "./images/top-icon3.png";
import icon2 from "./images/Products/11.jpg";
import icon3 from "./images/Products/13.jpg";

function reqListener() {
  var a;
  let z = JSON.parse(this.responseText);
  console.log(z);
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_CPUHolders&count=100&offset=0;"
);
o.send();

export class Navbar extends Component {
  render() {
    return [
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Tech__Giant
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Comp Accessories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Barcode_scanner
                </a>
                <a className="dropdown-item" href="#">
                  CPU Holder
                </a>
                <a className="dropdown-item" href="#">
                  Card Reader
                </a>
                <a className="dropdown-item" href="#">
                  Cleaning Kit
                </a>

                <a className="dropdown-item" href="#">
                  Combos
                </a>
                <a className="dropdown-item" href="#">
                  HD Enclosures
                </a>
                <a className="dropdown-item" href="#">
                  Laptop Accessories Combos
                </a>
                <a className="dropdown-item" href="#">
                  Laptop Skin Decals
                </a>
                <a className="dropdown-item" href="#">
                  Monitor TV Cover
                </a>
                <a className="dropdown-item" href="#">
                  Monitor Arms
                </a>
                <a className="dropdown-item" href="#">
                  Pen Tablets
                </a>
                <a className="dropdown-item" href="#">
                  Printer Covers
                </a>
                <a className="dropdown-item" href="#">
                  USB Gadgets
                </a>
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Peripherals
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Portable projector
                </a>
                <a className="dropdown-item" href="#">
                  Portable Scanner
                </a>

                <a className="dropdown-item" href="#">
                  Printer/Scanner Pocket Printer
                </a>
                <a className="dropdown-item" href="#">
                  Printer/Scanner Printer Filaments
                </a>
                <a className="dropdown-item" href="#">
                  Printer/Scanner Printer MultiF
                </a>
                <a className="dropdown-item" href="#">
                  Printer/Scanner Printer Single
                </a>
                <a className="dropdown-item" href="#">
                  Printer/Scanner Receipt printer
                </a>
                <a className="dropdown-item" href="#">
                  Scanners
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PC&Laptop
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  All in One PCs
                </a>
                <a className="dropdown-item" href="#">
                  Tower PCs
                </a>
                <a className="dropdown-item" href="#">
                  Laptops
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Laptop Accessories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Batteries
                </a>
                <a className="dropdown-item" href="#">
                  Cleaning Kits
                </a>
                <a className="dropdown-item" href="#">
                  Cooling Pads/stands
                </a>
                <a className="dropdown-item" href="#">
                  Headphones
                </a>
                <a className="dropdown-item" href="#">
                  OTG Adapters
                </a>
                <a className="dropdown-item" href="#">
                  PowerBanks
                </a>
                <a className="dropdown-item" href="#">
                  World Wide Adapters
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Network&Cables
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Access Points
                </a>
                <a className="dropdown-item" href="#">
                  Antenna Amplifiers
                </a>
                <a className="dropdown-item" href="#">
                  Cables
                </a>
                <a className="dropdown-item" href="#">
                  Data Cards
                </a>
                <a className="dropdown-item" href="#">
                  LAN Adapters
                </a>
                <a className="dropdown-item" href="#">
                  Network Interface Cards
                </a>
                <a className="dropdown-item" href="#">
                  Network Servers
                </a>
                <a className="dropdown-item" href="#">
                  Routers Antenna Boosters
                </a>
                <a className="dropdown-item" href="#">
                  Routers
                </a>
                <a className="dropdown-item" href="#">
                  Switches
                </a>
                <a className="dropdown-item" href="#">
                  Wireless USB Adapters
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Software
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Business Productivity
                </a>
                <a className="dropdown-item" href="#">
                  Educational Media Physical
                </a>
                <a className="dropdown-item" href="#">
                  Multimedia
                </a>
                <a className="dropdown-item" href="#">
                  Multimedia Physical
                </a>
                <a className="dropdown-item" href="#">
                  Office Tools Physical
                </a>
                <a className="dropdown-item" href="#">
                  Office Tools Physical Key Cards
                </a>
                <a className="dropdown-item" href="#">
                  Office Tools Physical Perpetual License
                </a>
                <a className="dropdown-item" href="#">
                  Operating Systems
                </a>
                <a className="dropdown-item" href="#">
                  Operating Systems Digital
                </a>
                <a className="dropdown-item" href="#">
                  Operating Systems Physical
                </a>
                <a className="dropdown-item" href="#">
                  Security Software Antivirus
                </a>
                <a className="dropdown-item" href="#">
                  Security Software Digital
                </a>
                <a className="dropdown-item" href="#">
                  Security Software Internet Security
                </a>
                <a className="dropdown-item" href="#">
                  Security Software Total Security
                </a>
                <a className="dropdown-item" href="#">
                  Utilities Digital
                </a>
                <a className="dropdown-item" href="#">
                  Utilities Physical
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Storage
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  External HDD
                </a>
                <a className="dropdown-item" href="#">
                  Internal HDD
                </a>
                <a className="dropdown-item" href="#">
                  Pendrives
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Supplies
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Inks
                </a>
                <a className="dropdown-item" href="#">
                  Toners
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tab Accessories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Cables
                </a>
                <a className="dropdown-item" href="#">
                  Memory Cards
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle">
                <img src={icon1} alt="top-ico3" /> <span>Cart (0)</span>{" "}
              </a>
              <div className="dropdown-content">
                <div className="cart-content">
                  <div className="col-sm-4 col-md-4">
                    <img src={icon3} alt="13" />
                  </div>
                  <div className="col-sm-8 col-md-8">
                    <div className="pro-text">
                      {" "}
                      <a href="#">Pellentesque Habitant</a>
                      <div className="close">x</div> <strong>$160.00</strong>{" "}
                    </div>
                  </div>
                </div>
                <div className="cart-content">
                  <div className="col-sm-4 col-md-4">
                    <img src={icon2} alt="13" />
                  </div>
                  <div className="col-sm-8 col-md-8">
                    <div className="pro-text">
                      {" "}
                      <a href="#">Pellentesque Habitant</a>
                      <div className="close">x</div> <strong>$160.00</strong>{" "}
                    </div>
                  </div>
                </div>
                <div className="total">
                  <div className="col-sm-6 col-md-6 text-left">
                    {" "}
                    <span>Shipping :</span>
                    <br /> <strong>Total :</strong>{" "}
                  </div>
                  <div className="col-sm-6 col-md-6 text-right">
                    {" "}
                    <strong>$0.00</strong>
                    <br /> <strong>$160.00</strong>{" "}
                  </div>
                </div>{" "}
                <a href="./scart.js" className="cart-btn">
                  VIEW CART{" "}
                </a>{" "}
                <a href="checkout.html" className="cart-btn">
                  CHECKOUT
                </a>{" "}
              </div>
            </li>
          </ul>
        </div>
      </nav>,
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={header3} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={header2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={header1} alt="Third slide" />
          </div>
        </div>
      </div>
    ];
  }
}
