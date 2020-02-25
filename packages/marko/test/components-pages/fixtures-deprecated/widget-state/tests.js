var expect = require("chai").expect;

it("should serialize widget config down to the browser", function() {
  expect(window.fooWidget.state.name).to.equal("app-foo");
});
