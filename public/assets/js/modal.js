
var exerciseTrailer = {
	"arms": ["https://www.youtube.com/embed/TwD-YGVP4Bk","https://www.youtube.com/embed/nRgxYX2Ve9w","https://www.youtube.com/embed/nRiJVZDpdL0","https://www.youtube.com/embed/ZO81bExngMI","https://www.youtube.com/embed/0JfYxMRsUCQ"],
	"back": ["https://www.youtube.com/embed/XZbJ8912hQU","https://www.youtube.com/embed/vT2GjY_Umpw","https://www.youtube.com/embed/K225yXkDiqo","https://www.youtube.com/embed/Y9I1cmLf7_I","https://www.youtube.com/embed/-koP10y1qZI"],
	"chest": ["https://www.youtube.com/embed/gRVjAtPip0Y","https://www.youtube.com/embed/ZOwwBk642SI","https://www.youtube.com/embed/dtNXLavPFo0","https://www.youtube.com/embed/07Bcqtib4FM","https://www.youtube.com/embed/eozdVDA78K0"],
	"core": ["https://www.youtube.com/embed/JB2oyawG9KI","https://www.youtube.com/embed/riAutegDqdI","https://www.youtube.com/embed/wkD8rjkodUI","https://www.youtube.com/embed/nmwgirgXLYM","https://www.youtube.com/embed/5EFcTkm0J-w"],
	"legs": ["https://www.youtube.com/embed/Dy28eq2PjcM","https://www.youtube.com/embed/1Tq3QdYUuHs","https://www.youtube.com/embed/-M4-G8p8fmc","https://www.youtube.com/embed/DGavj41F_Cs","https://www.youtube.com/embed/hxldG9FX4j4"]
}

function drawButton(exType) {
	$("#sample").empty();
	var trailers = exerciseTrailer[exType];
	console.log(trailers);
	for (var i = 0; i < trailers.length; i++) {
	    var button = $('<button>');
	    button.addClass('col-md-2 btn btn-primary btn-lg');
	    button.attr('id','custom-modal' + i);
	    button.attr('data-topic', trailers[i]);
	    button.text(exType);
	    $('#sample').append(button);
	}
};

/* Modal Box for exercise trailer Starts --*/

$(document).on("click",".btn-primary", function() {

  //get youtube exercise link
  var url = $(this).attr("data-topic");
  console.log("url: "+url);
  $("#workOutModal").on('show.bs.modal', function(){
  //  debugger;

  $("#exercise_trailer").attr('src', url);
  });

  $('#workOutModal').modal('show');
});

/* Assign empty url value to the iframe src attribute when
modal hide, which stop the video playing */
$("#workOutModal").on('hide.bs.modal', function(){
  $("#exercise_trailer").attr('src', '');
});
/* Modal Box for movie trailer End  --*/

$(document).ready(function(){
	var test = $("#dropdown").find("option:selected").prop("value");
	console.log(test);
	// switch ("arms"){
	// 	case "arms":
	// 	drawButton("arms");
	// 	console.log(test);
	// 	break;
	// 	case "back":
	// 	drawButton("back");
	// 	break;
	// 	case "chest":
	// 	drawButton("chest");
	// 	break;
	// 	case "core":
	// 	drawButton("core");
	// 	break;
	// 	case "legs":
	// 	drawButton("legs");
	// 	break;

		if ($("#dropdown").val()==="arms") {
			drawButton("arms");
		} else if ($("#dropdown").val()==="back") {
			drawButton("back");
		} else if ($("#dropdown").val()==="chest") {
			drawButton("chest");
		} else if ($("#dropdown").val()==="core") {
			drawButton("core");
		} else if ($("#dropdown").val()==="legs") {
			drawButton("legs");
		}
	});