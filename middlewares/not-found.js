'use strict';

module.exports = notFoundHandler;

function notFoundHandler() {
  return function notFoundHandler(req, res, next) {
    var err = 'Not Found';
    next(err);
  };
}
