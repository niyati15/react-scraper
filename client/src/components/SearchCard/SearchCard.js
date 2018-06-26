import React from "react";

const SearchCard = () => (
    <div className="container">
    <div className="card">
        <div className="card-header">
            Query
  </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label>Topic</label>
                    <input type="text" className="form-control" id="SearchCard-topic" placeholder="Enter the topic you want to search." />
                </div>
                <div className="form-group">
                    <label>Start Year</label>
                    <input type="number" className="form-control" id="SearchCard-startYear" placeholder="Enter the year you want to start the search from." />
                </div>
                <div className="form-group">
                    <label>End Year</label>
                    <input type="number" className="form-control" id="SearchCard-endYear" placeholder="Enter the year you want to end the search at." />
                </div>
                <button type="submit" className="btn btn-primary" id="SearchCard-submitBtn">Submit</button>
            </form>
        </div>
    </div>
    </div>
);

export default SearchCard;