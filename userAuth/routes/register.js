const express = require('express');
const router = express.Router();

const registerController = require('../controlers/registerController');


const fsPromises = require('fs').promises;
const path = require('path');



router.post('/' , registerController.handleNewUser);


module.exports = router;
