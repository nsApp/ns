var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	  = require('passport');
var port        = process.env.PORT || 8080;
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors        = require('cors');

// Configuration
mongoose.connect('mongodb://localhost/');

// get our request parameters
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

// Use the passport package in our application
app.use(passport.initialize());

// Route (GET http://localhost:8080)
// app.get('/', function(req, res) {
//   res.send('Hello! The API is at http://localhost:' + port + '/api');
// });

app.get('/welcome', function (req,res) {
  res.sendFile(__dirname + '/src/pages/welcome/welcome.html');
});

app.get('/signup', function (req,res) {
  res.sendFile(__dirname + '/src/pages/signup/signup.html')
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port 8080");
