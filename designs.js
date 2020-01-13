

function makeGrid() {
	var a = parseInt(valOnChange);
	var b = parseInt(weiOnChange);

	if (happened===true) {
		$("table").empty();
	};
	
	for(var tr=1; tr <= a; tr++){
		$("#pixelCanvas").append("<tr></tr>");
	};
	for(var td=1; td <= b; td++){
		$("#pixelCanvas tr").append("<td></td>");
	};
	event.preventDefault();
	happened = true;
};



$(function () {
	valOnChange = "1";
	weiOnChange = "1";
	colorOnChange = "#ff0000";
	// this 'happened' variable is used to empty the table, so it can be resubmited.
	happened = false;

	$("#inputWidth").on("change", function () {
		weiOnChange = $("#sizePicker #inputWidth").val();
	});	

	
	$("#inputHeight").on("change", function () {
		valOnChange = $("#inputHeight").val();
	});	

	$("#colorPicker").on("change", function () {
		colorOnChange = $("#colorPicker").val();
	});

	$("#sizePicker").on("submit", function () {
		makeGrid();
	});
	
	$( "table" ).on( "click", "td", function( event ) {
   	event.preventDefault();
   	$( this ).css("background-color", colorOnChange);
	});
	
	
});


/*


*/



