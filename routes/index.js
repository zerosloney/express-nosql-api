var express = require('express');
var router = express.Router();

/* GET home listing. */
router.get('/', function(req, res, next) {
    res.json({ error: '0', msg: 'welcome to use api' });
});

module.exports = router;