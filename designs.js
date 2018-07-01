// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event){
    event.preventDefault();
    makeGrid();
})// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //Remove pre existing table
    $('#pixelCanvas').children().remove();

    // Select size input
    let canvasHeight = $('#inputHeight').val();
    let canvasWidth = $('#inputWidth').val();

    //variable holding th jQurey selector for the table
    let designCanvas = $('#pixelCanvas');    
    
    //Loop through required row and columns to create a table
    for (var row = 1; row <= canvasHeight; row++) {
        var tr = $('<tr></tr>');
        designCanvas.append(tr);
        for (var col = 1; col <= canvasWidth; col++) {
            tr.append('<td></td>');
        }
    } 
}

//adds color to cell with a click
$('#pixelCanvas').on('click', 'td', function(event){
    event.preventDefault();

    // Select color input the user has chosen in the color picker
    let colorPicked = $('#colorPicker').val();

    /*
        Select the cell clicked on with the keyword this, and then set its color 
        to that of the color chosen by the user in the color picker  
    */
    $(this).css('background-color', colorPicked);
});

//removes color from any cell with a double click
$('#pixelCanvas').on('dblclick', 'td', function(event){
    event.preventDefault();

    /*
       Select the cell double-clicked on with the keyword this, 
       and then set its color to white  
    */      
    $(this).css('background-color', 'white');
});


