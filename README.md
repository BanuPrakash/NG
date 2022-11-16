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

```
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
```

DOM --> Document Object Model ==> document tree in the form of Object


EventListener Thread ==> Observer Observable Design Pattern

======================================================================

ES 5 --> "var" is a keyword to declare a variable

ES 6 --> "let" can be used to declare a variable [ block level scope]

var vs let

ES 5 "var"
```
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
```
===================


ES 6 "let"
```
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
```
------------------------------------------------
```
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
```

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
```
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
Person.prototype.setName = function(n) {
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

```

High Order Functions:
* Functions which accept function as argument
* Function return a function
--> treat function as first-class members

Without HOF:

var data = [4,7,2,9,22,12];

for(i = 0; i< data.length; i++) {
	console.log(data[i]);
}

for(i = 0; i< data.length; i++) {
	alert(data[i]);
}

for(i = 0; i< data.length; i++) {
	writeToFile(data[i]);
}

With HOF:

function forEach(elems, action) {
	for(i = 0; i< elems.length; i++) {
		action(elems[i]);
	}
}

forEach(data, console.log);

forEach(data, alert);

Commonly used HOF:
1) forEach
2) filter
3) map
4) reduce
5) find

https://rxmarbles.com/

function add(x,y) {
	return x + y;
}

Arrow fn:

let add = (x,y) => {
	return x + y;
}

OR

let add = (x,y) => x + y;


============

* Function return a function --> HOF

Pure function

function adder(x, y) {
	return x + y;
}

console.log(adder(10,2));
console.log(adder(10,5));

HOF:
```
function adder(base) {
	return function(no) {
		return base + no;
	}
}

let fiveAdder = adder(5);

console.log(fiveAdder(2));  // 7
console.log(fiveAdder(4));  // 9
```

memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again
React.memo()

Cache
Angular / React 
getEmployee(4) -------> RESTful Web Services ------> Database ---> result to JSON --> send JSON to client --> cache

getEmployee(5) -------> RESTful Web Services ------> Database ---> result to JSON --> send JSON to client

getEmployee(4) -------> get from cache

fibanocci(34) ==> 5702887 ==> cache

fibanocci(34) ==> 0 ms


NodeJS
--> Platform with V8 JavaScript engine and Libuv libraries for Async operations [ instead of WebApi]

Where can I use NodeJS?
1) Building Traditional web applications like [php / Servlet & JSP / ASP/ ...]
2) Building RESTful WS / GraphQL WS like --> Spring Boot / Jersey / MVC Razor ==> return JSON / XML
3) Streaming Platform ==> Netflix / Prime / Hotstar
4) Realtime applications ==> ChatBot
5) Building client side web application development


Building client side web application development
* We might write code in ES6 or 7 / TypeScript / CoffeeScript /LiveScript / DART
--> JS engine understands ES5
--> NodeJS platform can be used to transcompile --> JS

* Unit Testing & E2E Testing

* Bundling
	a.js, b.js, c.js, d.js

	index.html
		<script src="a.js"></script>
		<script src="b.js"></script>
		<script src="c.js"></script>
		<script src="d.js"></script>
		<script src="e.js"></script>

	Problem 1: --> n + 1 hits to Server
	Problem 2: --> order matters [ e depends on d, d depends on c ,,,,]

	Solution: use NodeJS platform to bundle "bundle.js"
		index.html
		<script src="bundle.js"></script>

* Minify, Uglify your code

====================


Node uses Package Manager
* manage dependencies [ using 3rd party libraries] --> download dependencies
* publish libraries
* run scripts
--> NPM {default} / YARN / PNPM / RUSH ==> Maven / Gradle / PIP


npm init --y

creates package.json ==> like pom.xml
* file where "dependecies" are configured / scripts are configured

--> all team members uses same "package.json"

npm install lodash
npm install jest chai -D
	// needed in production
 "dependencies": {
    "lodash": "^4.17.21"
  },

  // needed only in development stage
  "devDependencies": {
    "chai": "^4.3.7",
    "jest": "^29.3.1"
  }

"node_modules" folder will have all the dependencies --> and transitive dependencies downloaded.

Other team members:

$ npm install

uses package.json and downloads

 "lodash": "4.17.21" ==> exact version
  "lodash": "^4.17.21" ==> "4.17.21 are latest version"
  "lodash": "~4.17.21" ==> major version has to be "4"/ "minor" and "path" can be latest


=================

By default one file is one module ==> all are private

Module System:
1) CommonJS ==> default in NodeJS
2) ES 6 module system
3) AMD
4) System.js
5) UMD
6) Plain JS module system







	


