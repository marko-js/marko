var expect = require("chai").expect;

it("should handle ending </script> tag", function () {
  expect(document.readyState).to.equal("complete");
  expect(window.fooComponent.state.evil).to.equal(
    '</script><script>alert("hello")</script>',
  );
  expect(window.fooComponent.componentConfig.evil).to.equal(
    '</script><script>alert("hello")</script>',
  );
});
