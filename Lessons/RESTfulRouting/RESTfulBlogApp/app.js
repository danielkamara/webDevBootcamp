const expressSanitizer = require('express-sanitizer'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    port = 3000




// APP CONFIG 
mongoose.connect('mongodb://localhost/restful_blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(expressSanitizer())



// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
})
const Blog = mongoose.model('Blog', blogSchema)

// Blog.create({
//     title: 'Test Blog',
//     image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
//     body: 'HELLO THIS IS A BLOG POST!!!'
// })

//  RESTFUL ROUTES
app.get('/', (req, res) => res.redirect('/blogs'))

// INDEX ROUTE 
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        err ? console.log('ERROR') :
            res.render('index', {
                blogs: blogs
            })
    })
})
// NEW ROUTE
app.get('/blogs/new', (req, res) => {
    res.render('new');
})
// CREATE ROUTE
app.post('/blogs', (req, res) => {
    //  Create blog
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, (err, newBlog) => {
        err ? res.render('new')
            // redirect to the index
            :
            res.redirect('/blogs')
    })
})

//  SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') :
            res.render('show', {
                blog: foundBlog
            })
    })
})

//  EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') :
            res.render('edit', {
                blog: foundBlog
            })
    })
})

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        err ? res.redirect('/blogs') :
            res.redirect('/blogs/' + req.params.id)
    })
})

// DELETE ROUTE 
app.delete('/blogs/:id', (req, res) => {
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, (err) => {
        err ? res.redirect('/blogs') :
            res.redirect('/blogs')
    })
    // redirect somewhere

})




app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))