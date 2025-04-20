const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const authRoute=require("./routes/authRoute");
const blogRoute=require("./routes/blogRoute");
const app=express();
app.use(bodyParser.json());
app.use('/api/auth', authRoute);
app.use('/api/blogs', blogRoute);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('frontend'));
app.use(express.static('frontend/assets'));

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/blogs_form', function(req, res) {
    res.render('blogs_form');
});

app.get('/', function(req, res) {
    res.render('index', { backgroundImage: "/assets/christopher-gower-m_HRfLhgABo-unsplash.jpg" });
});

app.get('/featured_post', function(req, res) {
    res.render('featured_post', { backgroundImage: "/assets/christopher-gower-m_HRfLhgABo-unsplash.jpg" });
});

app.get('/about', function(req, res) {
    res.render('about', { backgroundImage: "/assets/christopher-gower-m_HRfLhgABo-unsplash.jpg" });
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/blogs',function(req,res){
    res.render('blogs');
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});