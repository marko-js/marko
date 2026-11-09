var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var hello = require("./components/hello").default;

  var targetEl = component.getEl("target");
  hello
    .render({ name: "John" })
    .then(function (result) {
      result.replace(targetEl);
      assert.equal(component.el.firstElementChild.className, "hello");
      assert.equal(component.el.firstElementChild.innerHTML, "Hello John");
      done();
    })
    .catch(function (err) {
      done(err);
    });
};
