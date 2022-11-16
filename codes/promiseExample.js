function fetchData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve({"id":5, "name":"Banu"}); // should be from server
            reject("404 not found");
        }, 1000);
    });
}
fetchData(5).then(function (data) { return console.log(data); }, function (err) { return console.log("Error Boom :=(", err); });
// tsc --lib ES2015, dom promiseExample.ts
