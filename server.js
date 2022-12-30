const server = http.createServer();
server.on('request', (request, response) => {
  response.end('🍺')
});