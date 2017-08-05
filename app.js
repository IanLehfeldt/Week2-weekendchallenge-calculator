var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

//empty array to store data
var calculateArray = [];

//Testing if server responds with Hello World.
// var calculatorArray = 'Hello World'

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Client posts new information to array
app.post('/calculate', function (req, res){
    mathinator(req.body);
    console.log(req.body);
    calculateArray.push(req.body);
    res.sendStatus(201);
})

//Client calls to this app for the calculatorArray when it needs it.
app.get('/calculationsArray', function (req, res){
    console.log('Checking calculation array for calculations');
    res.send(calculateArray);
})

app.get('/clearCalculatorArray', function (req, res){
    console.log('Clearing calculator array ...');
    calculateArray = [];
    res.send(calculateArray);
})

app.listen(port, function(){
    console.log('Currently connected to port', port);
})

function mathinator (object){
    if (object.method == '+'){
        console.log('Mathinator is adding..');
        object.calculation = parseInt(object.X) + parseInt(object.Y);
    }
    else if (object.method == '-'){
        console.log('Mathinator is subtracting..');
        object.calculation = object.X - object.Y;

    }
    else if (object.method == '*'){
        console.log('Mathinator is multiplying..');
        object.calculation = object.X * object.Y;
    }
    else if (object.method == '/'){
        console.log('Mathinator is dividing..');
        object.calculation = object.X / object.Y;
    }
}