
// Basic example to Handle GET Requests in Node.js-
// The 'request' module can be used to get information from web sites. The information would contain the entire content of the web page requested from the relevant web site.

// >npm install request

var request = require("request");
request("http://www.google.com",function(error,response,body)
{
           console.log(body);
});


// To run the file

// >node request.js

