const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const Post = require("./models/post")
const User = require("./models/user")







Post.create({
    title: "How to make the best steak pt. 4",
    content: "GDSJHGGHJSGHJDSAJGHDGJDHKSHJKHJKLDSAHJKDS"
}, (err, post) => {
    User.findOne({
        email: "bob@gmail.com"
    }, (err, foundUser) => {
        err ? console.log(err) :
            foundUser.post.push(post)
        foundUser.save((err, data) => {
            err ? console.log(err) :
                console.log(data)
        })
    })
})

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// })

// Find user
// Find all post  

// User.findOne({
//     email: "bob@gmail.com"
// }).populate("post").exec((err, user) => {
// err ? console.log(err) :
// console.log(user)
// })