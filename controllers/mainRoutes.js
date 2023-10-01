const router = require('express').Router();
const withAuth = require('../utils/auth');

// JG replaced this bellow !!

//router.get('/', async (req, res) => {
 // res.render('home');
//});

//for this        jg

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.render('home');
    } else {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });

      const user = userData.get({ plain: true });

      res.render('home', {
        ...user,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', async (req, res) => {
  res.render('homepage');
});

//log in  jg
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/faq');
    return;
  }

  res.render('login');
});


router.get('/popular-titles', (req, res) => {
  
  res.render('popular-titles');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/featured-recipes', (req, res) => {
  res.render('featured-recipes');
});

//http://localhost:3001/profile    jg
// Use withAuth middleware to prevent access to route
router.get('/faq', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('faq', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/american', async (req, res) => {
  {{title_american}}
  res.render('american');
});

router.get('/asian', async (req, res) => {
   {{title_asian}}
  res.render('asian');
});

router.get('/latin', async (req, res) => {
   {{title_latin}}
  res.render('latin');
});

router.get('/caribbean', async (req, res) => {
   {{title_caribbean}}
  res.render('caribbean');
});

router.get('/mediterranean', async (req, res) => {
   {{title_mediterranean}}
  res.render('mediterranean');
});


// app.get('/form', (req, res) => {
//   res.render('form'); 
// });


// app.post('/submit', (req, res) => {
//   const data = req.body; 

 
//   res.redirect('/success');
// });

//http://localhost:3001/
// router.get('/', (req, res) => {
//     const data = {
//       imageUrl: '/images/Carne-Asada-35.jpg' 
//     };
  
//     res.render('main', data);
//   });

//http://localhost:3001/featured-recipes/
// router.get('/featured-recipes', (req, res) => {
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

// res.render('featured-recipes');
// });

//http://localhost:3001/popular-titles
// router.get('/popular-titles', (req, res) => {   
//     const data = { 
//     populartitles: [
//       { name: 'Latin', imageUrl: 'category1.jpg', id: 1 },
//       { name: 'Asian', imageUrl: 'category2.jpg', id: 2 },
//       { name: 'Caribbean', imageUrl: 'category3.jpg', id: 3},
//       { name: 'Mediterranean', imageUrl: 'category4.jpg', id: 4},
//       { name: 'American', imageUrl: 'category5.jpg', id: 5},
//     ],
//   };
//   res.render('popular-titles', data);
// });

//http://localhost:3001/about/
// router.get('/about', (req, res) => {
//   const data = {
//     pageTitle: 'About Us',
//     aboutContent: [
//           {
//             paragraph: "Recipeasy was founded in 2023 by Joshua Arceo and Juan Galvez in Miami, Florida. Our mission is to teach people how to cook a plethora of recipes from all around the world, regardless of age or background. We believe that cooking is an essential life skill that brings people together and allows for creativity and self-expression."
//           },
//           {
//             paragraph: "Our platform is designed as a social-media style recipe database, where users can share their favorite recipes, discover new ones, and connect with a community of passionate home cooks. Whether you're a seasoned chef or just starting out, Recipeasy is here to support you on your culinary journey."
//           }
//         ]
//       };
    
//       res.render('about', data);
//     });
    

module.exports = router;
