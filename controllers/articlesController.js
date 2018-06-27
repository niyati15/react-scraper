const db = require("../models");

module.exportss = {
    findAll: function(req, res) {
        db.Article
        .find(req.query)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req,res) {
        db.Article
        .findById(req.params.id)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Article
        .create(req.body)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Article
        .findById({ _id: req.params.id })
        .then(dbArticle => dbArticle.remove())
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    }
};