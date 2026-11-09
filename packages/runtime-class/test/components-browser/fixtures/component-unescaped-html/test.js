var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.el.childNodes.length, 1);
  assert.equal(component.el.firstChild.nodeName, "INPUT");
  assert.equal(component.el.firstChild.value, "x");

  component.state.html = "<textarea>HELLO WORLD!</textarea>";
  component.update();

  assert.equal(component.el.childNodes.length, 1);
  assert.equal(component.el.firstChild.nodeName, "TEXTAREA");
  assert.equal(component.el.firstChild.value, "HELLO WORLD!");

  component.state.html =
    '<select><option value="1">One</option><option value="2" selected>Two</option></select>';
  component.update();

  assert.equal(component.el.childNodes.length, 1);
  assert.equal(component.el.firstChild.nodeName, "SELECT");
  assert.equal(component.el.firstChild.selectedIndex, 1);

  component.state.html =
    '<!-- A comment -->';
  component.update();

  assert.equal(component.el.childNodes.length, 1);
  assert.equal(component.el.firstChild.nodeType, Node.COMMENT_NODE);
  assert.equal(component.el.firstChild.data, " A comment ");
};
