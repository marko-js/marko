"use strict";

var noop = function () {
  return Promise.resolve();
};

module.exports = function loadRaceTrigger() {
  var triggers = Array.prototype.slice.call(arguments);
  var pending;
  return function (load) {
    return function () {
      return (
        pending ||
        (pending = Promise.race(
          triggers.map(function (t) {
            return t(noop)();
          }),
        ))
      ).then(load);
    };
  };
};
