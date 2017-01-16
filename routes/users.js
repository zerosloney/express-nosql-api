var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'test2'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
        res.json({ error: '0', user: { id: 'xxx-01', name: 'xxx-name01' }, extend: rows });
    });
});


module.exports = router;