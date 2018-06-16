// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import { Main } from "./main";
class App extends Component {
  render() {
    return [
      <Router>
        <div>
          <nav class="navbar navbar-light bg-light">
            <Link to={"/second.js"}>
              {" "}
              <button class="btn btn-light" type="SUCCESS">
                Product{" "}
              </button>
            </Link>

            <Link to={"/scart"}>
              <button class="btn btn-light" type="SUCCESS">
                !! VIEW YOUR CART!!
              </button>
            </Link>
          </nav>

          <Switch>
            <Route exact path="/second.js" component={Second} />
          </Switch>
          <Switch>
            <Route exact path="/scart" component={Scart} />
          </Switch>
        </div>
      </Router>,
      <Navbar />,
      <Main />

      // <Table />,
    ];
  }
}
export default App;
