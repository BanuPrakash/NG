
interface User {
 id: number;
 name:string
}

function fetchData(id:number) : Promise<User> {
	return new Promise<User>( (resolve, reject) => {
		setTimeout(() => {
			resolve({"id":5, "name":"Banu"}); // should be from server
			//reject("404 not found");
		}, 1000);
       });
}

//async call
fetchData(5).then(
   data => console.log(data),
   err => console.log("Error Boom :=(", err)
);

console.log("Bye!!!");

// tsc --lib ES2015, dom promiseExample.ts
