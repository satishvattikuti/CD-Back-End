const express = require('express');
const gittags = require('git-tags');

const server = express();

server.get('/', function(req, res) {
    gittags.latest(function(err, version) {
        if (err) {
            res.status(500).json({ version: 'Error' });
        } else {
            res.status(200).json({ version });
        }
    });
});


server.listen(3000, function() {
    console.log('Running on http://localhost:3000');
});