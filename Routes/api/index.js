const router = require("express").Router();

router.get("/articles", function(req, res){
    console.log("Hello there!");
});

module.exports = router;