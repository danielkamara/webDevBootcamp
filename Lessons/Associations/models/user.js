const mongoose = require("mongoose")



// USER   - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

module.exports = mongoose.model("User", userSchema)