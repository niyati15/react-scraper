const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");



// Matches with "/api/books"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);


router
.router("/:id")
.get(articlesController.findById)
.delete(articlesController.remove)

module.exports = router;