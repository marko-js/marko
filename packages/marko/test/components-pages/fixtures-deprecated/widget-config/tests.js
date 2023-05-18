var expect = require("chai").expect;

it("should serialize widget config down to the browser", function () {
  expect(window.fooWidget.widgetConfig.name).to.equal("app-foo");
});
