const express = require('express');
const gittags = require('git-tags');

const server = express();

let saveVer = '';
server.get('/', function(req, res) {
    res.send('Welcome to Your Server');
});

server.get('/version', function(req, res) {
    gittags.latest(function(err, version) {
        if (err) {
            res.status(500).send(err);
        } else {
            saveVer = version;
            res.status(200).send(version);
        }
    });
});

server.get('/hello', function(req, res) {
    res.send('Hello World');
});

server.listen(3000, function() {
    console.log('Running on http://localhost:3000');
});
