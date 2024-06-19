
const path = require('path');
const myPORT = process.env.PORT || 3400;

const express = require('express');
const app = express()
const {logger } = require('./myCustomMiddleware/eventLog');

const errorHandler = require('./myCustomMiddleware/errorHandler');

const cors = require('cors');
const corsOptions = require('./controlers/corsController');

//custom middleware
app.use(logger);

app.use(cors(corsOptions));




app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));


app.use('/', express.static(path.join(__dirname,'/public' )));






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




app.use(errorHandler);


app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));


