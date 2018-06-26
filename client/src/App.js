import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Container from "./components/Container/Container.js"
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "container">
      <Jumbotron>
        </Jumbotron>
      <SearchCard>
      </SearchCard>
      </div>
    );
  }
}

export default App;
