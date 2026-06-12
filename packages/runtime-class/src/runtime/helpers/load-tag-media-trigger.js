"use strict";

module.exports = function mediaTrigger(query) {
  var pending;
  return function (load) {
    return function () {
      return (
        pending ||
        (pending = new Promise(function (resolve) {
          var mql = matchMedia(query);
          if (mql.matches) resolve();
          else mql.addEventListener("change", resolve, { once: true });
        }))
      ).then(load);
    };
  };
};
