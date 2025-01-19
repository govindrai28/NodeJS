//first install the npm i express-session then start work
//&check the slide no. 35
const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({ //we pass options in the form of objects which are compulsary part of this
    secret:"random stuff",
    resave: false,
    saveUninitialized:false //agar user nai login bhi nahi kiya aaise user ko bhi kya apko save karna hai ki nahi nahi hame save nahi karna hai
}));


//In any route we can create session & read
app.get("/create", function(req, res, next) {
    req.session.polo = true;
    res.send("done");
})
app.get("/check", function(req,res,next) {
    console.log(req.session.polo);
})
app.listen(3000);