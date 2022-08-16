
console.log("Hello World!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'text/plain' });   
  console.log('got http://127.0.0.1:8081/');
  res.write('hi');
  res.end('Hello World\n'); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});
