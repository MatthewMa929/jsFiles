/* JS3
Create a function that takes in two arguments and returns a concatenated string either as a console.log or alert.*/

function AlertUser(string1, string2) {
	var conString = string1 + string2;

	console.log(conString);
	alert(conString);
}

AlertUser("Blip", "Blap");