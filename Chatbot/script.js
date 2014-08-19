var places = { usa : "Washington, D.C.",
			   indiana : "Indianapolis",
			   california : "Sacramento"
			}
			
function enter() {
	var input = document.getElementById("input");
	var inputText = input.value;
	input.value = "";
	var output = document.getElementById("output");
	var outputText = output.innerHTML;
	var response = "";
	if(inputText.toLowerCase() === "hello" || inputText.toLowerCase() === "hi"){
		response = "Hi";
	}
	else if(inputText.substring(0, 23).toLowerCase() === "what is the capitol of ") {
		var place = inputText.substring(23, inputText.length - 1).toLowerCase();
		response = places[place];
	}
	else if(inputText.toLowerCase() === "what's up?" || inputText.toLowerCase() === "whats up?"){
		response = "Just processing";
	}
	else if(inputText.toLowerCase() === "what is the square root of -1?" || inputText.toLowerCase() === "what is the square root of negative one?"){
		response = "The answer is i, or the imaginary number";
	}
	else if(inputText.toLowerCase() === "u wot m80?" || inputText.toLowerCase() === "u wot m8?"){
	    response = "u fkn wot m80 ill hook u rt in tha gabber";
	}
	else if(inputText.toLowerCase() === "how are you?"){
		response = "I'm good today. Thanks for asking!";
	}
	else{
		response = "I'm sorry, I don't understand.";
	}
	output.innerHTML = outputText + "\n> "+inputText + "\n\n" + "+ " + response + "\n";
}



