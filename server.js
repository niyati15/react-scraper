const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./Routes");
const app = express();
const PORT = process.env.PORT || 3001;

//define middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//serve up static assets (usuallt on heroku)
if(process.env.NODE_ENV === "production")
{
    app.use(express.static("client/buid"));
}
//add all routes
app.use(routes);
//connection to MONGO DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
//starts server
app.listen(PORT, function() {
    console.log("Servernow listening on PORT: ", PORT);
});