const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})




// USER   - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
})

const User = mongoose.model("User", userSchema)

// const newUser = new User({
//     email: "colt@udemy.edu",
//     name: "Colt Steele"
// })

// newUser.post.push({
// title: "How to brew polyjuice potion",
// content: "Just kidding. Go to potions class to learn it!"
// })

// newUser.save((err, user) => {
//     err ? console.log(err) :
//         console.log(user)
// })



// const newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// })


// newPost.save((err, post) => {
//     err ? console.log(err) :
//         console.log(post)
// })

User.findOne({
    name: "Colt Steele"
}, (err, user) => {
    // err ? console.log(err) :
        user.post.push({
            title: "3 things I really hate",
            content: "Stray cats. Stray dogs. Rats/Mice"
        })
    user.save((err, user) => {
        err ? console.log(err) :
            console.log(user)
    })
})