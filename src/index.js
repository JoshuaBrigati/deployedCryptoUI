import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./index.css";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
