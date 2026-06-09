"use strict";

module.exports = function loadIdleTrigger(options) {
  var pending;
  return function (load) {
    return function () {
      return (
        pending ||
        (pending = new Promise(function (resolve) {
          (self.requestIdleCallback || resolve)(resolve, options);
        }))
      ).then(load);
    };
  };
};
