const express = require('express');

const app = express();


app.get('/hello', (req, res) => {
    res.send('First version of back end');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))