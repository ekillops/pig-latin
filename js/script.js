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

var stringPrep = function(stringInput) {
	// var punctString = stringInput.replace(/[,.?!]/g, "");
	// var puncStrSplit = punctString.split(" ");
	// var puncStrJoin = puncStrSplit.join(" ");
	// var singleSpace = puncStrJoin.replace(/"  "/g, " ");
	// var casePrep = puncStrSplit.toLowerCase();
	var unwantedChars = [",", ".", "?", "!"];
	var stringOutput = "";
	for (var index = 0; index < stringInput.length; index++) {
		if (!unwantedChars.includes(stringInput[index])){
			stringOutput += stringInput[index];
		} else {
			continue
		}
	}
	return stringOutput.toLowerCase();
};



var pigLatinize = function(word) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	var firstVowel = vowelIndexer(word);
	if (vowelArray.includes(word[0]) || word.length === 1) {
		word += "ay";
	} else if (!vowelArray.includes(word[0])) {
		word = word.substr(firstVowel) + word.substr(0, firstVowel) + "ay";
	}
	return word;
};

var multiLatinizer = function(arrayOfStrings) {
	return arrayOfStrings.map(function(string) {
		if (!parseInt(string)) {
			return pigLatinize(string);
		} else {
			return string;
		}
	});
};

$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var string = $("#textInput").val();
		var workingString = stringPrep(string);
		var wordArray = workingString.split(" ");
		var latinWords = multiLatinizer(wordArray);


		var result = latinWords.join(' ');
		$("#latinResult").text(result);
	});
});
