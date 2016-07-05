var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupControllers');
var apiController = require('./controllers/apiController');

//default port for express or 3000
var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));

//templating engine
app.set('view engine', 'ejs');

//database connection, mongodb is a single connection no need to disconnect
mongoose.connect(config.getDbConnectionString());

//imported a function from setupControllers
setupController(app);
apiController(app);

app.listen(port);