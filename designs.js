var color, height, width, canvas, sizePicker; // Variables
color = $( "#colorPicker" ); // Selects color input
canvas = $( "#pixelCanvas" ); // Select size input

function makeGrid()	// Call to makeGrid()
 {
  	height = $( "#inputHeight" ).val(); //Value of input height
  	width = $( "#inputWeight" ).val();	//Value of input width
  	canvas.children().remove();

 	for(i=0; i<height; i++){		//Loops through the row
		canvas.append('<tr></tr>');
  	}
	for(j=0; j<width ; j++){		//Loops through the column
			$('tr').append('<td></td>');
	}
 
 	cell = canvas.find( "td" ); // Selects the grid

  	cell.click( function () // Event listener for a click in the grid
  	{		
      if ( $( this ).attr("bgcolor") ){
        $( this ).removeAttr("bgcolor");
      }else{
        $( this ).attr("bgcolor", color.val());
      }
  });
 
}
sizePicker = $( "#sizePicker" );
	sizePicker.submit( function( event ) //  Event listener to create grid on submit button
	{
  		event.preventDefault();
  		makeGrid();
  		clear();
	});

		 
function clear() // Call to clear grid
{
    while (canvas.first()){
         canvas.remove("canvas.first()");
    }
}