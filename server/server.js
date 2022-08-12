const router = require('./router');
require('dotenv').config()
const http = require('http');
const PORT=process.env.PORT||3000
const server = http.createServer(router);

server.listen(PORT,()=>{
console.log(PORT);
})