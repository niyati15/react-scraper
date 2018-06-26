import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">New York Times Scraper</h1>
            <hr className="my-4"></hr>
            <p className="lead">View New York time</p>
        </div>
    </div>
);


export default Jumbotron;