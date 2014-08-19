var places = {  usa : "Washington, D.C.",
                alabama: "Montgomery",
                alaska: "Juneau",
                arizona: "Phoenix",
                arkansas: "Little Rock",
                california: "Sacramento",
                colorado: "Denver",
                connecticut: "Hartford",
                delaware: "Dover",
                florida: "Tallahassee",
                georgia: "Atlanta",
                hawaii: "Honolulu",
                idaho: "Boise",
                illinois: "Springfield",
                indiana: "Indianapolis",
                iowa: "Des Moines",
                kansas: "Topeka",
                kentucky: "Frankfort",
                louisiana: "Baton Rouge",
                maine: "Augusta",
                maryland: "Annapolis",
                massachusetts: "Boston",
                michigan: "Lansing",
                minnesota: "Saint Paul",
                mississippi: "Jackson",
                missouri: "Jefferson City",
                montana: "Helena",
                nebraska: "Lincoln",
                nevada: "Carson City",
                "new hampshire": "Concord",
                "new jersey": "Trenton",
                "new mexico": "Santa Fe",
                "new york": "Albany",
                "north carolina": "Raleigh",
                "north dakota": "Bismarck",
                ohio: "Columbus",
                oklahoma: "Oklahoma City",
                oregon: "Salem",
                pennsylvania: "Harrisburg",
                "rhode island": "Providence",
                "south carolina": "Columbia",
                "south dakota": "Pierre",
                tennessee: "Nashville",
                texas: "Austin",
                utah: "Salt Lake City",
                vermont: "Montpelier",
                virginia: "Richmond",
                washington: "Olympia",
                "west virginia": "Charleston",
                wisconsin: "Madison",
                wyoming: "Cheyenne"
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
    else if(inputText.toLowerCase() === "what is league?" || inputText.toLowerCase() === "what is league of legends?"){
        response = "League of Legends is an amazing MOBA developed by Riot games";
    }
    else if(inputText.toLowerCase() === "what is the meaning of life?" || inputText.toLowerCase() === "what does life mean?"){
        response = "42";
    }
    else if(inputText.toLowerCase() === "what are you?" || inputText.toLowerCase() === "what are you"){
        response = "I am a chatbot designed to talk to you";
    }
	else{
		response = "I'm sorry, I don't understand.";
	}
	output.innerHTML = outputText + "\n> "+inputText + "\n\n" + "+ " + response + "\n";
}



