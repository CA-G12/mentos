const router = require('./router');

const http = require('http');
const server = http.createServer(router);

server.listen(3000)