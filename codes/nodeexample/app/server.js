const http = require('http');
const url = require('url');
const {random} = require('lodash');
const {add,subtract} = require('./lib');

// http://localhost:1234/add?x=10&y=20
// http://localhost:1234/subtract?x=10&y=20
// http://localhost:1234/
const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname;
    const query = url.parse(req.url, true).query;
    if(pathname === '/add') {
        res.end(add(parseInt(query['x']), parseInt(query['y'])).toString());
    } else if (pathname === '/sub') {
        res.end(subtract(parseInt(query['x']), parseInt(query['y'])).toString());
    } else {
        res.end(random(1,100).toString());
    }
});

server.listen(1234, () => console.log("server started!!!!"));

