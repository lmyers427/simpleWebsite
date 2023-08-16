const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', function(req,res){
   
   
   res.sendFile(path.join(__dirname, '..', 'views', 'index.html') )

});

router.get('/features(.html)?', function(req,res){
   
   
   res.sendFile(path.join(__dirname, '..', 'views', 'features.html') )

});

router.get('/docs(.html)?', function(req,res){
   
   
   res.sendFile(path.join(__dirname, '..', 'views', 'docs.html') )

});



module.exports = router; 