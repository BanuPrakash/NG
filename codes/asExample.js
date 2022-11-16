function getProduct() {
    return {
        name: 'Macbook',
        price: 210000.00
    };
}
var p = getProduct();
console.log(p.name, p.price);
console.log(getProduct().name);
