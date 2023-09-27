var mysql = require('mysql');
var dotenv = require('dotenv');

dotenv.config({path: './.env'});

// Connection to MySQL
var db = mysql.createConnection({
  host:     process.env.DATABASE_HOST,
  user:     process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

function connect(done) {
  db.connect(done);
}

module.exports = { db: db, connect: connect };

//  let you access to the database instance from every file with just one line: //

// var db = require('./controllers/db').db; //