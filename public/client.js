$(document).ready(function () {
    console.log('Jquery is being sourced!!');

    $('#addButton').on('click', function () {
        console.log('Add button was click!');
    })

    $('#subtractButton').on('click', function () {
        console.log('Subtract button was click!');
    })
    
    $('#multiplyButton').on('click', function () {
        console.log('Multiply button was click!');
    })

    $('#divideButton').on('click', function () {
        console.log('Divide button was click!');
    })
});