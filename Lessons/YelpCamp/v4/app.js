const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds")



mongoose.connect("mongodb://localhost:27017/yelp_camp_v4", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs")
seedDB()


app.get("/", (req, res) => {
    res.render("landing");
})

// INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB 
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: allCampgrounds
            });
        }
    })

});

// CREATE - Add new campground to DB
app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {
        name: name,
        image: image,
        description: desc
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

// NEW - Show form to create new campground
app.get("/campgrounds/new", (req, res) => {
    res.render("campgrounds/new");
});

// Show - shows more info about one campground
app.get("/campgrounds/:id", (req, res) => {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err)
        } else {
            // render show template with that campground
            res.render("campgrounds/show", {
                campground: foundCampground
            });
        }
    })
    req.params.id

})

// ====================================================
// COMMENTS ROUTES
// ====================================================

app.get("/campgrounds/:id/comments/new", (req, res) => {
    //  find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        err ? console.log(err) :
            res.render("comments/new", {
                campground: campground
            })
    })
})


app.post("/campgrounds/:id/comments", (req, res) => {
    // lookup campground using ID
    Campground.findById(req.params.id, (err, campground) => {
        err ? console.log(err) :
            Comment.create(req.body.comment, (err, comment) => {
                err ? console.log(err) :
                    campgrounds.comments.push(comment)
                campground.save()
                res.redirect("/campgrounds/" + campground._id)
            })
    })
})


app.listen(3000, () => {
    console.log("The YelpCamp Server Is Running!!!");
})