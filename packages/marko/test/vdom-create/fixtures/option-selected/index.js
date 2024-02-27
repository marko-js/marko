var expect = require("chai").expect;

module.exports = function (helpers) {
  var el = helpers.vdom.createElement(
    "option",
    { selected: "" },
    0 /* childCount */,
  );
  expect(el.___attributes.selected).to.equal("");
  return el;
};
