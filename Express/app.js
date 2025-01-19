//check Slide - 32 & npm i express
const express = require('express')
const app = express()//express dabee mai jo bhi tha vo khol diya kolne kai baad jo bhi bahar aayega vo hamne app mai store kar liya



//these are the middlewares
app.use(function(req, res , next){
    console.log("hey hello");
    next();
})

//2nd middle 
app.use(function( req, res, next){
    console.log("hey hello kaise ho");
    next();
})
app.get("/", function(req, res) {
    res.send("Something about main page");
})


//app.get(route, handler)
app.get('/about', function (req, res)//get matlab aise saare url jinse aap kuch server sai managaoge frontend kai through server sai kuch maanga rahe ho
 {//app variable sai vo sab kuch kar sakte hai jo express kar saktha hai
  res.send('something about about page');
})

//handle nonexist Routes in Express.js isko last mai rakte hai
app.get("*", function(req, res) {
    res.send("If nothing works, i will");
})

app.listen(3000)