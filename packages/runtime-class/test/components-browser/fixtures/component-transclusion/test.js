var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var el = component.el;
  var originalH1Html = el.querySelector("h1").innerHTML;

  assert.match(el.innerHTML, /alert alert-success/);

  // The inner HTML for the H1 should not change since only the body content changed
  component.setAlertMessage("Hello Universe");
  component.update();

  assert.equal(el.querySelector("h1").innerHTML, originalH1Html);
  assert.match(el.querySelector("h1").innerHTML, /success/);
  assert.match(el.querySelector(".alert").className, /alert alert-success/);

  // The inner HTML for the H1 should change since the state of the alert component changed
  component.setAlertType("failure");
  component.update();

  assert.notEqual(el.querySelector("h1").innerHTML, originalH1Html);
  assert.match(el.querySelector("h1").innerHTML, /failure/);
  assert.match(el.querySelector(".alert").className, /alert alert-failure/);
};
