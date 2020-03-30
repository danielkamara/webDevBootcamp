let express = require("express");
let app = express();
let request = require("request");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    let query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=2b201c09";
    request(url, (error, response, body) => {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        let data = JSON.parse(body);
        res.render("results", {
            data: data
        });
    });
});







app.listen(3000, () => {
    console.log("Movie App has started!!!");
});