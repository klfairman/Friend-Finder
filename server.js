//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
// const port = process.env.PORT || 4000;
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, '/app/routing/apiRoutes'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes'))(app);
// require(path.join(__dirname, './app/data/friends'))(app);

// app.listen(port);
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });