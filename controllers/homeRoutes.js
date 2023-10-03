const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Recipe, User } = require('../models');
const path = require('path');

// jg added //
// router.get('/', async (req, res) => {
//   try {
//     if (!req.session.logged_in) {
//       res.render('home');
//     } else {
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//       });

//       const user = userData.get({ plain: true });

//       res.render('home', {
//         ...user,
//         logged_in: req.session.logged_in,
//       });
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// JG replaced this bellow !!

router.get('/', async (req, res) => {
 res.render('home');
});


 

// //for this        jg
// router.get('/recipe/:id', async (req, res) => {
//   try {
//     const projectData = await Recipe.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const recipe = projectData.get({ plain: true });

//     res.render('recipe', {
//       ...recipe,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


 // jg commented out bellow

router.get('/homepage', async (req, res) => {
  res.render('homepage');
}); 

//log in and signup      jg
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/faq');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/faq');
    return;
  }

  res.render('signup');
});


router.get('/popular-titles', (req, res) => {
  
  res.render('popular-titles');
});

router.get('/')

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/featured-recipes', (req, res) => {
  res.render('featured-recipes');
});

//profile    jg
// Use withAuth middleware to prevent access to route
router.get('/faq', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: recipe }],
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

router.get('/popular-categories', async (req, res) => {
  res.render('popular-categories', );
 });

 router.get('/featured-recipes', async (req, res) => {
  res.render('featured-recipes', );
 });

 router.get('/homepage', async (req, res) => {
  res.render('homepage', );
 });

 router.get('/popular-categories', async (req, res) => {
  res.render('popular-categories', );
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




module.exports = router;
