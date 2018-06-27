import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Navbar from "./components/Navbar/Navbar.js"
import ResultsCard from "./components/ResultsCard/ResultsCard.js"
import API from "./utils/API.js"

class App extends Component {
state = {
  articles: []
}

componentDidMount(){
  this.loadArticles();
}

loadArticles = () => {
  API.getArticles()
  .then(articles => {
    console.log(articles);
  })
  .catch(err => console.log(err))
}

  render() {
    return (

      <div className="container">
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
