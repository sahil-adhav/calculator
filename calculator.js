const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 1611;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`<h1>Answer is ${result}.</h1>`);
});

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
    var w = Number(req.body.w);
    var h = Number(req.body.h);
    var result = w + h;
    res.send(`<h1>Answer is ${result}.</h1>`);
});

app.listen(port, () => {
    console.log(`App up and running at port : ${port}`);
});