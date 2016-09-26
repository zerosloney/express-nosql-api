'use strict';

module.exports = beforeRequest;

function beforeRequest() {
    return function beforeRequest(req, res, next) {
        var bearerHeader = req.headers['x-access-token'];
        if (typeof bearerHeader !== 'undefined') {
            console.log(req.headers['x-access-token']);
            next();
        } else {
            var err = 'Token Not Found';
            next(err);
        }
    };
}
