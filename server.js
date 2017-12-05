var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

// //Connect the database by adding a url to the mongoose instance connection
mongoose = require('mongoose'),

// // Load the created model - product
Car = require('./api/models/controllerListModel')

/* Install bodyParser and use body Parser Parse incomming request bodies
in a middleware before your handelers, available under the req.body property.
It exposes various factories to create middlewares.
All  middlewares will populate the req.bodyproperty with the parsed body,
or and empty object ({}) if there was no body to parse (or an error was returned).*/
bodyParser = require('body-parser');

// // providing a Connect/Express midleware
const cors = require('cors')
app.use(cors());

// // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cars');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // import the routes
var routes = require('./api/routes/controllerListRoutes');
// Register the route
routes(app);

app.use(function (req, res) {res.status(404).send({ url: req.originalUrl + ' not found, I wonder where it is!'})});

app.listen(port);

console.log('Listening on port:' + port + " :) ");