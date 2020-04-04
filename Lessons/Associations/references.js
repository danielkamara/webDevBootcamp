const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// POST - title,  content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Post = mongoose.model("Post", postSchema)

// USER   - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

const User = mongoose.model("User", userSchema)


// Post.create({
//     title: "How to make the best steak pt. 3",
//     content: "djgsgrfywehjdgfhjefdyhehdsjkdfgh"
// }, (err, post) => {
//     User.findOne({
//         email: "bob@gmail.com"
//     }, (err, foundUser) => {
//         err ? console.log(err) :
//             foundUser.post.push(post)
//         foundUser.save((err, data) => {
//             err ? console.log(err) :
//                 console.log(data)
//         })
//     })
// })

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// })

// Find user
// Find all post  

User.findOne({
    email: "bob@gmail.com"
}).populate("post").exec((err, user) => {
err ? console.log(err) :
console.log(user)
})