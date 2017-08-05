$(document).ready(function () {
    console.log('Jquery is being sourced!!');
    //updateCalculator();
   

    $('#addButton').on('click', function () {
        console.log('Add button was click!');
        calculatorInput();
        var mathButton = 'add';
        serverCalculations();
    })

    $('#subtractButton').on('click', function () {
        console.log('Subtract button was click!');
        calculatorInput();
        var mathButton = 'subtract';
        serverCalculations();
    })

    $('#multiplyButton').on('click', function () {
        console.log('Multiply button was click!');
        calculatorInput();
        var mathButton = 'multiply';
        serverCalculations();
    })

    $('#divideButton').on('click', function () {
        console.log('Divide button was click!');
        calculatorInput();
        var mathButton = 'divide';
        serverCalculations();
    })
});

function calculatorInput(){
    var inputX = $('#variableX').val();
    var inputY = $('#variableY').val();
    console.log(inputX,inputY);
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

// function sendToServer () {
//     $.ajax({
//         method: 'POST',
//         url: '/calculate',
//         data: {
//             X: inputX,
//             Y: inputY,
//             method: mathButton
//         },
//         success: function (response){
//             console.log(response);
//         }
//     })
// }

// function postCalculations(calculationArray){
//     $('#calculationDiv').empty();
//     for (var i = 0; i<calculationArray.length; i++){
//         $('#calculationDiv').append(
//             '<p>' + calculationArray[i]. + '</p>'
//         )
//     }
// }

function serverCalculations () {
    $.ajax({
        method: 'GET',
        url: '/calculationsArray',
        success: function (response){
            console.log(response);
            //postCalculations(response);           
        }
    })

}