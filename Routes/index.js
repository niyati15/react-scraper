// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models")
//gets all articles from db
router.use("/api", apiRoutes);

router.route("/api/article").get(function() {


//TODO:
//1. Associate this with a route
//2. Send the a res.json of your return so that you can render on the front end
//3. FOR FRONT END!!! set state with the return you get from res.json.
//4. map through the state in your "html"

//shows all saved articles
axios.get("http://www.echojs.com/").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
      var resultArr = []
      // Now, we grab every h2 within an article tag, and do the following:
      $("article h2").each(function(i, element) {
        // Save an empty result object
   
        var result = {};
        
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
  
          resultArr.push(result)
        // Create a new Article using the `result` object built from scraping
        // db.Article.create(result)
        //   .then(function(dbArticle) {
        //     // View the added result in the console
        //     console.log(dbArticle);
        //     res.json(dbArticle)
        //   })
        //   .catch(function(err) {
        //     // If an error occurred, send it to the client
        //     console.log(err);
        //   });
      });
      // If we were able to successfully scrape and save an Article, send a message to the client
    });
    res.json(resultArr)
})

module.exports = router;