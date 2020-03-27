let express = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    let thing = req.params.thing;
    res.render("love", {
        thingVar: thing
    });

});

app.get("/post", (req, res) => {
    let post = [{
            title: "Crazy In Love",
            author: "Beyonce"
        },
        {
            title: "Reasonable Doubt",
            author: "Jay-Z"
        },
        {
            title: "The Carters",
            author: "Jay-Z & Beyonce"
        },
    ]
    res.render("post", {post: post});
})


app.listen(3000, () => {
    console.log("Server is listening");
});