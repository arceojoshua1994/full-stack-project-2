const express = require('express');
const router = express.Router();

//http://localhost:3001/
router.get('/', (req, res) => {
    const data = {
      pageTitle: 'Welcome to Recipeasy!',
      welcomeContent: [
        {
          paragraph: "Welcome to Recipeasy, your go-to platform for discovering and sharing delicious recipes from around the world!"
        },
        {
          paragraph: "Whether you're a seasoned chef or just starting out in the kitchen, Recipeasy is here to make your cooking experience easy, fun, and full of flavor."
        }
      ]
    };
  
    res.render('homepage', data);
  });

//http://localhost:3001/featured-recipes/
router.get('/featured-recipes', (req, res) => {
  // const data = {
  //   featuredRecipes: [
  //     { 
  //       title: 'Carne Asada',
  //       imageUrl: 'image2.jpg',
  //       description: 'Description: Tender and flavorful grilled steak, marinated in a zesty blend of citrus and spices. Perfect for tacos, burritos, or as a main dish with rice and beans.' 
  //     },
  //     { 
  //       title: 'Shrimp Pad Thai',
  //       imageUrl: 'image2.jpg',
  //       description: 'Description: A classic Thai dish featuring succulent shrimp, stir-fried with rice noodles, crunchy peanuts, and fresh herbs in a tangy tamarind sauce. A harmonious blend of sweet, sour, and savory flavors.' 
  //     },
  //     { 
  //       title: 'Oxtail Stew',
  //       imageUrl: 'image2.jpg',
  //       description: 'Description: Hearty and comforting, this stew features oxtail simmered to tender perfection with aromatic vegetables, herbs, and a rich broth. Served over a bed of rice, it is a soul-warming delight.' 
  //     },
  //     { 
  //       title: 'Beef Souvlaki',
  //       imageUrl: 'image2.jpg',
  //       description: 'Description: A Greek favorite, Beef Souvlaki consists of marinated and skewered beef, grilled to juicy perfection. Served with pita bread, tzatziki sauce, and a medley of fresh veggies.' 
  //     },
  //     { 
  //       title: 'Lemon Pepper Chicken Wings',
  //       imageUrl: 'image2.jpg',
  //       description: 'Description: Crispy chicken wings, seasoned with zesty lemon and aromatic black pepper, then baked to golden perfection. These wings are a crowd-pleaser, perfect for game day or any gathering.' 
  //     }
  //   ]
  // };

res.render('featured-recipes');
});

//http://localhost:3001/popular-categories
router.get('/popular-categories', (req, res) => {   
    const data = { 
    popularCategories: [
      { name: 'Latin', imageUrl: 'category1.jpg', id: 1 },
      { name: 'Asian', imageUrl: 'category2.jpg', id: 2 },
      { name: 'Caribbean', imageUrl: 'category3.jpg', id: 3},
      { name: 'Mediterranean', imageUrl: 'category4.jpg', id: 4},
      { name: 'American', imageUrl: 'category5.jpg', id: 5},
    ],
  };
  res.render('popular-categories', data);
});

//http://localhost:3001/about/
router.get('/about', (req, res) => {
  const data = {
    pageTitle: 'About Us',
    aboutContent: [
          {
            paragraph: "Recipeasy was founded in 2023 by Joshua Arceo and Juan Galvez in Miami, Florida. Our mission is to teach people how to cook a plethora of recipes from all around the world, regardless of age or background. We believe that cooking is an essential life skill that brings people together and allows for creativity and self-expression."
          },
          {
            paragraph: "Our platform is designed as a social-media style recipe database, where users can share their favorite recipes, discover new ones, and connect with a community of passionate home cooks. Whether you're a seasoned chef or just starting out, Recipeasy is here to support you on your culinary journey."
          }
        ]
      };
    
      res.render('about', data);
    });
    

module.exports = router;
