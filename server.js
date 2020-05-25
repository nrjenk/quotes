
const express = require("express");
const app = express();
const fs = require('fs');
const fetch = require("node-fetch");



let randomnum = Math.floor(Math.random() * 3);  

 /*
 

lol why are you here ????


 */


setInterval(function(){


    fetch("https://nate-quote-api.herokuapp.com/quotes.json")

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


}, 300);
// 500 miliseconds seems like the time that people would take to refresh the page and fetch a new quote, right??
// well maybe
// btw im talking to myself
// im going insane
// also someone else made the quotes json thing but k

// k i fixed it to 300



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
