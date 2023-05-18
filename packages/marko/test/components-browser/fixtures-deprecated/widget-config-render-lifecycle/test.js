var expect = require("chai").expect;

module.exports = function (helpers) {
  var widget = helpers.mount(require.resolve("./index"), {
    name: "Frank"
  });

  const expectedConfig = [
    "getInitialProps",
    "getInitialState",
    "getTemplateData",
    "getWidgetConfig"
  ];

  if (helpers.isHydrate) {
    expectedConfig.push("getTemplateData");
  }

  expect(widget.config).to.deep.equal(expectedConfig);
};
