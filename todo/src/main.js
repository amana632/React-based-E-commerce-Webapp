import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
import { Table } from "./table";
import flogo from "./images/flogo.png";
import header1 from "./images/header-1.jpg";
import header2 from "./images/header-2.jpg";
import { Navbar } from "./navbar";
import { Scart } from "./scart";
import { Second } from "./second";
import { Example } from "./Modal";
// import { Aman } from "./carousel";
//requests
var toshowcounter = localStorage.setItem("counter", 0);
function funci() {
  toshowcounter = localStorage.getItem("counter");
  toshowcounter = parseInt(toshowcounter) + 1;
  localStorage.setItem("counter", toshowcounter);
}
var z;
var randomNO;
var randomNO1;
var randomNO2;
var randomNO3;
var randomNO4;
var randomNO5;
var randomNO6;
var randomNO7;
var randomNO8;

var imgurl;
var imgurl2;
var imgurl3;
var imgurl4;
var imgurl5;
var imgurl6;
var imgurl7;
var imgurl8;
var onec;
var onet;

function reqListener() {
  localStorage.setItem("key1", this.responseText);
  randomNO1 = Math.floor(Math.random() * 1 + 1);
  localStorage.setItem("r1", randomNO1);

  console.log("r", randomNO1);
  z = JSON.parse(localStorage.getItem("key1"));
  imgurl = z[randomNO1].imageUrlStr.split(";");
  imgurl = imgurl[1];
  document.getElementById("one").src = imgurl;
  onet = z[randomNO1].title.slice(0, 80);
  onec = z[randomNO1].mrp;
  console.log(onec, onet);
  document.getElementById("onetext").innerText = onet;
  document.getElementById("onecost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;"
);
o.send();

// two
function reqListener2() {
  var a;
  localStorage.setItem("key2", this.responseText);

  randomNO2 = Math.floor(Math.random() * 2 + 1);
  localStorage.setItem("r2", randomNO2);
  z = JSON.parse(localStorage.getItem("key2"));
  imgurl2 = z[randomNO2].imageUrlStr.split(";");
  imgurl2 = imgurl2[1];
  document.getElementById("two").src = imgurl2;
  onet = z[randomNO2].title.slice(0, 80);
  onec = z[randomNO2].mrp;
  document.getElementById("twotext").innerText = onet;
  document.getElementById("twocost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener2);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_PortableProjectors&count=100&offset=0;"
);
o.send();
//three
function reqListener3() {
  localStorage.setItem("key3", this.responseText);
  randomNO3 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r3", randomNO3);
  z = JSON.parse(localStorage.getItem("key3"));
  imgurl3 = z[randomNO3].imageUrlStr.split(";");
  imgurl3 = imgurl3[1];
  document.getElementById("three").src = imgurl3;
  onet = z[randomNO3].title.slice(0, 80);
  onec = z[randomNO3].mrp;
  document.getElementById("threetext").innerText = onet;
  document.getElementById("threecost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener3);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_DesktopPCs_AllInOnePCs&count=100&offset=0;"
);
o.send();
//four
function reqListener4() {
  localStorage.setItem("key4", this.responseText);
  randomNO4 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r4", randomNO4);
  z = JSON.parse(localStorage.getItem("key4"));
  imgurl4 = z[randomNO4].imageUrlStr.split(";");
  imgurl4 = imgurl4[1];
  document.getElementById("four").src = imgurl4;
  onet = z[randomNO4].title.slice(0, 80);
  onec = z[randomNO4].mrp;
  document.getElementById("fourtext").innerText = onet;
  document.getElementById("fourcost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener4);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_Headphones&count=100&offset=0;"
);
o.send();
//five
function reqListener5() {
  localStorage.setItem("key5", this.responseText);
  randomNO5 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r5", randomNO5);
  z = JSON.parse(localStorage.getItem("key5"));
  imgurl5 = z[randomNO5].imageUrlStr.split(";");
  imgurl5 = imgurl5[1];
  document.getElementById("five").src = imgurl5;
  onet = z[randomNO5].title.slice(0, 80);
  onec = z[randomNO5].mrp;
  document.getElementById("fivetext").innerText = onet;
  document.getElementById("fivecost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener5);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_RouterAntennas-Boosters&count=100&offset=0;;"
);
o.send();
//six
function reqListener6() {
  localStorage.setItem("key6", this.responseText);
  randomNO6 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r6", randomNO6);
  z = JSON.parse(localStorage.getItem("key6"));
  imgurl6 = z[randomNO6].imageUrlStr.split(";");
  imgurl6 = imgurl6[1];
  document.getElementById("six").src = imgurl6;
  onet = z[randomNO6].title.slice(0, 80);
  onec = z[randomNO6].mrp;
  document.getElementById("sixtext").innerText = onet;
  document.getElementById("sixcost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener6);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_Software_SecuritySoftware_AntiVirus&count=100&offset=0;"
);
o.send();
//seven
function reqListener7() {
  localStorage.setItem("key7", this.responseText);
  randomNO7 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r7", randomNO7);
  z = JSON.parse(localStorage.getItem("key7"));
  imgurl7 = z[randomNO7].imageUrlStr.split(";");
  imgurl7 = imgurl7[1];
  document.getElementById("seven").src = imgurl7;
  onet = z[randomNO7].title.slice(0, 80);
  onec = z[randomNO7].mrp;
  document.getElementById("seventext").innerText = onet;
  document.getElementById("sevencost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener7);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_Storage_ExternalHDD&count=100&offset=0;"
);
o.send();
//eight
function reqListener8() {
  localStorage.setItem("key8", this.responseText);
  randomNO8 = Math.floor(Math.random() * 3 + 1);
  localStorage.setItem("r8", randomNO8);
  z = JSON.parse(localStorage.getItem("key8"));
  imgurl8 = z[randomNO8].imageUrlStr.split(";");
  imgurl8 = imgurl8[1];
  document.getElementById("eight").src = imgurl8;
  onet = z[randomNO8].title.slice(0, 80);
  onec = z[randomNO8].mrp;
  document.getElementById("eighttext").innerText = onet;
  document.getElementById("eightcost").innerText = onec;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener8);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_Supplies_Inks&count=100&offset=0;"
);
o.send();
export class Main extends Component {
  render() {
    return [
      <section className="banner-outer">
        {/* <!-- .banner-outer --> */}
        <div className="container">
          {/* <!-- .banner-bg --> */}
          <div className="banner-bg">
            <div className="col-sm-4 col-md-4">
              {/* <!-- .banner-img --> */}
              <div
                className="banner-img animated wow zoomIn"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <img src={banner1} alt="about-img1" />
                <div className="banner-text">
                  {/* <h3>British Made Pocket Knife - Oak</h3> */}
                  <p>{/* <a href="#">Discover Now</a> */}</p>
                </div>
              </div>
              {/* <!-- /.banner-outer --> */}
            </div>
            <div className="col-sm-4 col-md-4">
              {/* <!-- .banner-img --> */}
              <div
                className="banner-img animated wow zoomIn"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <img src={banner2} alt="about-img1" />
                <div className="banner-text">
                  {/* <h3>Chair Kimi No Isu Project</h3> */}
                  <p>{/* <a href="#">Discover Now</a> */}</p>
                </div>
              </div>
              {/* <!-- /.banner-outer --> */}
            </div>
            <div
              className="col-sm-4 col-md-4 animated wow zoomIn"
              data-wow-duration=".5s"
              data-wow-delay=".2s"
            >
              {/* <!-- .banner-img --> */}
              <div className="banner-img">
                <img src={banner3} alt="about-img1" />
                <div className="banner-text">
                  {/* <h3>Merino Lambswool Scarf Moss</h3> */}
                  <p>{/* <a href="#">Discover Now</a> */}</p>
                </div>
              </div>
              {/* <!-- /.banner-outer --> */}
            </div>
          </div>
          {/* <!-- /.banner-bg --> */}
        </div>
        {/* <!-- /.banner --> */}
      </section>,
      <section className="new-arrivals">
        {/* <!-- .new-arrivals --> */}
        <div className="container">
          <div className="tittle text-center">
            <h2>Trending Products</h2>
            <p>All trending products at one place !!</p>
          </div>
          <div
            className="row animated wow zoomIn"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key1");
                  localStorage.setItem("rc", randomNO1);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img id="one" src={imgurl} alt="2" />
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
                <a href="#" id="onetext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key1"));

                    var entry = [
                      imgurl,
                      z[randomNO1].mrp,
                      z[randomNO1].title,
                      z[randomNO1].productId,
                      z[randomNO1].description,
                      z[randomNO1].sellingPrice,
                      z[randomNO1].specialPrice,
                      z[randomNO1].productUrl,
                      z[randomNO1].categories,
                      z[randomNO1].productBrand,
                      z[randomNO1].sellerName,
                      z[randomNO1].sellerAverageRating,
                      z[randomNO1].sellerNoOfRatings,
                      z[randomNO1].sellerNoOfReviews
                    ];
                    localStorage.setItem("entry1", JSON.stringify(entry));
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="onecost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key2");
                  localStorage.setItem("rc", randomNO2);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl2} alt="2" id="two" />
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
                <a href="#" id="twotext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key2"));

                    var entry = [
                      imgurl,
                      z[randomNO2].mrp,
                      z[randomNO2].title,
                      z[randomNO2].productId,
                      z[randomNO2].description,
                      z[randomNO2].sellingPrice,
                      z[randomNO2].specialPrice,
                      z[randomNO2].productUrl,
                      z[randomNO2].categories,
                      z[randomNO2].productBrand,
                      z[randomNO2].sellerName,
                      z[randomNO2].sellerAverageRating,
                      z[randomNO2].sellerNoOfRatings,
                      z[randomNO2].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="twocost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key3");
                  localStorage.setItem("rc", randomNO3);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl3} alt="2" id="three" />
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
                <a href="#" id="threetext" />
                <Example />
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
                    z = JSON.parse(localStorage.getItem("key3"));
                    console.log(z);
                    console.log(randomNO3);

                    var entry = [
                      imgurl,
                      z[randomNO3].mrp,
                      z[randomNO3].title,
                      z[randomNO3].productId,
                      z[randomNO3].description,
                      z[randomNO3].sellingPrice,
                      z[randomNO3].specialPrice,
                      z[randomNO3].productUrl,
                      z[randomNO3].categories,
                      z[randomNO3].productBrand,
                      z[randomNO3].sellerName,
                      z[randomNO3].sellerAverageRating,
                      z[randomNO3].sellerNoOfRatings,
                      z[randomNO3].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="threecost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key4");
                  localStorage.setItem("rc", randomNO4);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl4} alt="2" id="four" />
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
                <a href="#" id="fourtext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key4"));
                    console.log(z);
                    console.log(randomNO4);
                    console.log(z[randomNO4].mrp);
                    var entry = [
                      imgurl,
                      z[randomNO4].mrp,
                      z[randomNO4].title,
                      z[randomNO4].productId,
                      z[randomNO4].description,
                      z[randomNO4].sellingPrice,
                      z[randomNO4].specialPrice,
                      z[randomNO4].productUrl,
                      z[randomNO4].categories,
                      z[randomNO4].productBrand,
                      z[randomNO4].sellerName,
                      z[randomNO4].sellerAverageRating,
                      z[randomNO4].sellerNoOfRatings,
                      z[randomNO4].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="fourcost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key5");
                  localStorage.setItem("rc", randomNO5);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl5} alt="2" id="five" />
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
                <a href="#" id="fivetext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key5"));
                    console.log(z);
                    console.log(randomNO5);
                    console.log(z[randomNO5].mrp);
                    var entry = [
                      imgurl,
                      z[randomNO5].mrp,
                      z[randomNO5].title,
                      z[randomNO5].productId,
                      z[randomNO5].description,
                      z[randomNO5].sellingPrice,
                      z[randomNO5].specialPrice,
                      z[randomNO5].productUrl,
                      z[randomNO5].categories,
                      z[randomNO5].productBrand,
                      z[randomNO5].sellerName,
                      z[randomNO5].sellerAverageRating,
                      z[randomNO5].sellerNoOfRatings,
                      z[randomNO5].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="fivecost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key6");
                  localStorage.setItem("rc", randomNO6);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl6} alt="2" id="six" />
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
                <a href="#" id="sixtext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key6"));
                    console.log(z);
                    console.log(randomNO6);
                    console.log(z[randomNO6].mrp);
                    var entry = [
                      imgurl,
                      z[randomNO6].mrp,
                      z[randomNO6].title,
                      z[randomNO6].productId,
                      z[randomNO6].description,
                      z[randomNO6].sellingPrice,
                      z[randomNO6].specialPrice,
                      z[randomNO6].productUrl,
                      z[randomNO6].categories,
                      z[randomNO6].productBrand,
                      z[randomNO6].sellerName,
                      z[randomNO6].sellerAverageRating,
                      z[randomNO6].sellerNoOfRatings,
                      z[randomNO6].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="sixcost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3" style={{ height: "600px" }}>
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key7");
                  localStorage.setItem("rc", randomNO7);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl7} alt="2" id="seven" />
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

                <a href="#" id="seventext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key7"));
                    console.log(z);
                    console.log(randomNO7);
                    console.log(z[randomNO7].mrp);
                    var entry = [
                      imgurl,
                      z[randomNO7].mrp,
                      z[randomNO7].title,
                      z[randomNO7].productId,
                      z[randomNO7].description,
                      z[randomNO7].sellingPrice,
                      z[randomNO7].specialPrice,
                      z[randomNO7].productUrl,
                      z[randomNO7].categories,
                      z[randomNO7].productBrand,
                      z[randomNO7].sellerName,
                      z[randomNO7].sellerAverageRating,
                      z[randomNO7].sellerNoOfRatings,
                      z[randomNO7].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="sevencost" />
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div
                className="pro-text"
                onClick={() => {
                  localStorage.setItem("clicked", "key8");
                  localStorage.setItem("rc", randomNO8);
                }}
              >
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={imgurl8} alt="2" id="eight" />
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
                <a href="#" id="eighttext" />
                <Example />
                <a id="onetext" />
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
                    z = JSON.parse(localStorage.getItem("key8"));

                    var entry = [
                      imgurl,
                      z[randomNO8].mrp,
                      z[randomNO8].title,
                      z[randomNO8].productId,
                      z[randomNO8].description,
                      z[randomNO8].sellingPrice,
                      z[randomNO8].specialPrice,
                      z[randomNO8].productUrl,
                      z[randomNO8].categories,
                      z[randomNO8].productBrand,
                      z[randomNO8].sellerName,
                      z[randomNO8].sellerAverageRating,
                      z[randomNO8].sellerNoOfRatings,
                      z[randomNO8].sellerNoOfReviews
                    ];
                    console.log(entry);
                    localStorage.setItem("entry", JSON.stringify(entry));
                    existingEntries.push(entry);
                    console.log(entry);
                    localStorage.setItem(
                      "mycart",
                      JSON.stringify(existingEntries)
                    );
                    console.log(entry);
                  }}
                >
                  + Add to cart
                </button>
                <div className="price" id="eightcost" />
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
      </section>,
      <section className="banner-outer">
        {/* <!-- .banner-outer --> */}
        <div className="col-sm-6 col-md-6">
          {/* <!-- .banner-img --> */}
          <div className="banner-img">
            <img src={bg_banner} alt="about-img1" />
            <div className="banner-text2">
              {/* <h4>Products Essentials</h4>
      <h3>Bottle With Wooden Cork</h3>
      <p>
        The Newtown sofa range is the first product Jonas Wagell has
        designed for Zaozuo, but one of the last to be finalized and
        launched. */}
              {/* </p> */}
              <p>
                <a href="/second.js">
                  Buy now /
                  <span>Rs.49999</span>
                </a>
              </p>
            </div>
          </div>
          {/* <!-- /.banner-outer --> */}
        </div>

        <div className="col-sm-6 col-md-6">
          {/* <!-- .banner-img --> */}
          <div className="banner-img">
            <img src={bg_banner2} alt="about-img1" />
            <div className="banner-text2">
              {/* <h4>Products Essentials</h4>
      <h3>Hauteville Plywood Chair</h3>
      <p>
        The Newtown sofa range is the first product Jonas Wagell has
        designed for Zaozuo, but one of the last to be finalized and
        launched. */}
              {/* </p> */}
              <p>
                <a href="/second.js">
                  Buy now /
                  <span>Rs.30000</span>
                </a>
              </p>
            </div>
          </div>
          {/* <!-- /.banner-outer --> */}
        </div>
        {/* <!-- /.banner --> */}
      </section>,
      <section className="new-arrivals">
        {/* <!-- .new-arrivals --> */}
      </section>,
      <section className="client-icon">
        <div className="container">
          <ul>
            <li>
              <a href="#">
                <img src={clogo1} alt="client-logo1" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={clogo2} alt="client-logo2" />
              </a>
            </li>
            <li>
              <a href="#" className="active">
                <img src={clogo3} alt="client-logo3" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={clogo4} alt="client-logo4" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={clogo5} alt="client-logo4" />
              </a>
            </li>
          </ul>
        </div>
      </section>,

      // <section className="section-padding">
      //   {/* <!-- Latest News --> */}
      //   <div className="container">
      //     <div className="tittle text-center">
      //       {/* <h2>Our Blog Posts</h2>
      //       <p>
      //         Mirum est notare quam littera gothica quam nunc putamus parum
      //         claram!
      //       </p> */}
      //     </div>
      //     <div
      //       className="col-sm-4 col-md-4 wow fadeIn"
      //       data-wow-duration=".2s"
      //       data-wow-delay=".1s"
      //     >
      //       <div className="news-box">
      //         <div className="news-img">
      //           <img src={blogimg1} alt="news-img1" />
      //         </div>
      //         <div className="news-text">
      //           <a href="#">Anteposuerit litterarum formas.</a>
      //           <p>
      //             By
      //             <span>Zcubedesign</span> / September 11, 2017
      //           </p>
      //           <div className="news-text-content">
      //             {" "}
      //             Mirum est notare quam littera gothica, quam nunc putamus parum
      //             claram, anteposuerit litterarum.{" "}
      //           </div>
      //           <a href="#" className="readbtn">
      //             Read More
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //     <div
      //       className="col-sm-4 col-md-4 wow fadeIn"
      //       data-wow-duration=".2s"
      //       data-wow-delay=".1s"
      //     >
      //       <div className="news-box">
      //         <div className="news-img">
      //           <img src={blogimg2} alt="news-img1" />
      //         </div>
      //         <div className="news-text">
      //           <a href="#">Anteposuerit litterarum formas.</a>
      //           <p>
      //             By
      //             <span>Zcubedesign</span> / September 11, 2017
      //           </p>
      //           <div className="news-text-content">
      //             {" "}
      //             Mirum est notare quam littera gothica, quam nunc putamus parum
      //             claram, anteposuerit litterarum.{" "}
      //           </div>
      //           <a href="#" className="readbtn">
      //             Read More
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //     <div
      //       className="col-sm-4 col-md-4 wow fadeIn"
      //       data-wow-duration=".4s"
      //       data-wow-delay=".3s"
      //     >
      //       <div className="news-box">
      //         <div className="news-img">
      //           <img src={blogimg3} alt="news-img1" />
      //         </div>
      //         <div className="news-text">
      //           <a href="#">Anteposuerit litterarum formas.</a>
      //           <p>
      //             By
      //             <span>Zcubedesign</span> / September 11, 2017
      //           </p>
      //           <div className="news-text-content">
      //             {" "}
      //             Mirum est notare quam littera gothica, quam nunc putamus parum
      //             claram, anteposuerit litterarum.{" "}
      //           </div>
      //           <a href="#" className="readbtn">
      //             Read More
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   {/* <!-- /Latest News --> */}
      // </section>,
      <section className="subscribe text-center">
        {/* <!-- .subscribe --> */}
        <div className="container">
          <h2>Get Discount Info</h2>
          <p>
            Subscribe to the Tech__Giant mailing list to receive updates on new
            arrivals, special offers and
            <br /> other discount information.
          </p>
          <input type="text" placeholder="Subscribe to our newsletter..." />
          <input type="button" value="Subscribe" />
        </div>
        {/* <!-- /.subscribe --> */}
      </section>,
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              {/* <!-- f-weghit --> */}
              <div className="f-weghit">
                <img src={flogo} alt="logo" />
                <p>
                  Tech__Giant, Inc. , doing business as Tech__Giant
                  (/ˈæməˌzɒn/), is an American electronic commerce and cloud
                  computing company based in Seattle, Washington that was
                  founded by Jeff Bezos on July 5, 1994. The tech giant is the
                  largest Internet retailer in the world as measured by revenue
                  and market capitalization, and second largest after Alibaba
                  Group in terms of total sales. The Tech__Giant.com website
                  started as an online bookstore and later diversified to sell
                  video downloads/streaming, MP3 downloads/streaming, audiobook
                  downloads/streaming, software, video games, electronics.
                </p>
                <ul>
                  <li>
                    <i className="icon-location-pin icons" aria-hidden="true" />
                    <strong>Add:</strong> Popular Heights, Koregaon Park,Pune
                  </li>
                  <li>
                    <i className="icon-envelope-letter icons" />
                    <strong>Email:</strong> Tech__Giant@gmail.com
                  </li>
                  <li>
                    <i className="icon-call-in icons" />
                    <strong>Phone Number:</strong> (800) 123 456 789
                  </li>
                </ul>
              </div>
              {/* <!-- /f-weghit --> */}
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              {/* <!-- f-weghit2 --> */}
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
              {/* <!-- /f-weghit2 --> */}
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3">
              {/* <!-- f-weghit2 --> */}
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
              {/* <!-- /f-weghit2 --> */}
            </div>
          </div>
        </div>
        {/* <!-- copayright --> */}
        <div className="copayright cwhite">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                Copyright &copy;
                <a href="#">Tech__Giant</a> all rights reserved. Powered by
                <a href="#">zcube</a>
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
        {/* <!-- /copayright --> */}
      </footer>
      // <Scart />
      // <Second />
    ];
  }
}
