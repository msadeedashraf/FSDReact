const fs = require('fs');
const path = require('path');

/*
fs.readFile('./files/first-file.txt',(err, data)=>{

    if(err) throw err;

    console.log(data.toString());



});
*/

//with Path
/*
fs.readFile(path.join(__dirname,'files','first-file.txt'), 'utf8', (err, data)=>{

    if(err) throw err;

    console.log(data);
});
*/

//Create a file



fs.writeFile(path.join(__dirname,'files','sync-file.txt'), 'Hello world from CBC', (err, data)=>{

    if(err) throw err;

    console.log('Writing Text complete.');


    fs.appendFile(path.join(__dirname,'files','sync-file.txt'), '\n\n and we are enjoying learning node FS', (err, data)=>{

        if(err) throw err;
    
        console.log('Appending file complete.');

        fs.rename(path.join(__dirname,'files','sync-file.txt'),path.join(__dirname,'files','rename-sync-file.txt') , (err)=>{

            if(err) throw err;
        
            console.log('Renaming file complete.');



            fs.readFile(path.join(__dirname,'files','rename-sync-file.txt'), 'utf8', (err, data)=>{

                if(err) throw err;
            
                console.log(data);
            });
            
            
        
        });
        
    
    });

});

    











console.log("Checking the Async.......");


process.on('uncaughtException',err=>{
    console.error(`An uncaugth error: ${err}`);
    process.exit(1);

})
