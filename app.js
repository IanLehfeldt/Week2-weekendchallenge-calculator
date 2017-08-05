var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

//Testing if server responds with Hello World.
var calculatorArray = 'Hello World'

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Client calls to this app for the calculatorArray when it needs it.
app.get('/calculationsArray', function (req, res){
    res.send(calculatorArray);
})

app.listen(port, function(){
    console.log('Currently connected to port', port);
})