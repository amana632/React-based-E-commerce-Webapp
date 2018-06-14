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

export class SignUp extends Component {
  render() {
    return [
      <form>
        <div className="form-row">
          <div className="form-group col-md-2">
            <label for="inputZip">UserName</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="PRINCESS RASHI"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Aman"
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Agarwal"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Mobile No.</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    ];
  }
}
