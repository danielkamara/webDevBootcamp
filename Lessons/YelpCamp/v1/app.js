const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
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
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
    console.log("The YelpCamp Server Is Running!!!");
});