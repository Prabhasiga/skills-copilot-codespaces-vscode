// Create a web server that listens on port 3000 
// and serves the following JSON data when it receives a GET request to the path '/comments':

// [
//     {
//         "id": 1,
//         "body": "foo"
//     },
//     {
//         "id": 2,
//         "body": "bar"
//     }
// ]

// You can use the following code as a starting point:

// var express = require('express');
// var app = express();

// app.get('/comments', function(req, res) {
//     // your code here
// });

// app.listen(3000);

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