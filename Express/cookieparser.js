const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", function(req, res, next) {
    res.send("hey");
})
app.get("/check", function(req, res, next) {
    //cookies ko read karne kai liye package chaiye which is a cookie parser
    console.log(req.cookies.name);
    res.send("checking");
})
app.get("/banned", function(req, res, next) {
    //res.cookie("kisnamesaibrowsermaivaluesetkarnihai","aurkyavaluesetkarnihai") that is how you set the cookie in your browser
    res.cookie("name", "harsh");
    res.send("banned");
})
app.listen(3000);