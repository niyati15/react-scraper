import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Navbar from "./components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (

      <div className="container">


        <Navbar>
        </Navbar>

        <Jumbotron>
        </Jumbotron>

        <SearchCard>
        </SearchCard>
      </div>
    );
  }
}

export default App;
