const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/root-application.js'));
});

app.listen(process.env.PORT || 8000, function(){
    console.log('Your node js server is running');
});
