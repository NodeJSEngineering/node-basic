// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

// const command = process.argv[2]
// if (command === 'add') {
//  console.log('Adding note!')
// } else if (command === 'remove') {
//  console.log('Removing note!')
// }
// import fs module in which writeFile, readFile function is defined.
const fsLibrary = require('fs')

// Data which will need to add in a file.
// let data = "Hello world."

// Write data in 'newfile.txt' .
// fsLibrary.writeFile('newfile.txt', data, (error) => {

// // In case of a error throw err exception.
// if (error) throw err;
// })


// Reading data in utf-8 format which is a type of character set.
// Instead of 'utf-8' it can be other character set also like 'ascii'
// fsLibrary.readFile('test.txt', 'utf-8', (err, data) => {
// if (err) throw err;

// // Converting Raw Buffer to text
// // data using tostring function.
// console.log(data.toString());
// })

// function createFile(){
// var object = new ActiveXObject("Scripting.FileSystemObject");
// var file = object.CreateTextFile("indxcd.txt", false);
// file.WriteLine('Hello World');
// file.WriteLine('Hope is a thing with feathers, that perches on the soul.');
// file.Close();
// }

// To open a new file-
// let newfile = new ActiveXObject("Scripting.FileSystemObject");
// let openFile = newfile.OpenTextFile("C:\\testfile.txt", 1, true);

// To write data to a file-
// var editFile = newfile.CreateTextFile("c:\\Demofile.txt", true);
// var editFile = newfile.CreateTextFile("Demofile.txt", true);
// editFile.WriteLine("Add sample text to the file...");
// editFile.WriteLine('steadyAdvice');
// editFile.Close();



// Fetch any file(images, text file) URL-

var http = require('http');
var fs = require('fs');
var url = require('url');
// Create a server
http.createServer( function (request, response) {
  // Parse the request containing file name
  var pathname = url.parse(request.url).pathname;
  // console.log(url.parse(request.url))
  // Print the name of the file for which request is made.
  console.log("Request for " + pathname + " received.");
  // Read the requested file content from file system
  // Non-Blocking Code Example-
  fs.readFile(pathname.substr(1), function (err, data) {
     if (err) {
        console.log(err);
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        response.writeHead(404, {'Content-Type': 'text/html'});
        return;
     }else {  
        //Page found    
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/html'});  
        // Write the content of the file to response body
        response.write(data.toString());      
     }
     // Send the response body
     response.end();
  }); 
}).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');


// var readData = fs.readFileSync('test.txt');
// console.log(readData.toString());
// console.log("Program Ended");



// const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({
//  command: 'add',
//  describe: 'Add a new note',
//  handler: function () {
//  console.log('Adding a new note!')
//  }
// })
// console.log(yargs.argv)


// yargs.command({
//  command: 'add',
//  describe: 'Add a new note',
//  builder: {
//  title: {
//  describe: 'Note title',
//  demandOption: true,
//  type: 'string'
//  },
//  body: {
//  describe: 'Note body',
//  demandOption: true,
//  type: 'string'
//  }
//  },
//  handler: function (argv) {
//  console.log('Title: ' + argv.title)
//  console.log('Body: ' + argv.body)
//  }
// })


const geocode = (address, callback) => {
 setTimeout(() => {
 const data = {
 latitude: 0,
 longitude: 0
 }
 callback(data)
 }, 2000)
}
geocode('Philadelphia', (data) => {
 console.log(data)
})
