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

app.post('/calculate', function (req, res){
    console.log(req.body);
    mathinator(req.body);
    calculateArray.push(req.body);
    res.sendStatus(201);
})

//Client calls to this app for the calculatorArray when it needs it.
app.get('/calculationsArray', function (req, res){
    console.log('Checking calculation array for calculations');
    res.send(calculateArray);
})

app.listen(port, function(){
    console.log('Currently connected to port', port);
})

function mathinator (object){
    if (object.method == 'add'){
        console.log('Mathinator is adding..');
        
    }
    else if (object.method == 'subtract'){
        console.log('Mathinator is subtracting..');
        
    }
    else if (object.method == 'multiply'){
        console.log('Mathinator is multiplying..');
   
    }
    else if (object.method == 'divide'){
        console.log('Mathinator is dividing..');
    
    }
}