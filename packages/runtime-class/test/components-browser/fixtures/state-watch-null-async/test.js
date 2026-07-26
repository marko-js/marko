// see https://github.com/marko-js/marko/issues/556
var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  expect(component.el.innerHTML).to.not.contain("FATAL ERROR");

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
          expect(component.el.innerHTML).to.contain("FATAL ERROR");
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
