var assert = require("assert/strict");

it("should update correctly", function () {
  var component = window.component;
  var $el = component.getEl("root");

  assert.deepEqual($el.innerHTML, "");

  component.append("a");
  component.update();
  assert.deepEqual($el.innerHTML, '<li id="a"><span>a</span></li>');

  component.append("b");
  component.update();
  assert.deepEqual($el.innerHTML, '<li id="a"><span>a</span></li><li id="b"><span>b</span></li>');
});
