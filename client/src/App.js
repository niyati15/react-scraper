import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.js"
import ResultsCard from "./components/ResultsCard/ResultsCard.js"
import API from "./utils/API.js"

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data }), {

          // console.log(articles);
        })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Navbar />

        <Jumbotron />

        <SearchCard />

        <ResultsCard 
          article={this.state.articles} 
        />
      </div>
    );
  }
}

export default Articles;
