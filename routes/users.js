var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ error: '0',user:{id:'xxx-01',name:'xxx-name01'} });
});

module.exports = router;
