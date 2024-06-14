
const path = require('path');
const myPORT = process.env.PORT || 3400;

const express = require('express');
const { Console } = require('console');
const app = express()


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

app.get('/*',(req, res)=>{
   res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
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



app.listen(myPORT, ()=> console.log(`My server is using port ${myPORT}`));


