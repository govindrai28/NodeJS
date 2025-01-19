//install the npm i express-session & connect-flash
//see slide no. 36
const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

app.use(expressSession({
    secret:"anything you like",
    resave:false,
    saveUninitialized:false
}))

app.use(flash()); 
//ab hum flash messages use kar sakte hai kaise

app.get("/", function(req, res, next) {//agar koi / pai aataa hai tho hum usse bolenge data create karo server pai
    req.flash("error", "Invalid Crededntials");//req.flash("kisnaamsaidatasavekarnahai", "aurkyadatasavekarnaahi")
    res.redirect("/error");

})
app.get("/error", function(req, res, next) {
    let message = req.flash('error');
    res.send(message);
})
app.listen(3000);
