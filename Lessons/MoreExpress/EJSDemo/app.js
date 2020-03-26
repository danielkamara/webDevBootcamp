let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    let thing = req.params.thing;
    res.render("love.ejs", {
        thingVar: thing
    });


    app.get("/post", (req, res) => {
        let post = [{
                title: "I don't know what i'm doing!!!!",
                author: "Daniel Kamara"
            },
            {
                title: "Reasonable Doubt",
                author: "Jay-Z"
            },
            {
                title: "Crazy In Love",
                author: "Beyonce"
            }
        ];
        res.render("post.ejs", {
            post: post
        });
    });

});


app.listen(3000, () => {
    console.log("Server is listening");
});