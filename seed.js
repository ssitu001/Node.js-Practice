var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: "Blah1",
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzE5yQfdJiu4wkr-kW2QNx3YqGv7UNH4aCaG1Xao8uCcwwoUL4',
    description: "blahhhhh"
  },  {
    name: "Blah2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjfTZAJcmNhUKrULBvSfGiA-7snGBhKYUrCMpFU6oJJsqfreA",
    description: "ffffffff"
  },  {
    name: "Blah3",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuv46UP0Me6znlULV7fYMsvkkyALfaf1D7e6jD41rbDjmQri0D",
    description: "ffffffff"
  }
];

function seedDB() {
  Campground.remove({}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('removed campgrounds')
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err) {
            console.log(err);
          } else {
            console.log('added campgrounds');
            //create a comment
            Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Wharren"
            }, function(err, comment) {
              if(err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log('created new comment')
              }
            })
          }
        });
      });
    }
  });  
}

module.exports = seedDB;