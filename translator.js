var string1
var input
var string2
var array1
var index1
var string3
var substrings
var array2

function numbers_translate() {
	for (i=0 ; i<=array1.length ; i++){
	if (array1[i] == "a") {
		array1[i] = 1;
		
		}
	if (array1[i] == "b") {
		array1[i] = 2;
		
		}
	if (array1[i] == "c") {
		array1[i] = 3;
		
		}
	if (array1[i] == "d") {
		array1[i] = 4;
		
		}
	if (array1[i] == "e") {
		array1[i] = 5;
		
		}
	if (array1[i] == "f") {
		array1[i] = 6;
		
		}
	if (array1[i] == "g") {
		array1[i] = 7;
		
		}
	if (array1[i] == "h") {
		array1[i] = 8;
		
		}
	if (array1[i] == "i") {
		array1[i] = 9;
		
		}
	if (array1[i] == "j") {
		array1[i] = 10;
		
		}
	if (array1[i] == "k") {
		array1[i] = 21;
		
		}
	if (array1[i] == "l") {
		array1[i] = 32;
		
		}
	if (array1[i] == "m") {
		array1[i] = 43;
		
		}
	if (array1[i] == "n") {
		array1[i] = 54;
		
		}
	if (array1[i] == "o") {
		array1[i] = 65;
		
		}
	if (array1[i] == "p") {
		array1[i] = 76;
		
		}
	if (array1[i] == "q") {
		array1[i] = 87;
		
		}
	if (array1[i] == "r") {
		array1[i] = 98;
		
		}
	if (array1[i] == "s") {
		array1[i] = 19;
		
		}
	if (array1[i] == "t") {
		array1[i] = 20;
		
		}
	if (array1[i] == "u") {
		array1[i] = 31;
		
		}
	if (array1[i] == "v") {
		array1[i] = 42;
		
		}
	if (array1[i] == "w") {
		array1[i] = 53;
		
		}
	if (array1[i] == "x") {
		array1[i] = 64;
		
		}
	if (array1[i] == "y") {
		array1[i] = 75;
		
		}
	if (array1[i] == "z") {
		array1[i] = 86;
		
		}
	if (array1[i] == " ") {
		array1[i] = 0;
		
		}
	if (array1[i] == ".") {
		array1[i] = 97;
		
		}
	if (array1[i] == "!") {
		array1[i] = 28;
		
		}
	if (array1[i] == "?") {
		array1[i] = 39;
		
		}
	if (array1[i] == "&") {
		array1[i] = 40;
		
		}
	if (array1[i] == "@") {
		array1[i] = 51;
		
		}
	if (array1[i] == "/") {
		array1[i] = 62;
		
		}
	if (array1[i] == ",") {
		array1[i] = 73;
		
		}
	if (array1[i] == ":") {
		array1[i] = 84;
		
		}
	if (array1[i] == ";") {
		array1[i] = 95;
		
		}
	if (array1[i] == "-") {
		array1[i] = 16;
		
		}
	if (array1[i] == "'") {
		array1[i] = 27;
		
		}
	}
}

function splitstring() {
	string3 = string3.replace(/(\S{6})/g,"$1a");
	string3 = string3.replace(/a$/,"");
	array2 = string3.split("a");
	
}

function adddivs() {

	for (i=0;i<=array2.length; i++){
	
		var newDiv = document.createElement("div");
		
		newDiv.innerHTML = "you found me!";
		
		newDiv.style.color = ("#"+array2[i]);
		
		newDiv.style.backgroundColor = ("#"+array2[i]);
		
		var parent=document.getElementById("response");
		
		parent.appendChild(newDiv);

	}
}


function translate_to_color() {
	
	input = document.getElementById("text");
	string1 = input.value;
	string2 = string1.toLowerCase();
	array1 = string2.split("");
	numbers_translate();
	
	string3 = array1.toString();
	
	string3 = string3.replace(/,/gi,"");
	
	splitstring();
	
	adddivs();
	
}

function dostuff() {

	translate_to_color();
}
