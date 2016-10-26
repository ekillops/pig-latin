var vowelIndexer = function(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	for (var index = 0; index < word.length; index++) {
		if (vowelArray.includes(word[index])) {
			if (word[index] === "u" && word[index - 1] === "q") {
				if (vowelArray.includes(word[index + 1])) {
					return index + 1;
					break;
				} else {
					return index;
					break;
				}
			} else {}
		 return index;
		 break;
	 } else {}
 };
};
//
// var punctPrep = function(workingArray) {
// 	var punctString =
// 	if
// 	.search
// 	.contains
// }
//
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

var multiLatinizer = function(arrayOfStrings) {
		return arrayOfStrings.map(function(string) {
			return pigLatinize(string);
		});
};

$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var string = $("#textInput").val();
		var workingArray = string.split(" ");

		var wordArray = multiLatinizer(workingArray);


		var result = wordArray.join(' ');
		$("#latinResult").text(result);
	});
});
