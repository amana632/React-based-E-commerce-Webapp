import React, { Component } from "react";
import { browserHistory } from "react-router/lib/browserHistory";
import { Link } from "react-router-dom";
import icon1 from "./images/top-icon1.png";
import icon3 from "./images/top-icon3.png";
import flik from "./images/fli.png";

import icon2 from "./images/top-icon2.png";
var toshowcounter = localStorage.setItem("counter", 0);
var m = JSON.parse(localStorage.getItem("mycart"));
var total = 0;

const Product = ({
  mrp,
  title,
  image,
  prodId,
  description,
  sellingPrice,
  specialPrice,
  productURL,
  categories,
  Brand,
  sellerName,
  selleravgRating,
  norating,
  noreview,
  Remove
}) => (
  <tr>
    <td className="product">
      <div className="product-img">
        <img src={image} />
      </div>
      <div className="product-name">
        <a href="#">{title}</a>
        <br />
        <span>Brand- {Brand}</span>
        <br />
        <span>Category- {categories}</span>
        <br />
        <span>Distributor- {sellerName}</span>
        <br />
        <span>Rating- {selleravgRating}</span>
        <br />
        <span>Reviews- {noreview}</span>
        <br />
      </div>
    </td>
    <td className="price">
      <span id="mrp">Rs. {mrp}</span>
      {/* &nbsp;&nbsp; Rs. {sellingPrice} */}
      <br />
    </td>
    <td className="quantity">1</td>
    <td className="price">Rs. {mrp}</td>
    <td className="link">
      <Link to="scart" onClick={Remove}>
        <button type="button" class="btn btn-outline-info">
          {" "}
          REMOVE{" "}
        </button>
      </Link>
    </td>
    <td>
      <a href={productURL}>
        {" "}
        <button type="button" className="btn btn-outline-warning">
          VIEW IN FLIPKART
        </button>
        <img src={flik} style={{ height: "50px", width: "50px" }} />
      </a>
    </td>
  </tr>
);

export class Scart extends Component {
  RemoveFromCart = prodId => {
    var items = JSON.parse(localStorage.getItem("mycart"));
    for (var i = 0; i < items.length; i++) {
      if (items[i]["productId"] == prodId) {
        items.splice(i, 1);
        break;
      }
    }
    var item = JSON.stringify(items);
    localStorage.setItem("mycart", item);
  };

  renderProductsInCart = () => {
    const elements = [];

    var obj = JSON.parse(localStorage.getItem("mycart"));
    for (let index in obj) {
      total = total + obj[index][1];
      elements.push(
        <Product
          mrp={obj[index][1]}
          title={obj[index][2]}
          image={obj[index][0]}
          prodId={obj[index][3]}
          description={obj[index][4]}
          sellingPrice={obj[index][5]}
          specialPrice={obj[index][6]}
          productURL={obj[index][7]}
          categories={obj[index][8]}
          Brand={obj[index][9]}
          sellerName={obj[index][10]}
          selleravgRating={obj[index][11]}
          norating={obj[index][12]}
          noreview={obj[index][13]}
          Remove={() => this.RemoveFromCart(obj[index]["productId"])}
        />
      );
    }
    elements.push(
      <tr class="totals">
        <td colspan="2">
          <input type="submit" name="submit" value="Update cart" hidden />
        </td>
        <td class="quantity-span" colspan="2">
          Total Value of Cart Items-
        </td>
        <td class="price">Rs. {total}</td>
      </tr>
    );
    return elements;
  };

  checkCart = () => {
    console.log("SAxs)");
    var o = localStorage.getItem("mycart");
    if (o != null) {
      var obj = JSON.parse(o);
      if (obj.length == 0) {
        alert("Cart empty!");
        browserHistory.push("/");
      } else {
        document.getElementById("checkout1").setAttribute("to", "checkout");
      }
    } else {
      document.getElementById("checkout1").setAttribute("to", "checkout");
    }
  };

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
                <img src={icon1} alt="top-ico3" />{" "}
                <span>Cart ({toshowcounter})</span>{" "}
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

      <table cellspacing="0" className="shopping-cart">
        <thead>
          <tr className="headings">
            <th className="link">Item</th>
            <th className="product">Price</th>
            <th className="price">Quantity</th>
            <th className="price">Total</th>
            <th className="quantity">Remove</th>
            <th className="price">View in FLIPKART</th>
          </tr>
        </thead>
        <tbody>{this.renderProductsInCart()}</tbody>
      </table>,
      <section className="shopping-cart">
        <div className="col-sm-4 col-md-4">
          <div className="shipping-outer">
            <h2>Calculate shipping</h2>
            <div className="row">
              <ul>
                <li>
                  <div className="col-md-12 counttry">
                    <div className="lable">Select your Counttry:</div>
                    <input name="country" placeholder="India" type="text" />
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
                          <option value="Featured Pots">State / City</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="lable">Zip Code:</div>
                    <input name="counttry" placeholder="Zip Code" type="text" />
                  </div>
                </li>
              </ul>
            </div>
            <a href="#" className="button2">
              Update Shipping
            </a>
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
                Redeem code
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="shipping-outer">
              <h2>Cart totals</h2>
              <ul>
                <li>
                  Cart Subtotal: <strong>Rs.{total}</strong>
                </li>
                <li>
                  Shipping and Handling: <strong>Rs.100.00</strong>
                </li>
                <li>
                  Cart Totals: <strong>Rs.{total + 100}</strong>
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
