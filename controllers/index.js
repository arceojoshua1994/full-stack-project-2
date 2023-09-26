// routes/index.js

const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About Us' });
});

// Export the router
module.exports = router;

