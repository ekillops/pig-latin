
var pigLatinize = function(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	if (vowelArray.includes(word[0])) {
		word += "ay";
	} else if {
		
	}

	return word;

};




$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var string = $("#textInput").val();
		var workingArray = string.split(" ");


		var result = pigLatinize(string);
		$("#latinResult").text(result);
	});
});
