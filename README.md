# Angular

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NG
----------------------------------------------------------

Softwares Required:
1) Visual Studio Code. 
2) Chrome Web Browser
3) NodeJS Latest LTS

Day 1) JS, TypeScript & NodeJS
Day 2 & 3) Angular

-----------------------

JavaScript
--> Scripting language, dynamically typed and loosely typed language, event driven

file.js ==> JavaScript engine [ECMA]
* V8 --> Google [Chrome, NodeJS]
* SpiderMonkey --> Firefox
* JavaScript VM --> Opera
* Nashorn ==> Oracle products

JS5 --> ES5 version --> ECMAScript 5

file.js

console.log("Start!!!");

setInterval(function doTask() {
	console.log("timed!!!");
}, 100);

document.getElementById("btn")
	.addEventListener("click", function clicked() {
	console.log("clicked!!!");
});	

console.log("bye!!!");


class TimerThread extends Thread {

	TimerThread(CallbackQueue q, fn, time) {
		..
	}

	run() {
		while(true) {
			sleep(time);
			q.push(fn);
		}
	}
}


DOM --> Document Object Model ==> document tree in the form of Object


EventListener Thread ==> Observer Observable Design Pattern

======================================================================

ES 5 --> "var" is a keyword to declare a variable

ES 6 --> "let" can be used to declare a variable [ block level scope]

var vs let

ES 5 "var"

var g = 100; // global variable

function doTask() {
	var a = 10; // scope of function
	if( g > a) {
		var b = 20; // hoisted to function scope
		c = 50; // implicit variable is hoisted to global scope
	}
	console.log(g, a, b, c); 
}
console.log(g, c);  // g and c are global scope

doTask();

===================


ES 6 "let"

var g = 100; // global variable

function doTask() {
	var a = 10; // scope of function
	if( g > a) {
		let b = 20; // block scope
		c = 50; // implicit variable is hoisted to global scope
	}
	console.log(g, a, b, c); // b is not visible
}
console.log(g, c);  // g and c are global scope

doTask();

------------------------------------------------

function add(x, y) {
	return x + y;
}

console.log(add(4,5)); // 9
--------------------------
function add(x, y) {
	return 
		x + y;
}
console.log(add(4,5)); // undefined

var a; //undefined

undefined, number, string, boolean, object, array

---------------------------------------------

OOP with JS

--> Object contains state and behaviour[actions / messages]
BankingAccount
balance --> state
credit() --> actions
debit() --> actions

--> Class / function / Type --> to declare a template for object creation

1)

var person = new Object();
person.id = 10; // state
person.name = "Tim"; // state

person.getName = function() {
	return this.name; // "this" refers to "person" --> context
}

console.log(person.getName()) // Tim

2) using Function Constructor

function Person(id, name) {
	this.id = id;
	this.name = name;
}

// add object behaviour
Person.prototype.getId = function() {
	return this.id;
}
// add object behaviour
Person.prototype.getName = function() {
	return this.name;
}
// add object behaviour
Person.prototye.setName = function(n) {
	this.name = n;
}

// add function/class behavior and not not object behaviour
Person.equals = function(p1, p2) {
	return p1.id === p2.id; // inside this code "this" can't be used
}

var p1 = new Person(22, "George");
var p2 = new Person(67, "Amy");

p1.getName();
p2.getName();
p2.setName("Jack");

if(Person.equals(p1, p2)) {
	//
}

=================================

3) Using JSON ==> JavaScript Object Notation ==> Singleton object
key is string; value can be [number, boolean, string, object, array, function, null]

var person = {
	"id": 22,
	"name": "George",
	"setName" : function(name) {
		this.name = name;
	},
	"getName" : function() {
		return this.name;
	}
}

person.getName();
person.setName("Jack");

==================================

var fn = person.getName; // --> gives function definition but "context" is lost

fn(); // here executes on global context "window" and not "person" context
gets window.name

Solution:

var ref = person.getName.bind(person); ==> get function defintion by setting "context" as "person"

ref(); // gets person.name

===========================================

