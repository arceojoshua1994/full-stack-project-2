// *********************************************************************************
// recipe-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all of the recipes
  app.get("/api/recipe", function(req, res) {   // Missing:  insert prices
    db.Book.findAll({}).then(function (dbBook) {
      console.log('In .get /api/recipe - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });
    
  /* 
  [
    {
        "id": 1,
        "title": "Gilead",
        "subtitle": "",
        "authors": "Marilynne Robinson",
        "categories": "Fiction",
        "thumbnail": "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "description": "A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It‚Äôs 1956 in Gilead, Iowa, towards the end of the Reverend Ames‚Äôs life, and he is absorbed in recording his family‚Äôs story, a legacy for the young son he will never see grow up. Haunted by his grandfather‚Äôs presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend‚Äôs lost son who",
        "published_year": 2004,
        "average_rating": "4",
        "num_pages": 247,
        "ratings_count": 361,
        "price": null,
        "createdAt": "2020-07-19T18:13:29.000Z",
        "updatedAt": "2020-07-19T18:13:29.000Z"
    },
  ]
  */

  // Get a single recipe by its id
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.categories]
    }).then(function (dbBook) {
      console.log('In .get /api/recipes - findOne()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbRecipes: ', dbRecipe);
      res.json(dbRecipe);
    });
  });


  // Get all the recipes within a category by its category name
  app.get("/api/recipes/category/:category", function(req, res) {
    db.Recipe.findAll({
      where: {
        categories: req.params.category
      },
      }).then(function (dbBook) {
      console.log('In .get /api/books/:category - findAll()');
      console.log('req.params.category: ', req.params.category);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    }); // include: [db.Author]
   
  });

  
  // POST route for saving a new recipe
  app.post("/api/books", function(req, res) {
    db.Book.create(req.body).then(function (dbBook) {
      console.log('In .POST /api/books - create()');
      console.log('req.body: ', req.body);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  
  // DELETE route for deleting posts
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBook) {
      console.log('In .DELETE /api/books - destroy()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });


  // PUT route for updating posts
  app.put("/api/books", function(req, res) {
    db.Book.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbBook) {
      console.log('In .PUT /api/books - update()');
      console.log('req.body.id: ', req.body.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

};