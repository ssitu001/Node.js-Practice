var Todos = require('../models/toDoModels');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {
    //seed database
    var starterTodos = [
      {
        username: "test",
        todo: "Buy milk",
        isDone: false,
        hasAttachment: false
      },      {
        username: "test",
        todo: "Feed Dog",
        isDone: false,
        hasAttachment: false
      },      {
        username: "test",
        todo: "Learn Node",
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.insertMany(starterTodos, function(err, results) {
      res.send(results);
    });

  });
}