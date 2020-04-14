# YelpCamp
- Add Landing Page
- Add Campgrounds Page that list all campgrounds

Each Campground has:
- Name
- Image

# Layout and Basic Styling
- Create a Header & Footer partials
- Add Bootstrap

# Creating New Campgrounds
- Setup new campground POST route
- Add in body-parser
- Setup route to show form
- Add basic unstyled form

# Style the campgrounds page
- Add a better header/title
- Make campgrounds display in a grid

# Style the Navbar and Form
- Add a navbar to all templates
- Style the new campground form


# Add Mongoose (v2)
- Install and configure mongoose
- Setup campground model
- Use campground model inside of my routes!!!

# Show Page
- Review the RESTFUL routes I've built
- Add description to my campground model
- Show db.collection.drop()
- Add a show route/template


# Refactor Mongoose Code
- Create  a models directory
- Use module.exports
- Require everything correctly!

# Add Seeds.js file
- Run the seeds file every time the server starts

# Add the Comment model
- Make my errors go away!!!
- Display comments on the campground show page

# Comment New/Create
- Discuss nested routes
- Add the comment new and create routes
- Add the new comment form

# Style SHow page

- Add sidebar to show page
- Display comments nicely




RESTFUL ROUTES

Name         Path             HTTP Verb    Purpose  
====================================================
INDEX       /dogs             GET          Display a list of all dogs
NEW         /dogs/new         GET          Displays a form to make a new dog
CREATE      /dogs             POST         Add new dog to DB
SHOW        /dogs/:id         GET          Shows info about one dog
EDIT        /dogs/:id/edit    GET          Show edit form for one dog
UPDATE      /dogs/:id         PUT          Update a particular dog, then redirects somewhere
Destroy     /dogs/:id         DELETE       Delete a particular dog, then redirects somewhere