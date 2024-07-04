const jwt = require('jsonwebtoken');
//require('dotenv').config();

const verifyJWT = (req, res, next) => {
    //const authHeader = req.headers['authorization'];
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    console.log(authHeader); // Bearer token //this is what we get from authHeader

    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        //call back for error can say token or decoded info from the jwt
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token//if token gets tempered
            req.user = decoded.UserInfo.username; //we passed the usedname and now its decoded
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT
