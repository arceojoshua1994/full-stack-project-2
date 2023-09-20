const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// This code renders the "homepage.handlebars" template when a user accesses the root path

app.get('/', (req, res) => {
    res.render('home');
  });

// Serves the "public" folder using Express

  app.use(express.static('public'));

  



  