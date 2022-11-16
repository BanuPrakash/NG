type Product = {
 id:number,
 name:string,
 price:number,
 category:string
}
// Generics
function forEach<T>(elems:T[], action: (elem:T) => void) : void {
	let i: number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

function map<T,R>(elems:T[], transformFn: (elem:T) => R) : R[] {
    var res:R[] = [];
        forEach(elems, (e) => {
             res.push(transformFn(e));
        });
    return res;
}

let nos:number[] = [5,2,55,42,31]
let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

let doubles = map(nos, e => e * 2);

let names:string[] = map(products, e => e.name);

forEach(names, console.log);
