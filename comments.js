// Create web server
var express = require('express');
var app = express();
app.get('/comments', function(req, res) {
    res.json([
        {
            "id": 1,
            "body": "foo"
        },
        {
            "id": 2,
            "body": "bar"
        }
    ]);
});
app.listen(3000);