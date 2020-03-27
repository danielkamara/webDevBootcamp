let express = require("express");
let app = express();
let bodyParser = require("body-parser"); 


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let friends = ["Ryan", "Fari", "Charles", "Kevin", "Kwame"];

app.get("/", (req, res) => {
res.render("home");
})


app.post("/addfriend",(req, res) => {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", (req, res) => {
res.render("friends", {friends: friends});
});


app.listen(3000, () => {
    console.log("Server is running!!!!");
});