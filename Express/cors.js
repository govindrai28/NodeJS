//npm i express,cors
//slide:-37
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());//all routes are accessible through by any other domain allow us our server to sharing data

app.get("/",function(req, res, next) {
    res.send("hey");
})
app.get("/sharable", cors(), function(req, res, next) {//if i want to share only this route only then & comment the app.use(cors());
    res.send("hey");
})
app.listen(3000);

