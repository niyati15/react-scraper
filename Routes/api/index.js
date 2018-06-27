const router = require("express").Router();
// const articlesController = require("../../controllers/articlesController");
const articlesController = require('../../controllers/articlesController')



// Matches with "/api/article"
router.route("/article")
  .get(articlesController.findAll)
  .post(articlesController.create);


router
.route("/:id")
.get(articlesController.findById)
.delete(articlesController.remove)

module.exports = router;