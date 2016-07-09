var express = require('express');
var app  = express();
var bodyParser = require('body-parser');

  
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: "Yosemite", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Yosemite_USA.JPG"},
  {name: "Sedona", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6HTjpOt9EISK7ISqzasZPdHJPsYM7bW9uP9v1YtppVzewFFoGQg"},
  {name: "Mt Zion", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtvx9mnuG1-s5iTQi3W-AFtubttGFqu_WwE962AHL34B8svHMeCqNNp3nL"}
];

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new');
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  campgrounds.push({name: name, image: image});
  res.redirect('/campgrounds');
});



app.listen(3000, function () {
  console.log('Listening on port 3000!');
})