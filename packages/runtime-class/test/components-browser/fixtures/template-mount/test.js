var assert = require("assert/strict");

// `template.mount` is the public entry the browser helpers bypass; each
// position lands the rendered nodes somewhere different relative to the target.
module.exports = function (helpers) {
  var template = require("./index.marko");
  template = template.default || template;
  var target = helpers.targetEl;

  var textOf = function (el) {
    return el.textContent;
  };

  var inside = template.mount({ label: "beforeend" }, target);
  assert.match(textOf(target), /beforeend/);

  template.mount({ label: "afterbegin" }, target, "afterbegin");
  assert.equal(textOf(target).indexOf("afterbegin"), 0);

  template.mount({ label: "beforebegin" }, target, "beforebegin");
  template.mount({ label: "afterend" }, target, "afterend");
  assert.match(textOf(target.parentNode), /beforebegin/);
  assert.match(textOf(target.parentNode), /afterend/);

  // The handle it returns drives the mounted component.
  inside.update({ label: "updated" });
  assert.match(textOf(target), /updated/);

  inside.destroy();
  assert.doesNotMatch(textOf(target), /updated/);
};
