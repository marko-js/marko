"use strict";

module.exports = function classHelper(arg) {
  var len,
    name,
    value,
    str = "";

  if (arg) {
    if (typeof arg === "string") {
      if (arg) {
        str += " " + arg;
      }
    } else if (typeof (len = arg.length) === "number") {
      for (var i = 0; i < len; i++) {
        value = classHelper(arg[i]);
        if (value) {
          str += " " + value;
        }
      }
    } else if (typeof arg === "object") {
      for (name in arg) {
        value = arg[name];
        if (value) {
          str += " " + name;
        }
      }
    }
  }

  return (str && str.slice(1)) || null;
};
