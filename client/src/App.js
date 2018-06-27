import React, { Component } from 'react';
import SearchCard from "./components/SearchCard/SearchCard.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import ResultsCard from "./components/ResultsCard/ResultsCard.js";
import API from "./utils/API.js";
import Delete from './components/Delete/Delete.js';
import SaveArticle from './components/SaveArticle/SaveArticle.js';

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
        this.setState({articles: res.data}), {
        
        // console.log(articles);
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
        </SearchCard> <br></br>
        <SaveArticle />
        <Delete /><br></br>

        <div>

          {this.state.articles.length ? (
            <ul>
              {this.state.articles.map(article => (
                <li>
                  {/* <Link to={"/articles/" + article._id}> */}
                    <strong>
                      {article.title} by {article.author}
                    </strong> 
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          ) : (
              <h3>No Results to Display</h3>
            )}

        </div>
      </div>
    );
  }
}

export default Articles;
