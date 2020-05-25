// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const fs = require('fs');
const fetch = require("node-fetch");



let randomnum = Math.floor(Math.random() * 3);  

 /*
 




 */


setInterval(function(){

var websites = [
    "title13",
  "tile yeet"
];
var second = [
  "second",
"second2"
];
   var r = Math.floor(Math.random() * websites.length);

    var r2 = Math.floor(Math.random() * second.length);

  var goto = (websites[r] || websites[0])
  var second = (second[r2] || second[0])

    let final = { 
 "quote": goto,
  "author": second
    } 
    fetch("http://jsonapithing.glitch.me/quotes.json")

    .then(res => res.json())

      .then(json => {
   var r = Math.floor(Math.random() * json.length);
  var goto = (json[r] || json[0])
const jsonString = JSON.stringify(goto)
fs.writeFile('./info.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
      })
      .catch(error => console.log(error));


}, 30000000);






// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/info.json", (request, response) => {
  response.sendFile(__dirname + "/info.json");
});

app.get("/quotes.json", (request, response) => {
  response.sendFile(__dirname + "/quotes.json");
});

// send the default array of dreams to the webpage

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
