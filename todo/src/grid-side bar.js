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

import { Navbar } from "./navbar";
export class Second extends Component {
  render() {
    return [
      <div id="preloader">
        <div id="loading"> </div>
      </div>,

      <Navbar />,

      <section className="grid-shop blog">
        {/* <!-- .grid-shop --> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <div className="weight">
                <div className="title">
                  <h2>Product Categories</h2>
                </div>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                        >
                          Mobile &amp; Accessories
                        </a>
                        <i className="indicator fa fa-angle-right  pull-right" />
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">Laptop &amp; Computer </a>
                            </li>
                            <li>
                              <a href="#">Accessories </a>
                            </li>
                            <li>
                              <a href="#">Gaming </a>
                            </li>
                            <li>
                              <a href="#">Mac Computers </a>
                            </li>
                            <li>
                              <a href="#">Ultrabooks</a>
                            </li>
                            <li>
                              <a href="#">Printers &amp; Ink </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                        >
                          Electronics
                        </a>
                        <i className="indicator fa fa-angle-right pull-right" />
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">Laptop &amp; Computer </a>
                            </li>
                            <li>
                              <a href="#">Accessories </a>
                            </li>
                            <li>
                              <a href="#">Gaming </a>
                            </li>
                            <li>
                              <a href="#">Mac Computers </a>
                            </li>
                            <li>
                              <a href="#">Ultrabooks</a>
                            </li>
                            <li>
                              <a href="#">Printers &amp; Ink </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                        >
                          Men's Fashion
                        </a>
                        <i className="indicator fa fa-angle-down pull-right" />
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse in"
                    >
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Suits </a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                        >
                          Women's Fashion
                        </a>
                        <i className="indicator fa fa-angle-right pull-right" />
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Suits </a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFive"
                        >
                          Kitchen
                        </a>
                        <i className="indicator fa fa-angle-right pull-right" />
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Suits </a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseSix"
                        >
                          Sports
                        </a>
                        <i className="indicator fa fa-angle-right pull-right" />
                      </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Suits </a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseSeven"
                        >
                          Furniture
                        </a>
                        <i className="indicator fa fa-angle-right pull-right" />
                      </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="product-categories">
                          <ul>
                            <li>
                              <a href="#">T-shirts</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Suits </a>
                            </li>
                            <li>
                              <a href="#">Jackets</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="weight">
                <div className="title">
                  <h2>filter by price</h2>
                </div>
                {/* <!-- Bootstrap Pricing Slider by ZsharE --> */}
                <div className="button-slider">
                  <div className="btn-group">
                    <div className="btn btn-default">
                      <input
                        id="bootstrap-slider"
                        type="text"
                        data-slider-min="1"
                        data-slider-max="500"
                        data-slider-step="1"
                        data-slider-value="50"
                      />
                      <div className="valueLabelblck">Filter</div>
                      <div className="valueLabel">
                        $<span id="sliderValue">50</span>
                      </div>
                      <div className="valueLabel">
                        $<span id="sliderValue2">500</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Bootstrap Pricing Slider by ZsharE --> */}
              </div>
              <div className="weight">
                <div className="title">
                  <h2>colors filte</h2>
                </div>
                <div className="color">
                  <ul>
                    <li>
                      <a href="#" className="color-1">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-2">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-3">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-4">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-5">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-6">
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="color-7">
                        <span />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weight">
                <div className="title">
                  <h2>size options</h2>
                </div>
                <div className="product-categories size">
                  <ul>
                    <li>
                      <a href="#">L </a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">S</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weight">
                <div className="title">
                  <h2>BEST PRODUCTS</h2>
                </div>
                <div className="toprating-box">
                  <ul>
                    <li>
                      <div className="col-sm-3 col-md-3">
                        <img src="assets/images/Products/13.jpg" alt="13" />
                      </div>
                      <div className="col-sm-9 col-md-9">
                        <div className="pro-text">
                          {" "}
                          <a href="#">Wooden container Bowl</a>
                          <strong>$96.00</strong> <span>$160.00</span>{" "}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-sm-3 col-md-3">
                        <img src="assets/images/Products/14.jpg" alt="14" />
                      </div>
                      <div className="col-sm-9 col-md-9">
                        <div className="pro-text">
                          {" "}
                          <a href="#">Wooden container Bowl</a>
                          <strong>$160.00</strong>{" "}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-sm-3 col-md-3">
                        <img src="assets/images/Products/15.jpg" alt="15" />
                      </div>
                      <div className="col-sm-9 col-md-9">
                        <div className="pro-text">
                          {" "}
                          <a href="#">Wooden container Bowl</a>
                          <strong>$160.00</strong>{" "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-9">
              <div className="grid-spr">
                <div className="col-sm-5 col-md-5">
                  {" "}
                  <span>Showing 1-12 of 30 relults</span>{" "}
                </div>
                <div className="col-sm-7 col-md-7 text-right">
                  <div className="select-option">
                    <select>
                      <option value="New Pots">New</option>
                      <option value="Recent Pots">Recent</option>
                      <option value="Featured Pots">Defaul sorting</option>
                    </select>
                  </div>{" "}
                  <a href="#" className="grid-view-icon">
                    <i className="fa fa-th-large" aria-hidden="true" />
                  </a>{" "}
                  <a href="#" className="list-view-icon">
                    <i className="fa fa-list" aria-hidden="true" />
                  </a>{" "}
                </div>
              </div>
              <div
                className="row wow zoomIn animated"
                data-wow-duration=".5s"
                data-wow-delay=".2s"
              >
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/21.jpg" alt="2" />
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
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/26.jpg" alt="2" />
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
                        {" "}
                        <span className="new-text">NEW</span>{" "}
                        <span className="pres-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/24.jpg" alt="2" />
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
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/17.jpg" alt="2" />
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
                        {" "}
                        <span className="new-text">NEW</span>{" "}
                        <span className="pres-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/22.jpg" alt="2" />
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
                        {" "}
                        <span className="new-text">NEW</span>{" "}
                        <span className="pres-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/7.jpg" alt="2" />
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
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/19.jpg" alt="2" />
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
                        {" "}
                        <span className="new-text">NEW</span>{" "}
                        <span className="pres-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/6.jpg" alt="2" />
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
                        {" "}
                        <span className="discount-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
                <div className="col-md-4">
                  {/* <!-- .pro-text --> */}
                  <div className="pro-text">
                    {/* <!-- .pro-img --> */}
                    <div className="pro-img">
                      {" "}
                      <img src="assets/images/Products/9.jpg" alt="2" />
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
                        {" "}
                        <span className="discount-text">-15%</span>{" "}
                      </div>
                      {/* <!-- /.hover-img --> */}
                    </div>
                    {/* <!-- /.pro-img --> */}
                    <a href="#">Wooden container Bowl</a>{" "}
                    <a href="#" className="addtocart">
                      + Add to cart
                    </a>
                    <div className="price">$160.00</div>
                  </div>
                  {/* <!-- /.pro-text --> */}
                </div>
              </div>
              <div className="pagetions">
                {/* <!-- .pagetions --> */}
                <div className="col-md-6">
                  <ul>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 text-right">
                  {" "}
                  <span>Showing 1-12 of 30 relults</span>{" "}
                </div>
                {/* <!-- /.pagetions --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.grid-shop --> */}
      </section>,
      <section className="subscribe text-center">
        {/* <!-- .subscribe --> */}
        <div className="container">
          <h2>Get Discount Info</h2>
          <p>
            ubscribe to the Outstock mailing list to receive updates on new
            arrivals, special offers and
            <br /> other discount information.
          </p>
          <input type="text" placeholder="Subscribe to our newsletter..." />
          <input type="button" value="Subscribe" />{" "}
        </div>
        {/* <!-- /.subscribe --> */}
      </section>,
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              {/* <!-- f-weghit --> */}
              <div className="f-weghit">
                {" "}
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
                {" "}
                Copyright &copy; <a href="#">Outstock</a> all rights reserved.
                Powered by <a href="#">zcube</a>{" "}
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
        {/* <!-- /copayright --> */},
      </footer>,
      {
        /* <!--  quick popup  --> */
      },
      <div
        className="modal fade bwidth"
        id="quickModal"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    {/* <!-- left side --> */}
                    <div className="col-sm-6 col-md-6">
                      {/* <!-- product gallery --> */}
                      <div
                        id="home-slider3"
                        className="carousel fadein carousel-fade"
                        data-ride="carousel"
                      >
                        {/* <!-- .home-slider --> */}
                        <div className="carousel-inner">
                          <div className="item active">
                            <div className="caption">
                              <img
                                src="assets/images/Products/1.jpg"
                                alt="qoute-icon"
                              />
                            </div>
                          </div>
                          <div className="item">
                            <div className="caption">
                              <img
                                src="assets/images/Products/11.jpg"
                                alt="qoute-icon"
                              />
                            </div>
                          </div>
                          <div className="item">
                            <div className="caption">
                              <img
                                src="assets/images/Products/8.jpg"
                                alt="qoute-icon"
                              />
                            </div>
                          </div>
                          <div className="item">
                            <div className="caption">
                              <img
                                src="assets/images/Products/16.jpg"
                                alt="qoute-icon"
                              />
                            </div>
                          </div>
                          <ul className="carousel-indicators">
                            <li
                              data-target="#home-slider3"
                              data-slide-to="0"
                              className="active"
                            >
                              {" "}
                              <img
                                src="assets/images/Products/1.jpg"
                                alt="qoute-icon"
                              />
                            </li>
                            <li
                              data-target="#home-slider3"
                              data-slide-to="1"
                              className=""
                            >
                              {" "}
                              <img
                                src="assets/images/Products/11.jpg"
                                alt="qoute-icon"
                              />
                            </li>
                            <li
                              data-target="#home-slider3"
                              data-slide-to="2"
                              className=""
                            >
                              {" "}
                              <img
                                src="assets/images/Products/8.jpg"
                                alt="qoute-icon"
                              />
                            </li>
                            <li
                              data-target="#home-slider3"
                              data-slide-to="3"
                              className=""
                            >
                              {" "}
                              <img
                                src="assets/images/Products/16.jpg"
                                alt="qoute-icon"
                              />
                            </li>
                          </ul>
                        </div>
                        {/* <!-- /.home-slider --> */}
                      </div>
                      {/* <!-- / product gallery --> */}
                    </div>
                    {/* <!-- left side -->
                            <!-- right side --> */}
                    <div className="col-sm-6 col-md-6">
                      {/* <!-- .pro-text --> */}
                      <div className="pro-text product-detail">
                        {/* <!-- /.pro-img --> */}
                        <a href="#">
                          <h4>Wooden Container Bowl</h4>
                        </a>
                        <div className="star2">
                          <ul>
                            <li className="red-color">
                              <i className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li className="red-color">
                              <i className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li className="red-color">
                              <i className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true" />
                            </li>
                            <li>
                              <a href="#">10 review(s)</a>
                            </li>
                            <li>
                              <a href="#"> Add your review</a>
                            </li>
                          </ul>
                        </div>
                        <p className="price-detail">
                          $160.00 <span>$254.00</span>
                        </p>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate velit esse molestie consequat, vel illum
                          dolore eu feugiat nulla facilisis at vero eros et
                          accumsan et iusto odio dignissim qui blandit praesent
                          luptatum zzril delenit augue duis dolore te feugait
                          nulla facilisi.{" "}
                        </p>
                        <ul className="short-ul">
                          <li>Claritas est etiam processus dynamicus.</li>
                          <li>
                            Qui sequitur mutationem consuetudium lectorum.{" "}
                          </li>
                          <li>Claritas est etiam processus dynamicus.</li>
                        </ul>
                        <div className="size">
                          <p>Size *</p>
                          <div className="select-option">
                            <select>
                              <option value="28">28</option>
                              <option value="32">32</option>
                              <option value="34">34</option>
                              <option value="36">36</option>
                              <option value="Featured Pots">
                                - Please select -
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="size">
                          <p>Color *</p>
                          <div className="select-option">
                            <select>
                              <option value="Black">Black</option>
                              <option value="Red">Red</option>
                              <option value="Featured Pots">
                                - Please select -
                              </option>
                            </select>
                          </div>
                        </div>
                        <form>
                          <div className="numbers-row">
                            <input
                              name="french-hens"
                              id="french-hens"
                              value="3"
                              type="text"
                            />
                            <div className="inc button">+</div>
                            <div className="dec button">-</div>
                          </div>
                        </form>
                        <a href="#" className="addtocart2">
                          Add to cart
                        </a>
                        <a href="#" className="hart">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                        <a href="#" className="hart">
                          <i className="fa fa-sliders" aria-hidden="true" />
                        </a>
                        <div className="tag">
                          <p>
                            Categories:{" "}
                            <span>
                              Bags, Blazers, Boots, Jackets, Pants, Shirts.
                            </span>
                          </p>
                          <p>
                            Tag: <span>outerwear.</span>
                          </p>
                        </div>
                        <div className="share">
                          <ul>
                            <li>Share:</li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-dribbble"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-linkedin"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ];
  }
}
