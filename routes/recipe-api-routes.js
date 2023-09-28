// *********************************************************************************
// recipe-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all of the recipes
  app.get("/api/recipe", function(req, res) {  
    db.recipe.findAll({}).then(function (dbRecipe) {
      console.log('In .get /api/recipe - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });
    
  // Get a single recipe by its id
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.categories]
    }).then(function (dbRecipe) {
      console.log('In .get /api/recipe - findOne()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });


  // Get all the recipes within a category by its category name
  app.get("/api/recipe/category/:category", function(req, res) {
    db.Recipe.findAll({
      where: {
        categories: req.params.category
      },
      }).then(function (dbRecipe) {
      console.log('In .get /api/recipe/:category - findAll()');
      console.log('req.params.category: ', req.params.category);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
   
  });

  
  // POST route for saving a new recipe
  app.post("/api/recipe", function(req, res) {
    db.Recipe.create(req.body).then(function (dbRecipe) {
      console.log('In .POST /api/recipe - create()');
      console.log('req.body: ', req.body);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });

  
  // DELETE route for deleting posts
  app.delete("/api/recipe/:id", function(req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      console.log('In .DELETE /api/recipe - destroy()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });


  // PUT route for updating posts
  app.put("/api/recipe", function(req, res) {
    db.Recipe.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbRecipe) {
      console.log('In .PUT /api/recipe - update()');
      console.log('req.body.id: ', req.body.id);
      console.log('dbRecipe: ', dbRecipe);
      res.json(dbRecipe);
    });
  });

};