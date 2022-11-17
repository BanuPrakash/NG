import Person from "./Person"; // ES 6 module system
import filter, {Product, forEach} from './lib';
import {random} from 'lodash';

console.log(random(1,100));

let p1:Person = new Person("Harry", 31);
console.log(p1.getName(), p1.getAge(), p1["subject"]);


let nos:number[] = [5,2,55,42,31]
let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

let mobiles:Product[] = filter(products, p => p.category === 'mobile');
let evens:number[] = filter(nos, e => e % 2 === 0);

forEach(evens, console.log);

forEach(mobiles, console.log);
