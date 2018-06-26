import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Navbar from "./components/Navbar/Navbar.js"
import ResultsCard from "./components/ResultsCard/ResultsCard.js"
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
        </Navbar>
      <Jumbotron>
        </Jumbotron>
        
      <SearchCard>
      </SearchCard>
      <ResultsCard>
      </ResultsCard>

      </div>
    );
  }
}

export default App;
