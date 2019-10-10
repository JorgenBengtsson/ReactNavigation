import React, { Component } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = { pageToShowInBody: "" };
  }
  render() {
    return (
      <>
        <Header
          onChange={selectedPage =>
            this.setState({ pageToShowInBody: selectedPage })
          }
        />
        <Body pageToShow={this.state.pageToShowInBody} />
        <Footer />
      </>
    );
  }
}
