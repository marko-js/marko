var expect = require("chai").expect;

module.exports = function (helpers) {
  var widget = helpers.mount(require.resolve("./index"), {});

  expect(widget.updatedX).to.equal(undefined);

  widget.destroy();

  expect(widget.updatedX).to.equal(undefined);

  widget.setState("x", 2);
  widget.update();

  expect(widget.updatedX).to.equal(true);
};
