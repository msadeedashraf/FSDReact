const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const {format} = require('date-fns')
const {v4:uuid}= require('uuid');

//console.log(uuid());



const eventLogs = async (myMessage) => {

const dateTime = `${format(new Date(),'MM/dd/yyyy HH:mm:ss')}`;    


const logItem =  `${dateTime}\t ${uuid()} \t${myMessage}\n` ;//`${dateTime}\t${uuid()}\t${myMessage}`;

console.log(logItem);

try 
{

    if (!fs.existsSync(path.join(__dirname,'mylogs' )))
        {

            await fsPromises.mkdir(path.join(__dirname,'mylogs' ));

        }
        await fsPromises.appendFile(path.join(__dirname, 'mylogs', 'myEventLog.txt'),logItem );

}
catch (err)
{
    console.log(err);
}

}

module.exports = eventLogs;