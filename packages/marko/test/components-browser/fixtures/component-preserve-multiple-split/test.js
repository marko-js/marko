var expect = require("chai").expect;

module.exports = function(helpers) {
  helpers.mount(require.resolve("./index"), {});
  expect(window.mountCount).to.equal(3);
};
