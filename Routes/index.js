// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
//packages that does th scraping
var cheerio = require("cheerio");

//scarpes from webpage
app.get("/scrape", function(req, res){
    axios.get("http://www.echojs.com/").then(function(response) {
        var $ = cheerio.load(response.data);
    })
});

//shows all saved articles
app.get("/saved", function(req, res){

});

//shows specific article
app.get("/:title", function(req,res){

});

//saves specific article
app.post("/:id/save", function(req,res){
    
});