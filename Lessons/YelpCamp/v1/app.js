const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");


let campgrounds = [{

        name: "Salmon Creek",
        image: "https://cdn.pixabay.com/photo/2016/11/08/05/03/adventure-1807495__340.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://cdn.pixabay.com/photo/2017/08/07/02/34/people-2598902__340.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"
    }
]


app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {

    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});


app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {
        name: name,
        image: image
    }
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});


app.listen(3000, () => {
    console.log("The YelpCamp Server Is Running!!!");
});