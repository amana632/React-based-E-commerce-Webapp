import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Scart } from "./scart";
var myelement;
function funcbarcode() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccpuholder() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}

function funccardreader() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccleaningkit() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccombos() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funchdenclosures() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaptopcombo() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcskindecals() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcmonitor() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcmonitorarms() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpentab() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprintercovers() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcusbgadgets() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcperimonitors() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpprojectors() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpscanners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpocketprinters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprinterfilaments() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclprintermultif() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprintersingle() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcreceiptprinters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcperiscanners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcdeskall() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functowerpc() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcllabatteries() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclacleaning() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclacooling() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaheadphones() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaotg() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclapowerbank() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaworldwide() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaptop() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncaccesspoints() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncantenna() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcnccables() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncdatacards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcnclanadapters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncinterfacecards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncservers() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncrouterantenna() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncrouters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncswitches() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncwirelessusb() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftbusiness() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsofteducation() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftmulti() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftmultiphysical() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftofficephy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftofficekeycards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcofficetools() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcos() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcosdigital() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcoscphy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecurityanti() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecuritydigi() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecurityinternet() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecuritytotal() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcutidigi() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcutiphy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstext() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstinternal() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstpd() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsuppink() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsupptoners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functabcable() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functabmem() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}

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
                <a className="dropdown-item" id="barcode" onClick={funcbarcode}>
                  Barcode_scanner
                </a>
                <a
                  className="dropdown-item"
                  id="cpuholder"
                  onClick={funccpuholder}
                >
                  > CPU Holder
                </a>
                <a
                  className="dropdown-item"
                  id="cardreader"
                  onClick={funccardreader}
                >
                  Card Reader
                </a>
                <a
                  className="dropdown-item"
                  id="cleaningkit"
                  onClick={funccleaningkit}
                >
                  Cleaning Kit
                </a>

                <a className="dropdown-item" id="combos" onClick={funccombos}>
                  Combos
                </a>
                <a
                  className="dropdown-item"
                  id="hdenclosues"
                  onClick={funchdenclosures}
                >
                  HD Enclosures
                </a>
                <a
                  className="dropdown-item"
                  id="laptopaccesssoriescombo"
                  onClick={funclaptopcombo}
                >
                  Laptop Accessories Combos
                </a>
                <a
                  className="dropdown-item"
                  id="skindecals"
                  onClick={funcskindecals}
                >
                  Laptop Skin Decals
                </a>
                <a
                  className="dropdown-item"
                  id="monitortvcover"
                  onClick={funcmonitor}
                >
                  Monitor TV Cover
                </a>
                <a
                  className="dropdown-item"
                  id="monitorarms"
                  onClick={funcmonitorarms}
                >
                  Monitor Arms
                </a>
                <a
                  className="dropdown-item"
                  id="pentablets"
                  onClick={funcpentab}
                >
                  Pen Tablets
                </a>
                <a
                  className="dropdown-item"
                  id="printercovers"
                  onClick={funcprintercovers}
                >
                  Printer Covers
                </a>
                <a
                  className="dropdown-item"
                  id="usbgadgets"
                  onClick={funcusbgadgets}
                >
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
                <a
                  className="dropdown-item"
                  id="portableprojector"
                  onClick={funcpprojectors}
                >
                  Portable projector
                </a>
                <a
                  className="dropdown-item"
                  id="portablescanners"
                  onClick={funcpscanners}
                >
                  Portable Scanner
                </a>

                <a
                  className="dropdown-item"
                  id="pocketprinters"
                  onClick={funcpocketprinters}
                >
                  Printer/Scanner Pocket Printer
                </a>
                <a
                  className="dropdown-item"
                  id="printerfilaments"
                  onClick={funcprinterfilaments}
                >
                  Printer/Scanner Printer Filaments
                </a>
                <a
                  className="dropdown-item"
                  id="printermultif"
                  onClick={funclprintermultif}
                >
                  Printer/Scanner Printer MultiF
                </a>
                <a
                  className="dropdown-item"
                  id="printersingle"
                  onClick={funcprintersingle}
                >
                  Printer/Scanner Printer Single
                </a>
                <a
                  className="dropdown-item"
                  id="receiptprinter"
                  onClick={funcreceiptprinters}
                >
                  Printer/Scanner Receipt printer
                </a>
                <a
                  className="dropdown-item"
                  id="periscanners"
                  onClick={funcperiscanners}
                >
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
                <a
                  className="dropdown-item"
                  id="allinone"
                  onClick={funcdeskall}
                >
                  All in One PCs
                </a>
                <a className="dropdown-item" id="towerpc" onClick={functowerpc}>
                  Tower PCs
                </a>
                <a className="dropdown-item" id="laptops" onClick={funclaptop}>
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
                <a
                  className="dropdown-item"
                  id="lpbatteries"
                  onClick={funcllabatteries}
                >
                  Batteries
                </a>
                <a
                  className="dropdown-item"
                  id="lpcleaning"
                  onClick={funclacleaning}
                >
                  Cleaning Kits
                </a>
                <a
                  className="dropdown-item"
                  id="lpcooling"
                  onClick={funclacooling}
                >
                  Cooling Pads/stands
                </a>
                <a
                  className="dropdown-item"
                  id="lpheadphones"
                  onClick={funclaheadphones}
                >
                  Headphones
                </a>
                <a className="dropdown-item" id="lpotg" onClick={funclaotg}>
                  OTG Adapters
                </a>
                <a
                  className="dropdown-item"
                  id="lppower"
                  onClick={funclapowerbank}
                >
                  PowerBanks
                </a>
                <a
                  className="dropdown-item"
                  id="lpworlld"
                  onClick={funclaworldwide}
                >
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
                <a
                  className="dropdown-item"
                  id="networkkaccess"
                  onClick={funcncaccesspoints}
                >
                  Access Points
                </a>
                <a
                  className="dropdown-item"
                  id="networkantenna"
                  onClick={funcncantenna}
                >
                  Antenna Amplifiers
                </a>
                <a
                  className="dropdown-item"
                  id="networkcables"
                  onClick={funcnccables}
                >
                  Cables
                </a>
                <a
                  className="dropdown-item"
                  id="networkdaracards"
                  onClick={funcncdatacards}
                >
                  Data Cards
                </a>
                <a
                  className="dropdown-item"
                  id="networklanadapters"
                  onClick={funcnclanadapters}
                >
                  LAN Adapters
                </a>
                <a
                  className="dropdown-item"
                  id="networkinterface"
                  onClick={funcncinterfacecards}
                >
                  Network Interface Cards
                </a>
                <a
                  className="dropdown-item"
                  id="networkservers"
                  onClick={funcncservers}
                >
                  Network Servers
                </a>
                <a
                  className="dropdown-item"
                  id="networkrouterantenna"
                  onClick={funcncrouterantenna}
                >
                  Routers Antenna Boosters
                </a>
                <a
                  className="dropdown-item"
                  id="networkrouters"
                  onClick={funcncrouters}
                >
                  Routers
                </a>
                <a
                  className="dropdown-item"
                  id="networkswitches"
                  onClick={funcncswitches}
                >
                  Switches
                </a>
                <a
                  className="dropdown-item"
                  id="networkwirelessusb"
                  onClick={funcncwirelessusb}
                >
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
                <a
                  className="dropdown-item"
                  id="softwarebusiness"
                  onClick={funcsoftbusiness}
                >
                  Business Productivity
                </a>
                <a
                  className="dropdown-item"
                  id="softwareeducational"
                  onClick={funcsofteducation}
                >
                  Educational Media Physical
                </a>
                <a
                  className="dropdown-item"
                  id="softwaremulti"
                  onClick={funcsoftmulti}
                >
                  Multimedia
                </a>
                <a
                  className="dropdown-item"
                  id="softwaremultiphy"
                  onClick={funcsoftmultiphysical}
                >
                  Multimedia Physical
                </a>
                <a
                  className="dropdown-item"
                  id="softwareofficetoolsphy"
                  onClick={funcsoftofficephy}
                >
                  Office Tools Physical
                </a>
                <a
                  className="dropdown-item"
                  id="softwareofficetoolsphykeycards"
                  onClick={funcsoftofficekeycards}
                >
                  Office Tools Physical Key Cards
                </a>
                <a
                  className="dropdown-item"
                  id="softwareofficetoolsphyperpetual"
                  onClick={funcofficetools}
                >
                  Office Tools Physical Perpetual License
                </a>
                <a className="dropdown-item" id="softos" onClick={funcos}>
                  Operating Systems
                </a>
                <a
                  className="dropdown-item"
                  id="softosdigi"
                  onClick={funcosdigital}
                >
                  Operating Systems Digital
                </a>
                <a
                  className="dropdown-item"
                  id="softosphy"
                  onClick={funcoscphy}
                >
                  Operating Systems Physical
                </a>
                <a
                  className="dropdown-item"
                  id="secuanti"
                  onClick={funcsecurityanti}
                >
                  Security Software Antivirus
                </a>
                <a
                  className="dropdown-item"
                  id="secudigi"
                  onClick={funcsecuritydigi}
                >
                  Security Software Digital
                </a>
                <a
                  className="dropdown-item"
                  id="secuinternet"
                  onClick={funcsecurityinternet}
                >
                  Security Software Internet Security
                </a>
                <a
                  className="dropdown-item"
                  id="secutotal"
                  onClick={funcsecuritytotal}
                >
                  Security Software Total Security
                </a>
                <a
                  className="dropdown-item"
                  id="softutidigi"
                  onClick={funcutidigi}
                >
                  Utilities Digital
                </a>
                <a
                  className="dropdown-item"
                  id="softutiphy"
                  onClick={funcutiphy}
                >
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
                <a
                  className="dropdown-item"
                  id="storageext"
                  onClick={funcstext}
                >
                  External HDD
                </a>
                <a
                  className="dropdown-item"
                  id="storageint"
                  onClick={funcstinternal}
                >
                  Internal HDD
                </a>
                <a className="dropdown-item" id="storagepd" onClick={funcstpd}>
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
                <a className="dropdown-item" id="suppink" onClick={funcsuppink}>
                  Inks
                </a>
                <a
                  className="dropdown-item"
                  id="supptoners"
                  onClick={funcsupptoners}
                >
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
                <a
                  className="dropdown-item"
                  id="tabcables"
                  onClick={functabcable}
                >
                  Cables
                </a>
                <a
                  className="dropdown-item"
                  id="tabmemory"
                  onClick={functabmem}
                >
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
                <Router>
                  <div>
                    <ul>
                      {/* <li>
              <Link to={"/"}>Home</Link>
            </li> */}
                      <li>
                        <Link to={"/scart"}>
                          <button className="cart-btn"> VIEW CART </button>
                        </Link>
                      </li>
                    </ul>
                    <hr />

                    <Switch>
                      {/* <Route exact path="/" component={Home} /> */}
                      <Route exact path="/scart" component={Scart} />
                    </Switch>
                  </div>
                </Router>,
                <a href="checkout.html" className="cart-btn">
                  CHECKOUT
                </a>
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
