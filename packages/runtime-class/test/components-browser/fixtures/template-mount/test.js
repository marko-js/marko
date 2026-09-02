var expect = require("chai").expect;

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
  expect(textOf(target)).to.contain("beforeend");

  template.mount({ label: "afterbegin" }, target, "afterbegin");
  expect(textOf(target).indexOf("afterbegin")).to.equal(0);

  template.mount({ label: "beforebegin" }, target, "beforebegin");
  template.mount({ label: "afterend" }, target, "afterend");
  expect(textOf(target.parentNode)).to.contain("beforebegin");
  expect(textOf(target.parentNode)).to.contain("afterend");

  // The handle it returns drives the mounted component.
  inside.update({ label: "updated" });
  expect(textOf(target)).to.contain("updated");

  inside.destroy();
  expect(textOf(target)).to.not.contain("updated");
};
