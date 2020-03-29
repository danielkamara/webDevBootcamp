let express = require("express");
let app = express();
let request = require("request");


app.get("/results", (req, res) => {
request("http://www.omdbapi.com/?i=tt3896198&apikey=2b201c09", (error, response, body) => {
console.error('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
let results = JSON.parse(body);
res.send(results);
});
});







app.listen(3000, () => {
    console.log("Movie App has started!!!");
});