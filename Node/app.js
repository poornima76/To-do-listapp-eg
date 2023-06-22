const http = require('http');
const currentDateTime = require("./firstModule");
http.createServer((req,res) =>{
    res.end('Hello world ' + currentDateTime.GetDate());    
}).listen(8085);
console.log('App running on port 8085');

