const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");


// SCHEMA SETUP 

let campGroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

let Campground = mongoose.model("Campground", campGroundSchema);


// Campground.create({
//     name: "Granite Hill",
//     image: "https://cdn.pixabay.com/photo/2017/08/07/02/34/people-2598902__340.jpg"
// }, (err, campground) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground)
//     }
// })



app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB 
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds", {
                campgrounds: allCampgrounds
            });
        }
    })

});


app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {
        name: name,
        image: image
    }

    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page 
            res.redirect("/campgrounds");
        }
    })


})


app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});


app.listen(3000, () => {
    console.log("The YelpCamp Server Is Running!!!");
})