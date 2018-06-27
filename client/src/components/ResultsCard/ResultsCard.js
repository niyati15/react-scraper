import React from "react";
import "./ResultsCard.css"

const ResultCards = props => (
  <div className="card">
    <div className="card-header">
      Results
      </div>
    <div className="card-body">
      <li className="list-group-item">
        <h4>
          Title:
      </h4>

        <span className="btn-group pull-right">
          <button className="btn btn-default ">View Article</button>
          <button className="btn btn-primary"> Save</button>
        </span>
        <p>Date Published:</p>
      </li>
    </div>

  </div>
)
6
export default ResultCards