const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken = async (req, res)=>{

   
    const cookies = req.cookies;
    console.log(cookies.jwt);
    if (!cookies?.jwt) return res.status(401);
    console.log(cookies);
    const refreshToken = cookies.jwt;
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken)

    if (!foundUser) return res.sendStatus(403); //Forbidden 


    jwt.verify(
refreshToken,
process.env.REFRESH_TOKEN_SECRET,
(err, decoded)=>{

    if (err ||foundUser.username !== decoded.username)
        return res.sendStatus(403);
    const accessToken = jwt.sign(

        {"username": decoded.username },
        process.env.ACESS_TOKEN_SECRET,
         {expiresIn : '30s'}

    );




}

    );

}

module.exports = { handleRefreshToken };