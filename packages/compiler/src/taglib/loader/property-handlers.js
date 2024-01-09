"use strict";

const { hasOwnProperty } = Object.prototype;
const taglibConfig = require("../config");

function removeDashes(str) {
  return str.replace(/-([a-z])/g, function (match, lower) {
    return lower.toUpperCase();
  });
}

module.exports = function invokeHandlers(config, handlers, path) {
  function error(message, cause) {
    if (cause) {
      if (cause.__propertyHandlers) {
        throw cause;
      }

      message += ". Cause: " + (cause.stack || cause);
    }

    if (path) {
      message += " (" + path + ")";
    }

    var e = new Error(message);
    e.__propertyHandlers = true;
    taglibConfig.onError(e);
  }

  if (!config) {
    error('"config" argument is required');
  }

  if (typeof config !== "object") {
    error("object expected");
  }

  for (var k in config) {
    if (hasOwnProperty.call(config, k)) {
      var value = config[k];
      var keyNoDashes = removeDashes(k);
      var handler = handlers[keyNoDashes];
      var isDefaultHandler = false;

      if (!handler) {
        handler = handlers["*"];
        isDefaultHandler = true;
      }

      if (!handler) {
        var badProperty = JSON.stringify(k);
        if (k !== keyNoDashes) {
          badProperty += "/" + JSON.stringify(keyNoDashes);
        }
        error(
          "Invalid option of " +
            badProperty +
            ". Allowed: " +
            Object.keys(handlers).join(", "),
        );
      }

      try {
        if (isDefaultHandler) {
          if (handler.call(handlers, k, value) === false) {
            error("Invalid option: " + k);
          }
        } else {
          handler.call(handlers, value);
        }
      } catch (e) {
        error('Error while applying option of "' + k + '"', e);
      }
    }
  }

  if (handlers._end) {
    try {
      handlers._end();
    } catch (e) {
      error("Error after applying properties", e);
    }
  }
};
