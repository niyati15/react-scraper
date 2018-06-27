import React, { Component } from "react";
import "./SavedCard.css"

class SavedCards extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Saved Articles
          </div>
        <div className="card-body">
          {this.props.article.map(article => (
            <li className="list-group-item">
              <h4>
                {article.title}
              </h4>
              <p>By {article.author}</p>
              <span className="btn-group pull-right">
                <button className="btn btn-default ">View Article</button>
                <button className="btn btn-primary"> Save</button>
              </span>
            </li>
          ))
          }
        </div>
      </div>
    )
  }
}
export default SavedCards;