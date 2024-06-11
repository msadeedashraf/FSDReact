const myEventLogs = require('./eventLog');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();


const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;


const myPORT = process.env.PORT || 3600;

/*
const serveFile = async (filePath, contentType, response)=> {

    try{

        


    }
    catch (err) {
        console.log(err);


    }



}
*/

//http server
const myServer =  http.createServer(
(req, res)=>{
console.log(req.url, req.method);

let filePath;
/*
if (req.url === '/'|| req.url === 'index.html')
    {
res.statusCode=200;
res.setHeader('Content-Type', 'text/html');
filePath = path.join(__dirname, 'views', 'index.html');
fs.readFile(filePath, 'utf8', (err, data)=>{res.end(data)});
    }
*/
/*
switch(req.url)
{
    case '/':
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/html');
        filePath = path.join(__dirname, 'views', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data)=>{res.end(data)});

    break;
    
}
*/

const myExtention = path.extname(req.url);
let contentType;

switch (myExtention)
{

case '.css': 
contentType =  'text/css'
break;

case '.js': 
contentType =  'text/javascript'
break;

case '.html': 
contentType =  'text/html'
break;

case '.jpg': 
contentType =  'text/jpeg'
break;
case '.png':
    contentType = 'image/png';
    break;
case '.txt':
    contentType = 'text/plain';
    break;
default:
    contentType = 'text/html';

}

filePath = 
contentType === 'text/html' && req.url ==='/'
? path.join(__dirname, 'views', 'index.html')
: contentType === 'text/html' && req.url.slice(-1) ==='/'
? path.join(__dirname, 'views', 'index.html')
: contentType === 'text/html'
?path.join(__dirname, 'views', req.url)
:path.join(__dirname, req.url);

if (!myExtention&&req.url.slice(-1) !== '/' )
    filePath+='.html'  

//console.log(filePath);
const fileExixst = fs.existsSync(filePath);

if (fileExixst)
    {
//get me the file
//function to serve the page
//serveFile();
    }
else
{
    switch(path.parse(filePath).bsse)
    {
        case 'old-page.html':
            res.writeHead(301, { 'Location': '/new-page.html' }); //header is Location and page to server is /new-page.html
            res.end();
            break;
        case 'www-page.html':
            res.writeHead(301, { 'Location': '/' });
            res.end();
            break;
        default:


    }

    console.log(path.parse(filePath));
    //404
    //301 redirect

}
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