$(document).ready(function () {
    console.log('Jquery is being sourced!!');
    serverCheck();

    $('#addButton').on('click', function () {
        console.log('Add button was clicked!');
        calculatorInput();
        mathButton = '+';
        sendToServer();
    })

    $('#subtractButton').on('click', function () {
        console.log('Subtract button was clicked!');
        calculatorInput();
        mathButton = '-';
        sendToServer();
    })

    $('#multiplyButton').on('click', function () {
        console.log('Multiply button was clicked!');
        calculatorInput();
        mathButton = '*';
        sendToServer();
    })

    $('#divideButton').on('click', function () {
        console.log('Divide button was clicked!');
        calculatorInput();
        mathButton = '/';
        sendToServer();
    })

    $('#clearButton').on('click', function () {
        console.log('Clear button was clicked!');
        $.ajax({
            method: 'GET',
            url: '/clearCalculatorArray',
            success: function (response){
                serverCheck();
            }
        })
    })
});

function calculatorInput() {
    inputX = $('#variableX').val();
    inputY = $('#variableY').val();
}

// function updateCalculator() {
//     $.ajax({
//         method: 'GET',
//         url: '/calculatorArray',
//         success: function (response) {
//             console.log(response);
//         }
//     })
// }

function sendToServer() {
    console.log(inputX, inputY, mathButton);

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {
            X: inputX,
            Y: inputY,
            method: mathButton
        },
        success: function (response) {
            console.log(response);
            serverCheck();
        }
    })
}

function postCalculations(calculationArray) {
    $('#calculationDiv').empty();
    for (var i = 0; i < calculationArray.length; i++) {
        $('#calculationDiv').append(
            '<p>' + calculationArray[i].X + " " + calculationArray[i].method 
            + " " + calculationArray[i].Y + " " 
            + " =  <br>" + calculationArray[i].calculation + '</p>'
        );
    }
}

function serverCheck() {
    $.ajax({
        method: 'GET',
        url: '/calculationsArray',
        success: function (response) {
            console.log(response);
            postCalculations(response);
        }
    })

}