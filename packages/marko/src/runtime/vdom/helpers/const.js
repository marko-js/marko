"use strict";

module.exports = function (id) {
  var i = 0;
  return function () {
    return id + i++;
  };
};
