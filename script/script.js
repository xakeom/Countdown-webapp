var consButton = $("#consonant");
var vowButton = $("#vowel");
var letters = $(".list");
var list = [];

//button click returns random consonant pushes letter to list array
consButton.on('click', function(){
	var random = generate(consonants);
	list.push(random);
	letters.text(list);
})

//button click returns random vowel pushes letter to list array
vowButton.on('click', function(){
	var random = generate(vowels);
	list.push(random);
	letters.text(list);
})


//setup array for consonants
var consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","X","Z","W"];

//setup array for vowels
var vowels = ["A","E","I","O","U","Y"];

//generate random letter
function generate(arr) {
	var random = Math.floor(Math.random() * arr.length-1) + 1;
	var char = arr[random];
	return char;
}
