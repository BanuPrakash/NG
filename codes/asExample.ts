
interface Product {
	name: string;
	price:number
}

// JS function 3rd party lib
function getProduct() {
	 return {
		name : 'Macbook',
		price : 210000.00
	}
}

let p:Product = getProduct();
console.log(p.name, p.price);

console.log((getProduct() as Product).name);


