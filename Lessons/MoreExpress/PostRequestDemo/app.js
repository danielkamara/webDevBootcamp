let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
res.render("home");
})


app.post("/addfriend",(req, res) => {
res.send("YOU HAVE REACHED THE POST ROUTE!!!");
});

app.get("/friends", (req, res) => {
let friends = ["Ryan", "Fari", "Charles", "Kevin", "Kwame"];
res.render("friends", {friends: friends});
});


app.listen(3000, () => {
    console.log("Server is running!!!!");
});