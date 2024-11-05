/* JS4
Create function that takes in one argument that is passed through a 
conditional statement with if, else ifs, and else. 
Return the result as an alert or console.log. 
Test all of your conditions to make sure you can receive all of your results back. */

function EatFood(food) {
	if (typeof food == "string") {
		alert("Eat");
	}
	else if (typeof food == "number") {
		alert("Not food");
	}
	else if (typeof food == "boolean") {
		alert("Might be food");
	}
	else {
		alert("Eat at your own risk");
	}
}

EatFood("Mango");