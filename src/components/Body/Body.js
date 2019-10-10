import React, { Component } from "react";
import "./Body.css";

import Home from "./../Pages/Home/Home";
import Movies from "./../Pages/Movies/Movies";
import User from "./../Pages/User/User";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    switch (this.props.pageToShow) {
      case "HOME":
        return <Home />;
      case "MOVIES":
        return <Movies />;
      case "USER":
        return <User />;
      default:
        return <div>No page selected</div>;
    }
  }
}
