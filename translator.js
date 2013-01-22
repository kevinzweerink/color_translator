var string1;
var input;
var string2;
var array1;
var index1;
var string3;
var substrings;
var array2;

function numbers_translate() {

	var i = 0;

	while (array1[i]) {
	
		var array_bit = array1[i];
		var holder;
	
		switch (array_bit) {
			case "a":
				holder = "a";
				break;
			case "b":
				holder = "b";
				break;
			case "c":
				holder = "c";
				break;
			case "d":
				holder = "d";
				break;
			case "e":
				holder = "e";
				break;
			case "f":
				holder = "f";
				break;
			case "g":
				holder = 1;
				break;
			case "h":
				holder = 2;
				break;
			case "i":
				holder = 3;
				break;
			case "j":
				holder = 4;
				break;
			case "k":
				holder = 5;
				break;
			case "l":
				holder = 6;
				break;
			case "m":
				holder = 7;
				break;
			case "n":
				holder = 8;
				break;
			case "o":
				holder = 9;
				break;
			case "p":
				holder = 19;
				break;
			case "q":
				holder = 28;
				break;
			case "r":
				holder = 37;
				break;
			case "s":
				holder = 46;
				break;
			case "t":
				holder = 55;
				break;
			case "u":
				holder = 46;
				break;
			case "v":
				holder = 37;
				break;
			case "w":
				holder = 28;
				break;
			case "x":
				holder = 19;
				break;
			case "y":
				holder = 91;
				break;
			case "z":
				holder = 82;
				break;
			default:
				holder = 0;
				break;
			
		}
		
		array1[i] = holder;
		i++;
		 
	}

}

function splitstring() {
	string3 = string3.replace(/(\S{6})/g,"$1z");
	string3 = string3.replace(/z$/,"");
	array2 = string3.split("z");
	
}

function adddivs() {

	for (i=0;i<=(array2.length-1); i++){
	
		while (array2[i].length < 6) {
			
			array2[i] = array2[i] + "0";
			
		}
		
		var newDiv = document.createElement("div");
		
		newDiv.className = "color-block";
		
		var parent=document.getElementById("color-container");
		
		parent.insertBefore(newDiv, parent.firstChild);
		
		newDiv.style.color = "#fff";
		
		newDiv.style.backgroundColor = "#fff";
		
		newDiv.style.color = ("#"+array2[i]);
		
		newDiv.style.backgroundColor = ("#"+array2[i]);
		
		newDiv.innerHTML = "<p>#"+array2[i]+"</p>";
		
		

	}
}

var flipswitch = 0;

function translate_to_color() {

	if (flipswitch != 0) {
		$('.color-block').css('opacity','0');
		$('.color-block').remove();
		flipswitch = 0;
	}
	
	if (flipswitch == 0) {
	
	input = document.getElementById("user-text");
	string1 = input.value;
	string2 = string1.toLowerCase();
	array1 = string2.split("");
	numbers_translate();
	
	string3 = array1.toString();
	
	string3 = string3.replace(/,/gi,"");
		
	splitstring();
	
	adddivs();
	
	$('#color-container').css('padding','2em');
	$('.color-block').css('opacity','1');
	
	flipswitch = 1;
	
	}
	
	return false;
	
	
}

