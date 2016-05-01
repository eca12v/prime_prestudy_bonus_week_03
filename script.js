

function function1(x) {return x - 1;}
function function2(x) {return x + 2;}
function function3(x) {return x * 2;}

//this function is called when submit button is clicked
function ultimate() {
	
	//this puts the input from html in the function function3(fonction2(function1(input))) and puts the answer in the <p> with id "answer"
	document.getElementById("answer").innerHTML = "The answer is: " + function3(function2(function1(document.getElementById("userInput").value)));
}

