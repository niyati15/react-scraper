import React from "react";

const SearchCard = () => (
    <div class="card">
        <div class="card-header">
            Query
  </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label>Topic</label>
                    <input type="text" class="form-control" id="SearchCard-topic" placeholder="Enter the topic you want to search." />
                </div>
                <div class="form-group">
                    <label>Start Year</label>
                    <input type="number" class="form-control" id="SearchCard-startYear" placeholder="Enter the year you want to start the search from." />
                </div>
                <div class="form-group">
                    <label>End Year</label>
                    <input type="number" class="form-control" id="SearchCard-endYear" placeholder="Enter the year you want to end the search at." />
                </div>
                <button type="submit" class="btn btn-primary" id="SearchCard-submitBtn">Submit</button>
            </form>
        </div>
    </div>
);

export { default } from "SearchCard";