const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/features', function(req,res){
   
   
   res.sendFile(path.join(__dirname, '..', 'views', 'features.html') )

});

module.exports = router; 