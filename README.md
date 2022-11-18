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

// import a module

const http = require('http'); // gets from 'pre-loaded in NodeJS'
const lodash = require('lodash'); // doesn't find "pre-loaded"; gets from 'node_modules'

const {add,subtract} = require('./lib'); // relative path to pick from project


package.json

"scripts": {
    "start": "node app/server.js"
 }

npm start

================

Unit testing in JavaScript:
1) Jasmine
2) Mocha
3) JEST



Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.	

```
const {expect} = require('chai');
const {add,subtract} = require('../app/lib');
// AAA ==> Assemble Action Assert

// test suite
describe("testing lib module", () => {
    // test spec
    it("testing add", () => {
        let result = add(4,5);
        let expected = 9;
        expect(result).to.be.eq(expected);
    });
     // test spec
     it("testing subtract", () => {
        let result = subtract(10,4);
        let expected = 6;
        expect(result).to.be.eq(expected);
    });
});

```
 "scripts": {
    "start": "node app/server.js",
    "test": "jest"
  },

npm test

npm i mocha -D
"test": "mocha --reporter spec"

===============================================

TypeScript

* Provide an optional type system for JavaScript

var name = "Tim";
name = 10;
name = true;

With TS:

var name:string = "Tim";

name = 10; // tsc will throw an error

tsc a.ts --> a.js

* Enhance code quality and understandabilty
* catch issues at compilation time rather than runtime

---

Basic Types:
number, string, boolean

var name:string = "Tim";
var age:number = 22;

Complex types: enum, object, array

enum Direction {
	NORTH : 'North',
	EAST: 'East'
}

const direction:Direction = Direction.NORTH;

Object type:

1) using type
```
type Person = {
	name:string;
	age: number
}

function addPerson(person:Person) {
	...
}

addPerson({name:'Roger', age:34});

addPerson({name:'Roger'}); // error

let p:Person = {
	name:'Roger', age:34
}
```

2) interface
```
interface Product {
	name: string;
	price:number
}

--> interface is extendable [Generalization and Specialization relationship] ==> IS A

interface Mobile extends Product {
	connectivity: string
}

interface Tv extends Product {
	screenType:string,
	screenSize:string
}


let sony:Tv = {
	name:'Sony OLED',
	price:189000.00,
	screenType: 'OLED',
	screenSize:'64inch'
}

---> interface for Realization relationship

interface Renderer {
	render():void;
}

class WebRenderer implements Renderer {
	// code

	render():void {
			// logic
	}
}

class TvRenderer implements Renderer {
	// code

	render():void {
			// logic
	}
}

let render:Renderer = can refer to instance of TvRender or WebRender

```

npm install -g typescript
-------

"any" type and "unknown" type

let data:any = 10;

data =  "test";

data = true;

---

let data:unknown = 10;

data =  "test";

data = true;

Difference:

a.ts

function invoke(callback:any) {
	callback();
}

invoke("Hello!!!");

tsc a.ts ==> a.js
node a.js
Errors:
TypeError: callback is not a function

----
unknown forces type checking before using:

function invoke(callback:unknown) {
	if(typeof callback === 'function') {
		callback();
	} else if(typeof callback === 'string') {
		console.log(callback);
	}
}

invoke("Hello!!!");
----

"as" for type assertion:

=====================

Promise API:

=======================

JavaScript Build tools:
* Grunt 
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 


Webpack ==> default build tool which comes with React, Angular, Vue ==> and other frameworks for scafollding code

---------------------

md webpackexample
cd webpackexample
webpackexample> npm init --y

webpackexample> npm i webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D

webpackexample> tsc --init

creates tsconfig.json

```
export default class Person {
    private name:string;
    private age:number;

    public constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

```

npm start
npm test

Now:
npm run dev
or
npm run prod

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

index.html
<script src="bundle.js"></script>

Many bundles might be created based on project

bundle.js
vendor.js [ angular]
lib.js [ 3rd party]

Development mode files names contain hashing
bundle@df34%334.js ==> cache
bundle#fvfdf6sd.js
bundle!dgdf%355.js


 plugins: [new HtmlWebpackPlugin({
    template:path.resolve(__dirname, "src", "index.html")
  })]


 package.json
 "scripts": {
    "start": "webpack serve --mode development",
    "dev": "webpack --mode development",
    "prod": "webpack --mode production"
  }

  npm start

  ===============

  Day 2
  
Recap:
JS , NodeJS, Webpack
TypeScript

Webpack:
* webpack-cli
* webpack-dev-server --> lite http-server
* html-webpack-plugin --> automate adding <script></script> tags in html
* ts-loader , "tsc" 

tsc --init
this creates tsconfig.json

 "sourceMap": true, 

 bundle.js ==> SourceMap ===> Person.ts , lib.ts, index.ts


-------------------------
JavaScript in TypeScript:

Solution 1:
npm i lodash [ is a js module]

typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number): number
}

index.ts
import {random} from 'lodash';
console.log(random(1,100));

---------------

Solution 2:
https://github.com/DefinitelyTyped/DefinitelyTyped

npm i @types/lodash -D

https://www.npmjs.com/

================================================================


Decorator like extends is for Code re-usability

class Component {
	...
}
// inherit from Component
class PersonComponent extends Component {
	// additional state and behaviour
}

class PersonComponent extends Component, SomeA, SomeB { // error

Using Decorator

@Component({
	.. features
})
class PersonComponent {

}

@Component({
	.. features
})
class OrderComponent {

}

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 
Decorators use the form @expression , where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

class ProductDecorator {

	@Min(5)
	title:string;

	setName(@Upper name:string) {

	}

	@Required
	setEmail(email:string) {

	}
}

============

Decorators are simple functions

tsconfig.json
"experimentalDecorators": true,  
// "strict": true, 

export default function Course(target:any){
    console.log("Decorator called!!!")
}

------------
import Course from "./Course";
@Course
export default class Person {


=======================================================

Angular

Rendering ==> data to presentation
CSR --> Client Side Rendering
SSR --> Server Side Rendering [traditional web application]

CSR:
1) DOM library
document.createElement()
document.getElementById()
document.querySelectory()
...

2) jQuery --> simplfied DOM handling
$("<div/>") ==> document.createElement("div")
$("div") ==> document.querySelectorAll("div")

3) Templates: HandleBars, Mustache, Underscore , jqueryTemplate, knockout

Server sends:
{
    firstname: "Yehuda",
    lastname: "Katz",
}

Templates were created like:
<div class="card">
	<p>{{firstname}} {{lastname}}</p>
</div>

Output on Browser
Yehuda Katz

4) SPA --> Single Page Application --> index.html
4.1) 
different URLs should display different views
http://cisco.com
http://cisco.com/products
http://cisco.com/products/webex
http://cisco.com/clients
http://cisco.com/clients/us
http://cisco.com/locations

4.2) Modularize --> cart module , product module , payment module, customer module
handle dependencies between module

4.3) Lazy loading modules

4.4) Secure routes
http://amazon.com/cart

4.5) data binding
--> two-way binding

-----------------------
MVC pattern ==> Model View Controller

* Backbone --> Library --> Model and Controller ==> we have to pick any templates for view

* AngularJS [ 1 - 1.6 version] --> Google --> MVC pattern --> MVVP --> Framework
digest, apply cycle ==> issues with rendering

* React --> Facebook --> View library

* Angular -> [2 -- 14] 

=========================

Angular --> Framework

Why?
* Modularized ==> allows me to develop application as modules
 CustomerModule, ProductModule, PaymentModule, CartModule
* Dependency Injection : SOLID Design Principle
* Two-way binding
* Routers

===================

1) Module ==> @NgModule
2) Component --> @Component
3) Services --> @Injectable [ platform, root, module]
4) Router Module
5) Directives
	--> can be used along with DOM elements and Component
	--> to introduce additional behaviours which does not imply to CRUD operations of component
	--> hover over a component
		<app-product highlight></app-product>
		app-product is a component
		highlight is a directive
6) Pipe --> to transform data
	{{firstName | upper}}
7) Guards
8) HttpInterceptors: add JWT token for every request

--------------------
The Angular CLI is a command-line interface tool that you use to initialize, develop, 
scaffold, and maintain Angular applications directly from a command shell.

Other options:
webpack --> configure ts-loader, css-loader, Html-webpack-plugin, install dependecies

============

Angular Compiler:
"aot" ==> default from Angular 8 version
Ahead of Time ==> Compiled code is loaded on browser
"jit" ==> Just In Time Compiler ==> Browser will have angular compiler loaded

angular.json ==> custom config ==> webpack.config.js


npm install -g @angular/cli

create scafolding code:

ng new customerapp
No to Router
select CSS

customerapp> npm i bootstrap@4.6.0 font-awesome@4.7.0

======

Adding new Component:

ng g c components/customer/customer-list

FCP --> Core Web Vital --> First Contentful Paint
constructor() ==> default initialization
ngOnInit() ==> actual data from API call

if init is done in constructor() ==> blank screen for long duration


in Angular Structural directives start with "*"
==> conditionaly create or remove DOM


copy "images" from "angular_share.zip" into "assets folder"

==============

[] ==> property binding [ parent passes data to child]
() ==> event binding
[(ngModel)] = two-way binding
Event Handling:
1) <a class="float-right fa fa-trash" (click)="deleteCustomer(customer.id)"></a>

 Hyperlink generates "click" event ==> handled in CustomerCardComponent


2)
<app-customer-card 
(delEvent) = "deleteCustomerFromList($event)"
[customers] = "customers">
</app-customer-card>

"delEvent" is generated by CustomerCardComponent and handled in CustomerListComponent
[(ngModel)] = "searchText"

to use ngModel we need to include FormsModule
app.module.ts
 imports: [
    BrowserModule, FormsModule
  ],

==========================

Testing 
* Unit Testing Components
--> Angular Test Bed built on top of Jasmine Unit testing Framework
--> React TEsting Library is built on top of JEST
--> Test without tight coupling with other compoents / services

Mock Testing
--> Mock the behaviour of dependency

---

Cypress --> A complete end-to-end testing experience.

Protractor

ng add @cypress/schematic

for e2e testing application should be running

======================
Services

--> Business Logic
--> API calls
--> Communication between components

Observer / Observable Design Pattern

A Subject is a special type of Observable that allows values to be multicasted to many Observers

create a SharedService.ts
ng g service shared/services/shared


DependencyInjectable

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}


----------------


Day 3
angular.json --> wrapper for webpack.config.js

main.ts -> bootstrap AppModule [ collection of components / services / directives / pipes / guards/ ..]

AppModule --> boostraps --> Starting Component --> selector of starting component
should be placed in "index.html"

Starting Component --> load other components

Component has selector, template / templateURL , styles / styleURL

@Input()
@Output() -->EventEmitter --> to propagate event to Parent

Services are Injectable
@Injectable --> providedIn:'root' / providedIn:UserModule
by default services are singleton by default

Below code gives different instances of SharedService to CustomerListComponent and CustomerCardComponent

@Injectable({})
class SharedService {}

@Component({
   
  providers: [SharedService]
})
class CustomerListComponent {}


@Component({
     providers: [SharedService]
})
class CustomerCardComponent {}

-------------------------------------

Assignment:
1) Toggle between Card View and List View
2) Product

model/Product.ts
componetns in "app/components/products" folder
shared/services/ProductService.ts
app.module.ts ---> add component entry

==========================================

RxJs --> Push based
Reactive programming is an asynchronous paradigm concerned with data streams
and propagation of change

Observable : Subject is a type of Observable
Observers are listeners to any change in Observable

Promise Api for async VS RxJS
https://rxmarbles.com/

Example 1:
```

import { interval, pipe, take, filter, tap, shareReplay } from 'rxjs';

const observable = interval(5000).pipe(
  take(10),
  filter((n) => n % 2 == 0),
  tap((n) => console.log('Observable : ' + n)),
  shareReplay()
);

observable.subscribe((n) => {
  console.log('Observer 1: ' + n);
});

observable.subscribe((n) => {
  console.log('Observer 2: ' + n);
});

```

Example 2:

```
import { pipe, fromEvent } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

const mouseMove = fromEvent<MouseEvent>(
  document.getElementById('head'),
  'mousemove'
).pipe(debounceTime(1000));

const subscription = mouseMove.subscribe((evt) => {
  console.log(evt.clientX, evt.clientY);
});

```

JSON Server : Get a full fake REST API with zero coding

needs a json file which acts like a datastore + endpoints

data.json

{
  movies: [{..}, {...}],
  actors: [{...}, {...}]
}

GET
http://server/movies
http://server/movies/4
http://server/movies?genre=action

POST
http://server/movies

PUT and DELETE operations are supported

npm install -g json-server
json-server --watch data.json --port 1234

OR
npx json-server --watch data.json --port 1234

http://localhost:1234/customers
http://localhost:1234/customers/2
http://localhost:1234/customers?gender=male
http://localhost:1234/orders

ng g service /shared/services/data

app.module.ts
import {HttpClientModule} from '@angular/common/http';

 imports: [
    BrowserModule, FormsModule, HttpClientModule
 ]

=======
```
Using unscribe();
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { Customer } from 'src/app/shared/model/Customer';
import { DataService } from 'src/app/shared/services/data.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [SharedService]
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  original: Customer[] = [];
  searchText:string = "";
  displayType:string = "card";

  customerObservable!: Observable<Customer[]>; 
  customerSubscription!:Subscription;
  constructor(private dataService:DataService) { 
    this.customerObservable = this.dataService.getCustomers().pipe(shareReplay());
  }
  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();// if not done ==> memory leaks
  }

  ngOnInit(): void {
    this.customerSubscription = this.customerObservable.subscribe(data => {
      this.customers = this.original = data;
    });
    this.customerObservable.subscribe(data => {
      console.log(data);
    });
  }

  changeTo(type:string): void {
    this.displayType = type;
  }
  deleteCustomerFromList(id:number) {
    // this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(data => console.log("Delete" , data));
    this.dataService.getCustomers().subscribe(data => {
      this.customers = this.original = data;
    });
  }

  filterCustomers() {
    this.customers = 
      this.original
      .filter(c => c.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0)
  }
}

```
===

Auto unsubscribe:
"async" subscribes for iteration. on completion of iteration it unsbscribes

Component: --> don't subscribe in component

customers!:Observable<Customer[]>;

ngOnInit() {
	this.customers = this.dataService.getCustomers();
}

<div class="card col-md-4 col-lg-3" *ngFor="let customer of customers | async">
</div>

=====================================

* Module
* Component
* Service
* Directive
* Pipe
* Router

Directives are classes that add additional behavior to elements [DOM / Component] in your Angular applications.

Built-in directives
* NgFor	Repeat a node for each item in a list.
* NgIf	Conditionally creates or disposes of subviews from the template.
* NgSwitch

Component should have only behaviour --> CRUD of model which it represents

ng generate directive shared/directives/hover

@Directive({
  selector: '[appHover]'
})

selector is a property selector:

<div appHover></div>

<appHover></appHover> // won't work

Directives --> won't have templates and styles

in components:
<div (mouseover)="handler()">

<div appHover class="card col-md-4 col-lg-3" *ngFor="let customer of customers">
     
Pipe:
Transforming Data Using Pipes

Use pipes to transform strings, currency amounts, dates, and other data for display.
Pre-defined Pipes:
DatePipe ->	Formats a date value according to locale rules.
UpperCasePipe ->	Transforms text to all upper case.
LowerCasePipe ->	Transforms text to all lower case.
CurrencyPipe ->	Transforms a number to a currency string, formatted according to locale rules.
DecimalPipe	-> Transforms a number into a string with a decimal point, formatted according to locale rules.
PercentPipe	-> Transforms a number to a percentage string, formatted according to locale rules.

firstName is a state in component:
{{ firstName | uppercase }}

amount is state in component:

{{ amount | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}


------------

Custom pipes:

ng g pipe shared/pipe/text-converter

FilterByBrand:
 *ngFor="let product of productList | filterByBrand : selectedBrand"

 
=====================

https://www.primefaces.org/primeng/

KendoUI

@ViewChild

#templateRef

<input #ref type="text" />

Example:
```
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('ref')
  txtRef: ElementRef;

  @ViewChild(HelloComponent)
  helloComp: HelloComponent;

  // life cycle method waits for children also to be initialized
  ngAfterViewInit() {
    this.txtRef.nativeElement.value = 'Testing 123111';
    // this.txtRef.nativeElement.focus();
    this.helloComp.doTask();
  }
}

<p>Start editing to see some magic happen :)</p>
<input #ref type="text" />
<hello></hello>

import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello Component</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  doTask() {
    console.log('task in Hello Component');
  }
}

```

https://stackblitz.com/edit/angular-ivy-ddz16c













