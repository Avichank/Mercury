// VARS
var message; // a-z, A-Z, 0-9, $, _
var myMessage;
myMessage = "Message";

var myNumber = 10;
var myString = "Hey, Vasya"; // "10.484"
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;
var myObject = {
	name: "Vasya",
	age: 25
};

// Numbers
//var result = 40 + 10;
//console.log(result);
//console.log(myNumber + 10);
//console.log(myNumber - 10);
//console.log(myNumber * 10);
//console.log(myNumber / 10);
//myNumber = myNumber + 1;
// myNumber += 1;
// myNumber++; - увеличивает на 1
//console.log(myNumber);
//console.log(Math.round(5.45));
//console.log(Math.ceil(5.45)); // округляет в большую сторону
//console.log(Math.floor(5.45)); // в меньшую
//var newNumber = 2.437;
//newNumber.toFixed(1);
//console(newNumber.toFixed(1));

//STRINGS
console.log(myNumber + "10");
console.log(myString + " Как дела");
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

//Массивы
var names = ["Vasya", "Petya", "Jenya"]; //0,1,2
console.log(names[0].toUpperCase());

names[0] = "Masha";
console.log(names[0]);

names.push("Sveta");
console.log(names[3]);
// console.log(names);

//УСЛОВИЯ
if (10 > 5) { //  <  <=  ==  ===
	console.log("Условие выполнилось")
}

if ("Vasya" != "Petya" && myNumber < 20) { // !==
	console.log("Условие выполнилось")
}

if ("Vasya" != "Petya" || myNumber < 20) { // !==
	console.log("Условие выполнилось")
}

if (myNumber < 20) {
	console.log("Число меньше 20")
} else {
	console.log("Число больше 20")
}

//ЦИКЛЫ
for (var i = 0; i < 10; i++) {
	if (i == 5) {
		break; //continue
	}
	console.log(i);
}

for (var j = 0; j < names.length; j++) {
	console.log(names[j]);
}

var i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

//ФУНКЦИИ

function test() {
	console.log("Fucking deep");
}

test();

function sum(x, y) {
	//console.log(x + y);
	return x + y;
}

//sum(10, 59);
console.log(sum(10, 59));

//OBJECTS

var myObject = {
	mame: "Vasya",
	surname: "Vasin",
	age: 25
	getFullName: function() {
		return this.name + " " + this.surname;
	}
};

myObject.name = "Petya";
console.log(myObject.name);
console.log(myObject.getFullName);



