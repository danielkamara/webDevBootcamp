let express = require("express");
let app = express();


// Visiting "/"
// should print "Hi there, welcome to my assignment!" ===
//     === === === === === === === === === === === === === === === === === === === === =
app.get("/", (req, res) => {
    res.send("Hi there, welcome to my assignment!");
});

//     Visiting "/speak/pig"
// should print "The pig says 'Oink'"
// Visiting "/speak/cow"
// should print "The cow says 'Moo'"
// Visiting "/speak/dog"
// should print "The dog says 'Woof Woof!'" ===
//     === === === === === === === === === === === === === === === === === === === === =
app.get("/speak/:animal", (req, res) => {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    }
    let animal = req.params.animal.toLowerCase();
    let sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

//     Visiting "/repeat/hello/3"
// should print "hello hello hello"
// Visiting "/repeat/hello/5"
// should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2"
// should print "blah blah"

app.get("/repeat/:message/:times", (req, res) => {
let message = req.params.message;
let times = Number(req.params.times);
let result = '';

for(let i = 0; i < times; i++) {
result += message + " ";
}
res.send(result);
});



// If a user visits any other route, print:
//     "Sorry, page not found... What are you doing with your life?"
app.get("*", (req, res) => {
    res.send("Sorry, page not found... What are you doing with your life?");
});



// Tell Express to listen for request (start server) 
app.listen(3000, () => {
    console.log("Server has started!!!");
});