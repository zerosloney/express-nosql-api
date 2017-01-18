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

router.get('/one', function(req, res, next) {
    pool.query({
        sql: 'SELECT * from team where Id= ?',
        timeout: 40000, // 40s 
        values: ['59b49f54-40f2-40f4-bf88-ed348b13e085']
    }, function(err, rows, fields) {
        if (err) throw err;
        res.json({ error: '0', user: { id: 'xxx-02', name: 'xxx-name02' }, extend: rows });
    });
});

module.exports = router;