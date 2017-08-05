$(document).ready(function () {
    console.log('Jquery is being sourced!!');
    //updateCalculator();
   

    $('#addButton').on('click', function () {
        console.log('Add button was click!');
        calculatorInput();
        mathButton = 'add';
        sendToServer();
    })

    $('#subtractButton').on('click', function () {
        console.log('Subtract button was click!');
        calculatorInput();
        mathButton = 'subtract';
        sendToServer();
    })

    $('#multiplyButton').on('click', function () {
        console.log('Multiply button was click!');
        calculatorInput();
        mathButton = 'multiply';
        sendToServer();
    })

    $('#divideButton').on('click', function () {
        console.log('Divide button was click!');
        calculatorInput();
        mathButton = 'divide';
        sendToServer();
    })
});

function calculatorInput(){
    inputX = $('#variableX').val();
    inputY = $('#variableY').val();
}

function updateCalculator() {
    $.ajax({
        method: 'GET',
        url: '/calculatorArray',
        success: function(response) {
            console.log(response);
        }
    })
}

function sendToServer () {
    console.log(inputX, inputY, mathButton);
    
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {
            X: inputX,
            Y: inputY,
            method: mathButton
        },
        success: function (response){
            console.log(response);
        }
    })
}

// function postCalculations(calculationArray){
//     $('#calculationDiv').empty();
//     for (var i = 0; i<calculationArray.length; i++){
//         $('#calculationDiv').append(
//             '<p>' + calculationArray[i]. + '</p>'
//         )
//     }
// }

// function serverCheck () {
//     $.ajax({
//         method: 'GET',
//         url: '/calculationsArray',
//         success: function (response){
//             console.log(response);
//             //postCalculations(response);           
//         }
//     })

// }