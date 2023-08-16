const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/docs', function(req,res){
   
   
   res.sendFile(path.join(__dirname, '..', 'views', 'docs.html') )

});

module.exports = router; 