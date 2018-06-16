import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { render } from "react-dom";
import ReactDOM from "react-dom";

// function AutoRefresh(t) {
//   setTimeout("location.reload(true);", 1);
// }

var Alert = require("react-bootstrap").Alert;
var Modal = require("react-bootstrap/lib/Modal");
var Popover = require("react-bootstrap/lib/Popover");

var OverlayTrigger = require("react-bootstrap/lib/OverlayTrigger");

var Button = require("react-bootstrap/lib/Button");

var Tooltip = require("react-bootstrap/lib/Tooltip");
var clk = localStorage.getItem("clicked");

console.log(clk);
console.log(localStorage.getItem(clk));
var z = JSON.parse(localStorage.getItem(clk));
console.log(z);
var clickedrandom = localStorage.getItem("rc");
console.log(clickedrandom);
export class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="THE CHOSEN PRODUCT">
        {z[clickedrandom].categories}
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        {/*  bsSize="large" */}
        <Button bsStyle="primary" onClick={this.handleShow}>
          View Item
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <img src={z[clickedrandom].imageUrlStr.split(";")[2]} />
            <h4>Product code</h4>
            <p> {z[clickedrandom].productId}</p>
            <p> {z[clickedrandom].productBrand}</p>
            <p> {z[clickedrandom].title}</p>
            <s>
              <em> MRP : {z[clickedrandom].mrp} </em>
            </s>&nbsp;
            <strong> Special Price : {z[clickedrandom].specialPrice} </strong>
            <p>
              <OverlayTrigger overlay={popover}>
                <a href="#popover">Category</a>
              </OverlayTrigger>{" "}
              .
            </p>
            {/*
            <h4>Tooltips in a modal</h4>
            <p>
              there is a{" "}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{" "}
              here
            </p> */}
            <hr />
            <h4>DESCRIPTION</h4>
            <p> {z[clickedrandom].description}</p>
            <hr />
            <h4>OTHER INFO</h4>
            <p>sellerName: {z[clickedrandom].sellerName}</p>
            <p>sellerNoOfRatings: {z[clickedrandom].sellerNoOfRatings}</p>
            <p>sellerNoOfReviews: {z[clickedrandom].sellerNoOfReviews}</p>
            <p>sellerAverageRating: {z[clickedrandom].sellerAverageRating}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<Example />);
