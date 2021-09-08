import Header from "./components/Header/Header";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import React from "react";
import SuggestedNames from "./components/Names/SuggestedNames";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: "Select the good name for your wonderful project!",
      imageExpansion: true,
      SuggestedNames: [],
    };
  }

  handlechange = (text) => {
    this.setState({
      imageExpansion: !text,
      SuggestedNames: text ? name(text) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          imgSize={this.state.imageExpansion}
          headTitle={this.state.headerText}
        />
        <SearchBox handleChange={this.handlechange} />
        <SuggestedNames SuggestedNames={this.state.SuggestedNames} />
      </div>
    );
  }
}

export default App;
