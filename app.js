var express = require('express');
var app  = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpcamp');
  
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//Schema
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model('campground', campgroundSchema);

// Campground.create({
//   name: "Yosemite",
//   image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Yosemite_USA.JPG",
//   description: "Best I ever had!"
// }, function(err, campground) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(campground);
//   }
// });

// var campgrounds = [
//   {name: "Yosemite", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Yosemite_USA.JPG"},
//   {name: "Sedona", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6HTjpOt9EISK7ISqzasZPdHJPsYM7bW9uP9v1YtppVzewFFoGQg"},
//   {name: "Mt Zion", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtvx9mnuG1-s5iTQi3W-AFtubttGFqu_WwE962AHL34B8svHMeCqNNp3nL"},
//   {name: "Yosemite", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Yosemite_USA.JPG"},
//   {name: "Sedona", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6HTjpOt9EISK7ISqzasZPdHJPsYM7bW9uP9v1YtppVzewFFoGQg"},
//   {name: "Mt Zion", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtvx9mnuG1-s5iTQi3W-AFtubttGFqu_WwE962AHL34B8svHMeCqNNp3nL"},
//   {name: "Yosemite", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Yosemite_USA.JPG"},
//   {name: "Sedona", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6HTjpOt9EISK7ISqzasZPdHJPsYM7bW9uP9v1YtppVzewFFoGQg"},
//   {name: "Mt Zion", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtvx9mnuG1-s5iTQi3W-AFtubttGFqu_WwE962AHL34B8svHMeCqNNp3nL"}
// ];

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  //Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {campgrounds: allCampgrounds});
    }
  });
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new');
});

//SHOW more info about one campground
app.get('/campgrounds/:id', function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      res.render('show', {campgrounds: foundCampground});
    }
  });
});


//CREATE
app.post('/campgrounds', function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  Campground.create(newCampground, function(err, campground) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});



app.listen(3000, function () {
  console.log('Listening on port 3000!');
})