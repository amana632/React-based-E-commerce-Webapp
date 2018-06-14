// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class Login extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Login</h2>
//       </div>
//     );
//   }
// }
// export default Login;

import React, { Component } from "react";
import ReactDOM from "react-dom";

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
import logo from "./images/logo.png";
import hover from "./images/Hover-menu-img.jpg";
import icon1 from "./images/top-icon1.png";
import icon3 from "./images/top-icon3.png";
import thirteen from "./images/Products/13.jpg";
import eleven from "./images/Products/11.jpg";
import icon2 from "./images/top-icon2.png";
import hover1 from "./images/Hover-menu-img.jpg";
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import twenty_one from "./images/Products/21.jpg";
import tsix from "./images/Products/26.jpg";
import tfour from "./images/Products/24.jpg";
import seventeen from "./images/Products/17.jpg";
import ttwo from "./images/Products/22.jpg";
import seven from "./images/Products/7.jpg";
import nineteen from "./images/Products/19.jpg";
import six from "./images/Products/6.jpg";
import bg_banner from "./images/bg-banner.jpg";
import bg_banner2 from "./images/bg-banner2.jpg";
import tone from "./images/Products/21.jpg";
import clogo1 from "./images/client-logo1.png";
import clogo2 from "./images/client-logo2.png";
import clogo3 from "./images/client-logo3.png";
import clogo4 from "./images/client-logo4.png";
import clogo5 from "./images/client-logo5.png";

import blogimg1 from "./images/blog-img1.jpg";
import blogimg2 from "./images/blog-img2.jpg";

import blogimg3 from "./images/blog-img03.jpg";

import flogo from "./images/flogo.png";
import header1 from "./images/header-1.jpg";
import header2 from "./images/header-2.jpg";
import { Navbar } from "./navbar";

export class Scart extends Component {
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
                <a
                  className="dropdown-item"
                  href="https://www.facebook.com/npm"
                >
                  Barcode_scanner
                </a>
                <a
                  className="dropdown-item"
                  href="../public/grid-side bar.html"
                >
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

      <header>
        <div className="inner-header inner-header2">
          <h2>Shopping Cart</h2>
          <div className="bdr">
            <ul>
              <li>Home</li>
              <li>/</li>
              <li>Shop </li>
              <li>/</li>
              <li>
                <span>Shopping Cart</span>
              </li>
            </ul>
          </div>
        </div>
      </header>,
      <section className="shopping-cart">
        <div className="container">
          <div className="col-md-12">
            <h2>You cart items</h2>
            <table>
              <tr>
                <th />
                <th>Product name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th />
              </tr>
              <tr>
                <td>
                  <img src="assets/images/cart-img1.jpg" alt="13" />
                </td>
                <td>Name product #01</td>
                <td>
                  Lorem Ipsum is simply dummy text of the printing<br /> and
                  typesetting industry.
                </td>
                <td>
                  <strong>$160.00</strong>
                </td>
                <td>
                  <input type="number" name="quantity" min="1" max="500" />
                </td>
                <td>
                  <strong>$160.00</strong>
                </td>
                <td>
                  <span className="red">
                    <i className="fa fa-times" aria-hidden="true" />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="assets/images/cart-img2.jpg" alt="13" />
                </td>
                <td>Name product #02</td>
                <td>
                  Lorem Ipsum is simply dummy text of the printing<br /> and
                  typesetting industry.
                </td>
                <td>
                  <strong>$180.00</strong>
                </td>
                <td>
                  <input type="number" name="quantity" min="1" max="500" />
                </td>
                <td>
                  <strong>$180.00</strong>
                </td>
                <td>
                  <span>
                    <i className="fa fa-times" aria-hidden="true" />
                  </span>
                </td>
              </tr>
            </table>
            <div className="col-sm-6 col-md-6">
              <a href="#" className="button red">
                CONTINUE SHOPPING
              </a>
            </div>
            <div className="col-sm-6 col-md-6 text-right">
              <a href="#" className="button">
                UPDATE SHOPPING CART
              </a>
              <a href="#" className="button">
                CLEAR SHOPPING CART
              </a>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="shipping-outer">
                <h2>Calculate shipping</h2>
                <div className="row">
                  <ul>
                    <li>
                      <div className="col-md-12 counttry">
                        <div className="lable">Select your Counttry:</div>
                        <input
                          name="counttry"
                          placeholder="United States (USA)"
                          type="text"
                        />
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="lable">Select your State:</div>
                        <div className="size State">
                          <div className="select-option">
                            <select>
                              <option value="28">28</option>
                              <option value="32">32</option>
                              <option value="34">34</option>
                              <option value="36">36</option>
                              <option value="Featured Pots">
                                State / City
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="lable">Zip Code:</div>
                        <input
                          name="counttry"
                          placeholder="Zip Code"
                          type="text"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="#" className="button2">
                  Update Shipping
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="shipping-outer">
                <h2>Coupon code</h2>
                <ul>
                  <li>
                    <div className="col-md-12">
                      <div className="lable">Coupon Code:</div>
                      <input
                        name="Coupon Code"
                        placeholder="Coupon Code"
                        type="text"
                      />
                    </div>
                  </li>
                </ul>
                <a href="#" className="button2">
                  REdeem code
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="shipping-outer">
                <h2>Cart totals</h2>
                <ul>
                  <li>
                    Cart Subtotal: <strong>$640.00</strong>
                  </li>
                  <li>
                    Shipping and Handling: <strong>$10.00</strong>
                  </li>
                  <li>
                    Cart Totals: <strong>$650.00</strong>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#" className="redbutton">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section className="subscribe text-center">
        <div className="container">
          <h2>Get Discount Info</h2>
          <p>
            ubscribe to the Outstock mailing list to receive updates on new
            arrivals, special offers and<br /> other discount information.
          </p>
          <input type="text" placeholder="Subscribe to our newsletter..." />
          <input type="button" value="Subscribe" />
        </div>
      </section>,
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="f-weghit">
                <img src="assets/images/flogo.png" alt="logo" />
                <p>
                  Outstock is a premium Templates theme with advanced admin
                  module. It’s extremely customizable, easy to use and fully
                  responsive and retina ready.
                </p>
                <ul>
                  <li>
                    <i className="icon-location-pin icons" aria-hidden="true" />{" "}
                    <strong>Add:</strong> 1234 Heaven Stress, Beverly Hill,
                    Melbourne, USA.
                  </li>
                  <li>
                    <i className="icon-envelope-letter icons" />{" "}
                    <strong>Email:</strong> contact@example.com
                  </li>
                  <li>
                    <i className="icon-call-in icons" />{" "}
                    <strong>Phone Number:</strong> (800) 123 456 789
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className="f-weghit2">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Delivery Inforamtion </a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              <div className="f-weghit2">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <a href="#">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="#">Help & Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Returns & Refunds </a>
                  </li>
                  <li>
                    <a href="#">Online Stores</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copayright cwhite">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                Copyright &copy; <a href="#">Outstock</a> all rights reserved.
                Powered by <a href="#">zcube</a>
              </div>
              <div className="text-right col-xs-12 col-sm-6 col-md-6">
                <div className="f-sicon2">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    ];
  }
}
