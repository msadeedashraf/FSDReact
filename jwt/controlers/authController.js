const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();
const fsPromises = require('fs').promises;


const handleLogin = async (req, res)=>{

    

    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    //find user
    const foundUser = usersDB.users.find(person => person.username === user)

    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.pwd);
    if (match) {
        
        // create JWTs

        const accessToken = jwt.sign(

            {"username": foundUser.username },
            process.env.ACESS_TOKEN_SECRET,
             {expiresIn : '30s'}

        );


        const refreshToken = jwt.sign(

            {"username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
             {expiresIn : '30s'}

        );
        

        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);

        const currentUser = {...foundUser, refreshToken};

        usersDB.setUsers([...otherUsers, currentUser]);



        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );


        //res.cookie('jwt', refreshToken, {httpOnly: true , sameSite : 'None',secure : true, maxAge: 24*60*60*1000}); //for production env
        res.cookie('jwt', refreshToken, {httpOnly: true , sameSite : 'None', maxAge: 24*60*60*1000}); //on development env
        res.json(accessToken);

       // res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
    
    //return res.status(200).json({"message": "checking auth success"});


}

module.exports = { handleLogin };