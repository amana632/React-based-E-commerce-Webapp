import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// render(<App />, document.getElementById("app"));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// import React from "react";
// import { render } from "react-dom";
// import App from "./App";

// render(<App />, document.getElementById("app"));
