const express = require('express');
const router = express.Router();

const refreshTokenController = require('../controlers/refreshTokenController');


const fsPromises = require('fs').promises;
const path = require('path');



router.get('/' , refreshTokenController.handleRefreshToken);


module.exports = router;
