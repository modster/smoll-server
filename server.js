const http = require('http');
http.createServer().on('request', (request, response) => {
  response.end('smoll server');
}).listen(8080);
