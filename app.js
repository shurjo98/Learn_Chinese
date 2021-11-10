//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');




const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));
//


// ***************************
// GLOBAL VARIABLES
// ***************************

// pass through user data on every route


app.get("/", function(req,res) {
  res.render("index");
});



app.get("/index", function(req,res) {
  res.render("index");
});

app.get("/page2", function(req,res) {
  res.render("page2");
});






app.get("/aboutus", function(req,res) {
  res.render("aboutus");

});




// app.get("/page3", function(req,res) {
//   res.render("page3");
// });








let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Successfully");
});
