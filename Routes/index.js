// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//scarpes from webpage
router.use("/api", apiRoutes);

//shows all saved articles
router.use("/saved", apiRoutes);

//shows specific article
router.use("/:title", apiRoutes);

//saves specific article
router.use("/:id/save", apiRoutes);

module.exports = router;