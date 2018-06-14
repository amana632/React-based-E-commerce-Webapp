import React, { Component } from "react";

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
// import { Aman } from "./carousel";
//requests
var imgurl;
var imgurl2;
var imgurl3;
function reqListener1() {
  var a;
  localStorage.setItem("key1", this.responseText);
  //console.log(localStorage.getItem("key1"));
  var randomNO = Math.floor(Math.random() * 1 + 1);
  var z = JSON.parse(localStorage.getItem("key1"));

  //console.log(z);
  imgurl = z[randomNO].imageUrlStr.split(";");
  imgurl = imgurl[1];
  console.log(imgurl);
  document.getElementById("one").src = imgurl;
}

<<<<<<< HEAD
var o = new XMLHttpRequest();
o.addEventListener("load", reqListener1);
o.open(
=======
var o2 = new XMLHttpRequest();
o2.addEventListener("load", reqListener);
o2.open(
>>>>>>> f52e7cd54aac03c832a21ec4b2c5d01a4845f6ae
  "GET",
  "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;"
);
o2.send();

// two
function reqListener2() {
  var a;
  localStorage.setItem("key2", this.responseText);
  console.log(localStorage.getItem("key2"));
  var randomNO = Math.floor(Math.random() * 3 + 1);
  var z = JSON.parse(localStorage.getItem("key2"));
  console.log(z);
  imgurl2 = z[randomNO].imageUrlStr.split(";");
  imgurl2 = imgurl2[1];
  console.log(imgurl2);
  document.getElementById("two").src = imgurl2;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener2);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_PrinterFilaments&count=100&offset=0;"
);
o.send();
//three
function reqListener3() {
  var a;
  localStorage.setItem("key3", this.responseText);
  console.log(localStorage.getItem("key3"));
  var randomNO = Math.floor(Math.random() * 3 + 1);
  var z = JSON.parse(localStorage.getItem("key3"));
  console.log(z);
  imgurl3 = z[randomNO].imageUrlStr.split(";");
  imgurl3 = imgurl3[1];
  console.log(imgurl3);
  document.getElementById("three").src = imgurl3;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener3);
o.open(
  "GET",
  "http://101.53.137.41/api/?cat=Computers_DesktopPCs_AllInOnePCs&count=100&offset=0;"
);
o.send();

class App extends Component {
  render() {
    return [
      // <Aman />,
      <Navbar />,

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
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text -->
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
              <div className="pro-img">
                <img id="two" src={imgurl2} alt="2" />
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
              <a href="#">Wooden container Bowl</a>
              <a href="#" className="addtocart">
                + Add to cart
              </a>
              <div className="price">$160.00</div>

              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={seventeen} alt="2" />
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={ttwo} alt="2" />
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={seven} alt="2" />
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={nineteen} alt="2" />
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
              </div>
              {/* <!-- /.pro-text --> */}
            </div>
            <div className="col-md-3">
              {/* <!-- .pro-text --> */}
              <div className="pro-text">
                {/* <!-- .pro-img --> */}
                <div className="pro-img">
                  <img src={six} alt="2" />
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
                <a href="#">Wooden container Bowl</a>
                <a href="#" className="addtocart">
                  + Add to cart
                </a>
                <div className="price">$160.00</div>
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
                <a href="#">
                  Buy now /
                  <span>$196.98</span>
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
                <a href="#">
                  Buy now /
                  <span>$196.98</span>
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

      <section className="section-padding">
        {/* <!-- Latest News --> */}
        <div className="container">
          <div className="tittle text-center">
            {/* <h2>Our Blog Posts</h2>
            <p>
              Mirum est notare quam littera gothica quam nunc putamus parum
              claram!
            </p> */}
          </div>
          <div
            className="col-sm-4 col-md-4 wow fadeIn"
            data-wow-duration=".2s"
            data-wow-delay=".1s"
          >
            <div className="news-box">
              <div className="news-img">
                <img src={blogimg1} alt="news-img1" />
              </div>
              <div className="news-text">
                <a href="#">Anteposuerit litterarum formas.</a>
                <p>
                  By
                  <span>Zcubedesign</span> / September 11, 2017
                </p>
                <div className="news-text-content">
                  {" "}
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram, anteposuerit litterarum.{" "}
                </div>
                <a href="#" className="readbtn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-4 wow fadeIn"
            data-wow-duration=".2s"
            data-wow-delay=".1s"
          >
            <div className="news-box">
              <div className="news-img">
                <img src={blogimg2} alt="news-img1" />
              </div>
              <div className="news-text">
                <a href="#">Anteposuerit litterarum formas.</a>
                <p>
                  By
                  <span>Zcubedesign</span> / September 11, 2017
                </p>
                <div className="news-text-content">
                  {" "}
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram, anteposuerit litterarum.{" "}
                </div>
                <a href="#" className="readbtn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-4 col-md-4 wow fadeIn"
            data-wow-duration=".4s"
            data-wow-delay=".3s"
          >
            <div className="news-box">
              <div className="news-img">
                <img src={blogimg3} alt="news-img1" />
              </div>
              <div className="news-text">
                <a href="#">Anteposuerit litterarum formas.</a>
                <p>
                  By
                  <span>Zcubedesign</span> / September 11, 2017
                </p>
                <div className="news-text-content">
                  {" "}
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  claram, anteposuerit litterarum.{" "}
                </div>
                <a href="#" className="readbtn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Latest News --> */}
      </section>,
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
    ];
  }
}

export default App;
