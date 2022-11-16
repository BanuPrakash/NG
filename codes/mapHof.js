// Generics
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
function map(elems, transformFn) {
    var res = [];
    forEach(elems, function (e) {
        res.push(transformFn(e));
    });
    return res;
}
var nos = [5, 2, 55, 42, 31];
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var doubles = map(nos, function (e) { return e * 2; });
var names = map(products, function (e) { return e.name; });
forEach(names, console.log);
