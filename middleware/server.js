
const path = require('path');
const myPORT = process.env.PORT || 3400;

const express = require('express');
const app = express()
const {logger } = require('./myCustomMiddleware/eventLog');

const errorHandler = require('./myCustomMiddleware/errorHandler');

const cors = require('cors');

//custom middleware
app.use(logger);



const whiteList = ["https://www.google.com",  "http://127.0.0.1:3400", "http://127.0.0.1:5500"];


const corsOptions = {
origin : (origin, callback) => {

   if (whiteList.indexOf(origin) !== -1 || !origin)
      {
callback(null, true);
      }
      else
      {
         callback(new Error ("Not allowed by CORS"));


      }
    

}
, 

      optionsSuccessStatus: 200

}

app.use(cors(corsOptions));









app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public' )));



app.get('^/$|/index(.html)?', (req, res) => {
   //res.sendFile('./views/index.html', { root: __dirname });
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/my_new_page(.html)?', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'my_new_page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
   res.redirect(301, '/new-page.html'); //302 by default
});

//app.use for handling middleware // no regex
//app.all for all your http request //can use regex 

app.all('*',(req, res)=>{

res.status(404);
   if (req.accepts('html'))
      {
         res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
      }
      else if (req.accepts('json'))
         {
            res.json({'error':'Page not found error 404'});


         }
      else
      {

res.type ('txt').send("problem displaying page error 404")
      }


   
   });

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
   console.log('attempted to load hello.html');
   next()
}, (req, res) => {
   res.send('Hello World!');
});


// chaining route handlers
const one = (req, res, next) => {
   console.log('one');
   next();
}

const two = (req, res, next) => {
   console.log('two');
   next();
}

const three = (req, res) => {
   console.log('three');
   res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);




app.use(errorHandler);


app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));


