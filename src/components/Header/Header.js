import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <nav>
          <a
            href=""
            onClick={event => {
              this.props.onChange("HOME");
              event.preventDefault();
            }}
          >
            Home
          </a>
          <a
            href=""
            onClick={event => {
              this.props.onChange("MOVIES");
              event.preventDefault();
            }}
          >
            Movies
          </a>
          <a
            href=""
            onClick={event => {
              this.props.onChange("USER");
              event.preventDefault();
            }}
          >
            User
          </a>
          <a className="login" href="">
            Login
          </a>
        </nav>
      </div>
    );
  }
}
