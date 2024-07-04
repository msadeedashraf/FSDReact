/*
const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
*/

const User = require('../model/User');
const jwt = require('jsonwebtoken');
//require('dotenv').config();
/*
const fsPromises = require('fs').promises;
const path = require('path');
*/

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    //const foundUser = usersDB.users.find(person => person.username === user);
    const foundUser = await User.findOne({username : user}).exec()

    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);

    if (match) {
        // create JWTs
        const roles = Object.values(foundUser.roles);
        const accessToken = jwt.sign(
            { 
              "UserInfo": {

                  "username": foundUser.username ,
                  "roles": roles

              }  



            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '40s' }
        );
        
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        // Saving refreshToken with current user
/*
const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
const currentUser = { ...foundUser, refreshToken };
usersDB.setUsers([...otherUsers, currentUser]);
await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
);
*/


foundUser.refreshToken = refreshToken;
const result = await foundUser.save();
console.log(result);









//res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); // for the production env
res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None',  maxAge: 24 * 60 * 60 * 1000 }); // for the dev env remove the secure: true
res.json({ accessToken });
        //res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };