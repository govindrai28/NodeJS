//Slide - 40
const express = require('express');
const app = express();

app.get("/", function(req, res, next) {
    console.log(req.method);
})
app.listen(3000);