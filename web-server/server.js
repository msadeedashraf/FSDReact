const myEventLogs = require('./eventLog');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();


const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;


const myPORT = process.env.PORT || 3600;

//http server
const myServer =  http.createServer(
(req, res)=>{

console.log(req.url, req.method);
}


);

//listner
myServer.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));

//test the code
//>npm run dev
//in the browser type the url to see the get request getting logged on the console.
//http://localhost:3600/












/*
myEmitter.on('mylogs', (msg)=>myEventLogs(msg));
    myEmitter.emit('mylogs', 'log item emitted' );
*/