var grades = [23, 56, 77];
var number = 20;
var bol = true;

function changeStuff () {
	// grades = [23, 56, 77, 90];
	// return grades

	grades.push(100);

	debugger;

	number = 80;
	bol = false;
}

changeStuff();
console.log(grades);
console.log(number);
console.log(bol);