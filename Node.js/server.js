const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log('server running');
  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
      firstName: 'John',
      lastName: 'Doe'
    };
    res.end(JSON.stringify(obj));   
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(1337);