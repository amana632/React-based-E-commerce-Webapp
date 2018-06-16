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
var myelement;

function funcbarcode() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Barcodescanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccpuholder() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_CPUHolders&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}

function funccardreader() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_CardReaders&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccleaningkit() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Cleaningkits&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funccombos() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_ComputerAccessoriesCombos&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funchdenclosures() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_HardDriveEnclosures&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaptopcombo() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_LaptopAccessoriesCombos&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcskindecals() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_LaptopSkins-Decals&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcmonitor() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_Monitor-TVCovers&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcmonitorarms() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_MonitorArms&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpentab() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_PenTablets&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprintercovers() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_PrinterCovers&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcusbgadgets() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerAccessories_USBGadgets&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcperimonitors() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Monitors&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpprojectors() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_PortableProjectors&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcpscanners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_PortableScanners&count=100&offset=0";
  localStorage.setItem("linktohit", myelement);
}
function funcpocketprinters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_PocketPrinters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprinterfilaments() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_PrinterFilaments&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclprintermultif() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_Printers_MultiF&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcprintersingle() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_Printers_Single&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcreceiptprinters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Printers/Scanners_ReceiptPrinters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcperiscanners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_ComputerPeripherals_Scanners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcdeskall() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_DesktopPCs_AllInOnePCs&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functowerpc() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_DesktopPCs_TowerPCs&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcllabatteries() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_Batteries&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclacleaning() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_CleaningKits&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclacooling() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_CoolingPads/CoolingStands&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaheadphones() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_Headphones&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaotg() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_OTGAdapters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclapowerbank() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_PowerBanks&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaworldwide() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_LaptopAccessories_WorldwideAdaptors&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funclaptop() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Laptops&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncaccesspoints() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_AccessPoints&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncantenna() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_AntennaAmplifiers&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcnccables() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_Cables&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncdatacards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_DataCards&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcnclanadapters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_LANAdapters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncinterfacecards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_NetworkInterfaceCards&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncservers() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_NetworkServers&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncrouterantenna() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_RouterAntennas-Boosters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncrouters() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_Routers&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncswitches() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_Switches&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcncwirelessusb() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_NetworkingandCables_WirelessUSBAdapters&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftbusiness() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_BusinessProductivity&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsofteducation() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_EducationalMedia_Physical&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftmulti() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_Multimedia&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftmultiphysical() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_Multimedia_Physical&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftofficephy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OfficeTools_Physical&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsoftofficekeycards() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OfficeTools_PhysicalKeyCards&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcofficetools() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OfficeTools_Physical_PerpetualLicense&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcos() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OperatingSystem&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcosdigital() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OperatingSystem_Digital&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcoscphy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_OperatingSystem_Physical&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecurityanti() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_SecuritySoftware_AntiVirus&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecuritydigi() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_SecuritySoftware_Digital&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecurityinternet() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_SecuritySoftware_InternetSecurity&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsecuritytotal() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_SecuritySoftware_TotalSecurity&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcutidigi() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_Utilities_Digital&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcutiphy() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Software_Utilities_Physical&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstext() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Storage_ExternalHDD&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstinternal() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Storage_InternalHDD&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcstpd() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Storage_Pendrives&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsuppink() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Supplies_Inks&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function funcsupptoners() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_Supplies_Toners&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functabcable() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_TabletAccessories_Cables&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
function functabmem() {
  myelement =
    "http://101.53.137.41/api/?cat=Computers_TabletAccessories_MemoryCards&count=100&offset=0;";
  localStorage.setItem("linktohit", myelement);
}
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
        <a className="navbar-brand" href="http://localhost:3000/">
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
                  href="/second.js"
                  className="dropdown-item"
                  id="barcode"
                  onClick={funcbarcode}
                >
                  Barcode_scanner
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="cpuholder"
                  onClick={funccpuholder}
                >
                  CPU Holder
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="cardreader"
                  onClick={funccardreader}
                >
                  Card Reader
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="cleaningkit"
                  onClick={funccleaningkit}
                >
                  Cleaning Kit
                </a>

                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="combos"
                  onClick={funccombos}
                >
                  Combos
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="hdenclosues"
                  onClick={funchdenclosures}
                >
                  HD Enclosures
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="laptopaccesssoriescombo"
                  onClick={funclaptopcombo}
                >
                  Laptop Accessories Combos
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="skindecals"
                  onClick={funcskindecals}
                >
                  Laptop Skin Decals
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="monitortvcover"
                  onClick={funcmonitor}
                >
                  Monitor TV Cover
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="monitorarms"
                  onClick={funcmonitorarms}
                >
                  Monitor Arms
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="pentablets"
                  onClick={funcpentab}
                >
                  Pen Tablets
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="printercovers"
                  onClick={funcprintercovers}
                >
                  Printer Covers
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="portableprojector"
                  onClick={funcpprojectors}
                >
                  Portable projector
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="portablescanners"
                  onClick={funcpscanners}
                >
                  Portable Scanner
                </a>

                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="pocketprinters"
                  onClick={funcpocketprinters}
                >
                  Printer/Scanner Pocket Printer
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="printerfilaments"
                  onClick={funcprinterfilaments}
                >
                  Printer/Scanner Printer Filaments
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="printermultif"
                  onClick={funclprintermultif}
                >
                  Printer/Scanner Printer MultiF
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="printersingle"
                  onClick={funcprintersingle}
                >
                  Printer/Scanner Printer Single
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="receiptprinter"
                  onClick={funcreceiptprinters}
                >
                  Printer/Scanner Receipt printer
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="allinone"
                  onClick={funcdeskall}
                >
                  All in One PCs
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="towerpc"
                  onClick={functowerpc}
                >
                  Tower PCs
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="laptops"
                  onClick={funclaptop}
                >
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
                  href="/second.js"
                  className="dropdown-item"
                  id="lpbatteries"
                  onClick={funcllabatteries}
                >
                  Batteries
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="lpcleaning"
                  onClick={funclacleaning}
                >
                  Cleaning Kits
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="lpcooling"
                  onClick={funclacooling}
                >
                  Cooling Pads/stands
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="lpheadphones"
                  onClick={funclaheadphones}
                >
                  Headphones
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="lpotg"
                  onClick={funclaotg}
                >
                  OTG Adapters
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="lppower"
                  onClick={funclapowerbank}
                >
                  PowerBanks
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="networkkaccess"
                  onClick={funcncaccesspoints}
                >
                  Access Points
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkantenna"
                  onClick={funcncantenna}
                >
                  Antenna Amplifiers
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkcables"
                  onClick={funcnccables}
                >
                  Cables
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkdaracards"
                  onClick={funcncdatacards}
                >
                  Data Cards
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networklanadapters"
                  onClick={funcnclanadapters}
                >
                  LAN Adapters
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkinterface"
                  onClick={funcncinterfacecards}
                >
                  Network Interface Cards
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkservers"
                  onClick={funcncservers}
                >
                  Network Servers
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkrouterantenna"
                  onClick={funcncrouterantenna}
                >
                  Routers Antenna Boosters
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkrouters"
                  onClick={funcncrouters}
                >
                  Routers
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="networkswitches"
                  onClick={funcncswitches}
                >
                  Switches
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="softwarebusiness"
                  onClick={funcsoftbusiness}
                >
                  Business Productivity
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwareeducational"
                  onClick={funcsofteducation}
                >
                  Educational Media Physical
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwaremulti"
                  onClick={funcsoftmulti}
                >
                  Multimedia
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwaremultiphy"
                  onClick={funcsoftmultiphysical}
                >
                  Multimedia Physical
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwareofficetoolsphy"
                  onClick={funcsoftofficephy}
                >
                  Office Tools Physical
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwareofficetoolsphykeycards"
                  onClick={funcsoftofficekeycards}
                >
                  Office Tools Physical Key Cards
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softwareofficetoolsphyperpetual"
                  onClick={funcofficetools}
                >
                  Office Tools Physical Perpetual License
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softos"
                  onClick={funcos}
                >
                  Operating Systems
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softosdigi"
                  onClick={funcosdigital}
                >
                  Operating Systems Digital
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softosphy"
                  onClick={funcoscphy}
                >
                  Operating Systems Physical
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="secuanti"
                  onClick={funcsecurityanti}
                >
                  Security Software Antivirus
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="secudigi"
                  onClick={funcsecuritydigi}
                >
                  Security Software Digital
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="secuinternet"
                  onClick={funcsecurityinternet}
                >
                  Security Software Internet Security
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="secutotal"
                  onClick={funcsecuritytotal}
                >
                  Security Software Total Security
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="softutidigi"
                  onClick={funcutidigi}
                >
                  Utilities Digital
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="storageext"
                  onClick={funcstext}
                >
                  External HDD
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="storageint"
                  onClick={funcstinternal}
                >
                  Internal HDD
                </a>
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="storagepd"
                  onClick={funcstpd}
                >
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
                <a
                  href="/second.js"
                  className="dropdown-item"
                  id="suppink"
                  onClick={funcsuppink}
                >
                  Inks
                </a>
                <a
                  href="/second.js"
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
                  href="/second.js"
                  className="dropdown-item"
                  id="tabcables"
                  onClick={functabcable}
                >
                  Cables
                </a>
                <a
                  href="/second.js"
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
                <img src={icon1} alt="top-ico3" />{" "}
                <span>Cart ({toshowcounter})</span>{" "}
              </a>
            </li>
            {/*
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
                      {/* <li> */}
            {/* <Link to={"/"}>Home</Link> */}
            {/* </li> */}
            {/* <li>
                        <Link to={"/scart"}>
                          <button className="cart-btn"> VIEW CART </button>
                        </Link>
                      </li>
                    </ul>
                    <hr />

                    <Switch>
                     
                      <Route exact path="/scart" component={Scart} />
                    </Switch>
                  </div> */}{" "}
            {/* //     </Router>,
            //     <a href="checkout.html" className="cart-btn">
            //       CHECKOUT
            //     </a>
            //   </div>
            // </li> */}
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
