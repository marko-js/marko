var expect = require("chai").expect;

it("should allow fixed IDs for widgets", function () {
  var widget = window.appFixedId;
  expect(widget.el.id).to.equal("appFixedId");
  widget.testGetWidget();
  widget.testGetEl();
});
