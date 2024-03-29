const express = require('express');
const bodyParser = require('body-parser');
const showdown   = require('showdown');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

converter = new showdown.Converter({tables: true});

app.post("/convert", function(req, res, next) {
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(["error", "No data found"]);
    } else {
        text = req.body.content;
        html = converter.makeHtml(text);
        res.json(["markdown", html]);
    }
});
 
app.listen(3000, function() {
    console.log("Server running on port 3000");
   });