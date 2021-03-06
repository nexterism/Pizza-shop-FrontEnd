import React, { Component } from "react";
import Header from "./Sections/Header";
import Story from "./Sections/Story";
import OurCustomers from "./Sections/OurCustomers";
import Pizza from "./Sections/Pizza";

export default class MainPage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Story />
        <OurCustomers />
        <Pizza />
      </div>
    );
  }
}
