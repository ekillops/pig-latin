var vowelIndexer = function(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	for (var index = 0; index < word.length; index++) {
		 if (vowelArray.includes(word[index])) {
			 if (word[index] === "u" && word[index - 1] === "q") {
				return index + 1;
				break;
			} else {}
		 return index;
		 break;
	 } else {}
 };
};

var pigLatinize = function(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	var firstVowel = vowelIndexer(word);
	if (vowelArray.includes(word[0])) {
		word += "ay";
	} else if (!vowelArray.includes(word[0])) {
		word = word.substr(firstVowel) + word.substr(0, firstVowel) + "ay";
	}

	return word;

};



// var pigLatinize = function(word) {
// 	var vowelArray = ["a", "e", "i", "o", "u"];
// 	if (vowelArray.includes(word[0])) {
// 		word += "ay";
// 	} else if (!vowelArray.includes(word[0])) {
// 		word = word.substr(1) + word[0] + "ay";
// 	}
//
// 	return word;
//
// };




$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var string = $("#textInput").val();
		var workingArray = string.split(" ");


		var result = pigLatinize(string);
		$("#latinResult").text(result);
	});
});
