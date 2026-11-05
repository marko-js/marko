// see https://github.com/marko-js/marko/issues/556
var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.doesNotMatch(component.el.innerHTML, /FATAL ERROR/);

  helpers.triggerEvent(component.getEl(), "submit");

  // The component sets its state on a timer, so poll for the render instead
  // of asserting on a deadline a loaded machine can miss.
  return new Promise(function (resolve, reject) {
    var deadline = Date.now() + 5000;
    (function check() {
      if (component.el.innerHTML.indexOf("FATAL ERROR") !== -1) {
        resolve();
      } else if (Date.now() > deadline) {
        try {
          assert.match(component.el.innerHTML, /FATAL ERROR/);
          resolve();
        } catch (err) {
          reject(err);
        }
      } else {
        setTimeout(check, 10);
      }
    })();
  });
};
