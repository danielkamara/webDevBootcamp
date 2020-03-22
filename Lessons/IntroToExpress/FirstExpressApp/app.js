let express = require("express");
let app = express();

//  "/" => "Hi There!"
app.get("/", (req, res) => {
res.send("Hi There!");
});

// "/bye" => "Goodbye"
app.get("/bye", (req, res) => {
    res.send("Goodbye!!");
})

//  "/dog" => "MEOW"
app.get("/dog", (req, res) => {
    res.send("WOOF WOOF!!!");
})



// Tell Express to listen for request (start server) 
app.listen(3000,  () =>{
    console.log("Serving has started!!!")
});