const express = require('express');
const router = express.Router();
const path = require('path');



router.get('^/$|/index(.html)?', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..','views','subfolder' ,'index.html'));
 });


 router.get('^/$|/mytest(.html)?', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..','views','subfolder' ,'mytest.html'));
 });



 module.exports = router;

