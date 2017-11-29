const express = require('express');
const gittags = require('git-tags');

const server = express();

server.get('/version', function(req, res) {
    gittags.latest(function(err, version) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(version);
        }
    });
});

server.get('/hello', function(req, res) {
    res.send("Your server Says hello");
});

server.listen(3000, function() {
    console.log('Running on http://localhost:3000');
});