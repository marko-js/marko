var assert = require("assert/strict");

it("should handle ending </script> tag", function () {
  assert.equal(document.readyState, "complete");
  assert.equal(window.fooComponent.state.evil, '</script><script>alert("hello")</script>');
  assert.equal(window.fooComponent.componentConfig.evil, '</script><script>alert("hello")</script>');
});
