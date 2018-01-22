// variable for number of total vowels in string
var vowels = 0;

// identify submit button and add event listener to count the
// number of vowels in given string
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {

	// get the string from the user input
	var stringy = document.getElementById("uStr").value;

	// run through the string and check to see if the current
	// letter is a vowel. If so, add it to the vowels pile.
	for (var i = 0; i < stringy.length; i++) {
		if (stringy[i].includes("a")) {
			vowels += 1;
		}
		if (stringy[i].includes("e")) {
			vowels += 1;
		}
		if (stringy[i].includes("i")) {
			vowels += 1;
		}
		if (stringy[i].includes("o")) {
			vowels += 1;
		}
		if (stringy[i].includes("u")) {
			vowels += 1;
		}
	}

	// Display the number of vowels to the user
	document.getElementById("results").innerHTML = "Your string contains " + vowels + " vowels!"
});
