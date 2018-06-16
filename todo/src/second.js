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

import icon1 from "./images/top-icon3.png";
import icon2 from "./images/Products/11.jpg";
import icon3 from "./images/Products/13.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Scart } from "./scart.js";

var imgurlc;
var imgurl2c;
var imgurl3c;
var imgurl4c;
var imgurl5c;
var imgurl6c;
var imgurl7c;
var imgurl8c;
var conet;
var conec;
var ctwoc;
var ctwot;
var cthreet;
var cthreec;
var cfourc;
var cfourt;
var cfivec;
var cfivet;
var csixt;
var csixc;
var csevenc;
var csevent;
var ceightc;
var ceightt;
var toshowcounter = localStorage.setItem("counter", 0);

var links = localStorage.getItem("linktohit");
var z;

function reqListenerq() {
  localStorage.setItem("keyonload1", this.responseText);
  z = JSON.parse(localStorage.getItem("keyonload1"));

  for (let i = 0; i < 8; i++) {
    imgurlc = z[0].imageUrlStr.split(";");
    imgurlc = imgurlc[1];
    document.getElementById("one").src = imgurlc;
    conet = z[0].title.slice(0, 80);
    conec = z[0].mrp;
  }
  // document.getElementById("onetext").innerText = conet;
  // document.getElementById("onecost").innerText = conec;

  imgurl2c = z[1].imageUrlStr.split(";");
  imgurl2c = imgurl2c[1];
  document.getElementById("two").src = imgurl2c;
  ctwot = z[1].title.slice(0, 80);
  ctwoc = z[1].mrp;
  // document.getElementById("twotext").innerText = twot;
  // document.getElementById("twocost").innerText = twoc;

  imgurl3c = z[2].imageUrlStr.split(";");
  imgurl3c = imgurl3c[1];
  document.getElementById("three").src = imgurl3c;
  cthreet = z[2].title.slice(0, 80);
  cthreec = z[2].mrp;
  // document.getElementById("threetext").innerText = threet;
  // document.getElementById("threecost").innerText = threec;

  imgurl4c = z[3].imageUrlStr.split(";");
  imgurl4c = imgurl4c[1];
  document.getElementById("four").src = imgurl4c;
  cfourt = z[3].title.slice(0, 80);
  cfourc = z[3].mrp;
  // document.getElementById("fourtext").innerText = fourt;
  // document.getElementById("fourcost").innerText = fourc;

  imgurl5c = z[4].imageUrlStr.split(";");
  imgurl5c = imgurl5c[1];
  document.getElementById("five").src = imgurl5c;
  cfivet = z[4].title.slice(0, 80);
  cfivec = z[4].mrp;
  // document.getElementById("fivetext").innerText = fivet;
  // document.getElementById("fivecost").innerText = fivec;

  imgurl6c = z[5].imageUrlStr.split(";");
  imgurl6c = imgurl6c[2];
  document.getElementById("six").src = imgurl6c;
  csixt = z[5].title.slice(0, 80);
  csixc = z[5].mrp;
  // document.getElementById("sixtext").innerText = sixt;
  // document.getElementById("sixcost").innerText = sixc;

  imgurl7c = z[6].imageUrlStr.split(";");
  imgurl7c = imgurl7c[1];
  document.getElementById("seven").src = imgurl7c;
  csevent = z[6].title.slice(0, 80);
  csevenc = z[6].mrp;
  // document.getElementById("sixtext").innerText = sevent;
  // document.getElementById("sixcost").innerText = sevenc;

  imgurl8c = z[7].imageUrlStr.split(";");
  imgurl8c = imgurl8c[1];
  document.getElementById("eight").src = imgurl8c;
  ceightt = z[7].title.slice(0, 80);
  ceightc = z[7].mrp;
  // document.getElementById("fivetext").innerText = eightt;
  // document.getElementById("fivecost").innerText = eightc;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListenerq);
o.open("GET", localStorage.getItem("linktohit"));
o.send();

export class Second extends Component {
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
            </li>

            {/* <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle">
                <img src={icon1} alt="top-ico3" />{" "}
                <span>Cart ({toshowcounter})</span>{" "}
              </a>
              <div className="dropdown-content">
                <div className="cart-content">
                  <div className="col-sm-4 col-md-4">
                    <img src={m1[0][0]} alt="13" />
                  </div>
                  <div className="col-sm-8 col-md-8">
                    <div className="pro-text">
                      {" "}
                      <a href="#">{m1[0][2]}</a>
                      <div className="close">x</div> <strong>{m1[0][1]}</strong>{" "}
                    </div>
                  </div>
                </div>
                <div className="cart-content">
                  <div className="col-sm-4 col-md-4">
                    <img src={m1[1][0]} alt="13" />
                  </div>
                  <div className="col-sm-8 col-md-8">
                    <div className="pro-text">
                      {" "}
                      <a href="#">{m1[1][2]}</a>
                      <div className="close">x</div> <strong>{m1[1][1]}</strong>{" "}
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
                    <strong>Rs.10.00</strong>
                    <br /> <strong>{m1[0][1] + m1[1][1] + 10}</strong>{" "}
                  </div>
                </div>{" "}
                <Router>
                  <div>
                    <ul>
                      <li>
                        <Link to={"/scart"}>
                          <button className="cart-btn"> VIEW CART </button>
                        </Link>
                      </li>
                    </ul>
                    <hr />

                    <Switch>
                      <Route exact path="/scart" component={Scart} />
                    </Switch>
                  </div>
                </Router>,
                <a href="checkout.html" className="cart-btn">
                  CHECKOUT
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>,
      <header>
        <div className="inner-header inner-header2">
          <h2>Shopping Categories</h2>
          <div className="bdr">
            <ul>
              <li>Home</li>
              <li>/</li>
              <li>Shop </li>
              <li>/</li>
              <li>
                <span>Shop by Categories</span>
              </li>
            </ul>
          </div>
        </div>
      </header>,
      <section className="new-arrivals">
        {/* <!-- .new-arrivals --> */}
        <div className="container">
          <div className="tittle text-center">
            <h2>Trending Products in your category</h2>
            <p>All trending products at one place !!</p>
          </div>
          <div
            className="row animated wow zoomIn"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img id="one" src={imgurlc} alt="2" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a id="onetext"> {conet}</a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurlc,
                      conec,
                      conet,
                      z[0].productId,
                      z[0].description,
                      z[0].sellingPrice,
                      z[0].specialPrice,
                      z[0].productUrl,
                      z[0].categories,
                      z[0].productBrand,
                      z[0].sellerName,
                      z[0].sellerAverageRating,
                      z[0].sellerNoOfRatings,
                      z[0].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="onecost">
                  {conec}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl2c} alt="2" id="two" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="twotext">
                  {ctwot}
                </a>
                <a
                  href="#"
                  className="addtocart"
                  id="addtwo"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl2c,
                      ctwoc,
                      ctwot,
                      z[1].productId,
                      z[1].description,
                      z[1].sellingPrice,
                      z[1].specialPrice,
                      z[1].productUrl,
                      z[1].categories,
                      z[1].productBrand,
                      z[1].sellerName,
                      z[1].sellerAverageRating,
                      z[1].sellerNoOfRatings,
                      z[1].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </a>
                <div className="price" id="twocost">
                  {ctwoc}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl3c} alt="2" id="three" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="threetext">
                  {cthreet}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    if (existingEntries == null) existingEntries = [];
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl3c,
                      cthreec,
                      cthreet,
                      z[2].productId,
                      z[2].description,
                      z[2].sellingPrice,
                      z[2].specialPrice,
                      z[2].productUrl,
                      z[2].categories,
                      z[2].productBrand,
                      z[2].sellerName,
                      z[2].sellerAverageRating,
                      z[2].sellerNoOfRatings,
                      z[2].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="threecost">
                  {cthreec}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl4c} alt="2" id="four" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="new tage">
                    <span className="new-text">NEW</span>
                    <span className="pres-text">-15%</span>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="fourtext">
                  {cfourt}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl4c,
                      cfourc,
                      cfourt,
                      z[3].productId,
                      z[3].description,
                      z[3].sellingPrice,
                      z[3].specialPrice,
                      z[3].productUrl,
                      z[3].categories,
                      z[3].productBrand,
                      z[3].sellerName,
                      z[3].sellerAverageRating,
                      z[3].sellerNoOfRatings,
                      z[3].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="fourcost">
                  {cfourc}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl5c} alt="2" id="five" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="new tage">
                    <span className="new-text">NEW</span>
                    <span className="pres-text">-15%</span>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="fivetext">
                  {cfivet}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl5c,
                      cfivec,
                      cfivet,
                      z[4].productId,
                      z[4].description,
                      z[4].sellingPrice,
                      z[4].specialPrice,
                      z[4].productUrl,
                      z[4].categories,
                      z[4].productBrand,
                      z[4].sellerName,
                      z[4].sellerAverageRating,
                      z[4].sellerNoOfRatings,
                      z[4].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="fivecost">
                  {cfivec}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl6c} alt="2" id="six" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="sixtext">
                  {csixt}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl6c,
                      csixc,
                      csixt,
                      z[5].productId,
                      z[5].description,
                      z[5].sellingPrice,
                      z[5].specialPrice,
                      z[5].productUrl,
                      z[5].categories,
                      z[5].productBrand,
                      z[5].sellerName,
                      z[5].sellerAverageRating,
                      z[5].sellerNoOfRatings,
                      z[5].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="sixcost">
                  {csixc}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl7c} alt="2" id="seven" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="new tage">
                    <span className="new-text">NEW</span>
                    <span className="pres-text">-15%</span>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="seventext">
                  {csevent}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl7c,
                      csevenc,
                      csevent,
                      z[6].productId,
                      z[6].description,
                      z[6].sellingPrice,
                      z[6].specialPrice,
                      z[6].productUrl,
                      z[6].categories,
                      z[6].productBrand,
                      z[6].sellerName,
                      z[6].sellerAverageRating,
                      z[6].sellerNoOfRatings,
                      z[6].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="sevencost">
                  {csevenc}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl8c} alt="2" id="eight" />
                  {/* <!-- .hover-img --> */}
                  <div className="hover-img">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#quickModal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount tage">
                    <span className="discount-text">-15%</span>
                  </div>
                  {/* <!-- /.hover-img --> */}
                </div>
                {/* <!-- /.pro-img --> */}
                <a href="#" id="eighttext">
                  {ceightt}
                </a>
                <button
                  className="addtocart"
                  id="addone"
                  onClick={() => {
                    toshowcounter = localStorage.getItem("counter");
                    toshowcounter = parseInt(toshowcounter) + 1;
                    localStorage.setItem("counter", toshowcounter);
                    var existingEntries = JSON.parse(
                      localStorage.getItem("mycart")
                    );
                    if (existingEntries == null) existingEntries = [];
                    var entry = [
                      imgurl8c,
                      ceightc,
                      ceightt,
                      z[7].productId,
                      z[7].description,
                      z[7].sellingPrice,
                      z[7].specialPrice,
                      z[7].productUrl,
                      z[7].categories,
                      z[7].productBrand,
                      z[7].sellerName,
                      z[7].sellerAverageRating,
                      z[7].sellerNoOfRatings,
                      z[7].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="eightcost">
                  {ceightc}
                </div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-12 text-center">
              <a href="#" className="lbtn">
                load more
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /.new-arrivals --> */}
      </section>
    ];
  }
}
