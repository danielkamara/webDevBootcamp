let express = require("express");
let app = express();

//  "/" => "Hi There!"
app.get("/", (req, res) => {
    res.send("Hi There!");
});

// "/bye" => "Goodbye"
app.get("/bye", (req, res) => {
    res.send("Goodbye!!");
});

//  "/dog" => "WOOF WOOF!!!"
app.get("/dog", (req, res) => {
    res.send("WOOF WOOF!!!");
});


app.get("/r/:subredditName", (req, res) => {
    let subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");

});

app.get("/r/:subredditName/comments/:id/:title/", (req, res) => {
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!!!");
});

app.get("*", (req, res) => {
    res.send("PAGE DOES NOT EXIST");
});


// Tell Express to listen for request (start server) 
app.listen(3000, () => {
    console.log("Server has started!!!");
});