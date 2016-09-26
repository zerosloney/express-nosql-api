'use strict';

//引入日志

module.exports = errorHandler;

function errorHandler() {
    return function errorHandler(err, req, res, next) {
        res.status(500).json({
            error: '50001',
            msg: err
        });
    };
}
