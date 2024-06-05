const fs = require('fs');
const path = require('path');

/*
fs.readFile('./files/first-file.txt',(err, data)=>{

    if(err) throw err;

    console.log(data.toString());



});
*/

//with Path
fs.readFile(path.join(__dirname,'files','first-file.txt'), 'utf8', (err, data)=>{

    if(err) throw err;

    console.log(data);
});


//Create a file

/*
fs.writeFile(path.join(__dirname,'files','second-file.txt'), 'We are learning Node.', (err, data)=>{

    if(err) throw err;

    console.log('Writing Text.');
});
*/




fs.appendFile(path.join(__dirname,'files','third-file.txt'), '\n\n and we are enjoying learning node FS', (err, data)=>{

    if(err) throw err;

    console.log('Creating file using append.');
});






console.log("Checking the Async.......");


process.on('uncaughtException',err=>{
    console.error(`An uncaugth error: ${err}`);
    process.exit(1);

})
