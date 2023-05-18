var expect = require("chai").expect;

module.exports = function (helpers) {
  var widget = helpers.mount(require.resolve("./"));
  expect(Object.keys(widget.state.toJSON())).has.length(2);
  expect(widget.state).has.property("size", "normal");
  expect(widget.state).has.property("variant", "primary");

  widget.state = {};
  expect(Object.keys(widget.state.toJSON())).has.length(2);
  expect(widget.state).has.property("size", "normal");
  expect(widget.state).has.property("variant", "primary");

  widget.state = { newProp: 1 };

  expect(Object.keys(widget.state.toJSON())).has.length(3);
  expect(widget.state).has.property("size", "normal");
  expect(widget.state).has.property("variant", "primary");
  expect(widget.state).has.property("newProp", 1);
};
