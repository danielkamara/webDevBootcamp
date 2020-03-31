const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// // adding a new cat to the db

// let george = new Cat({
//     name: "Mr Grumpy",
//     age: 5,
//     temperament: "Mean"
// });

// george.save((err, cat) => {
//     if (err) {
//         console.log("SOMETHING WENT WRONG!!!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, (err, cat) => {
if(err) {
    console.log(err)
} else {
    console.log(cat);
}
});

// retrieve all cats from the DB and console.log each one 

Cat.find({},(err,cats) => {
if(err) {
    console.log("OH NO, ERROR!");
    console.log(err);
} else {
    console.log("ALL THE CATS......");
    console.log(cats);
}
})