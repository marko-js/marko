"use strict";

module.exports = function loadEventTrigger(event, selector) {
  var pending;
  return function (load) {
    return function () {
      return (
        pending ||
        (pending = new Promise(function (resolve) {
          var el =
            document.querySelector(selector) ||
            // eslint-disable-next-line no-constant-binary-expression
            ("MARKO_DEBUG" &&
              console.warn(
                'A lazy load trigger could not find an element matching "' +
                  selector +
                  '". The module was loaded immediately.',
              ),
            resolve());
          if (el) el.addEventListener(event, resolve, { once: true });
        }))
      ).then(load);
    };
  };
};
