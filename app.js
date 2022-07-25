
console.log("Hello World!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// To create the server you have to use require directive to ready the HTTP module and store the returned HTTP instance into an HTTP variable. Here We used the HTTP instance that we created and call createServer method to create a server instance and then we bind it at port 8081 using the listen to method associated with the server instance. Pass request and response parameters in a function. Here is the sample implementation which always returns "Hello World".

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'text/plain' });   // Send the HTTP header, HTTP Status: 200 : OK, Content Type: text/plain
  console.log('got http://127.0.0.1:8081/');
  res.write('hi');
  // if a request is made through the browser on this port number, then the server application will send a 'Hello' World' response to the client. http://localhost:8081
  res.end('Hello World\n');  // Send the response body as "Hello World"
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");

// npm i express
const express = require("express");
const app = express();
// req.query Property-
// It is an object containing the property for each query string parameter in the route.
app.get('/profile', function (req, res) {
  console.log(req.query.name);
  res.send();
});

// To run the above code http://localhost:3000/profile?name=adam
