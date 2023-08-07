var expect = require("chai").expect;

module.exports = async function (helpers) {
  var isHydrate = helpers.isHydrate;
  var component = helpers.mount(require.resolve("./index"));

  var preservedText = component.getEl("preserved");
  var unpreservedText = component.getEl("unpreserved");
  var button = component.getComponent("counter").getEl("button");

  expect(preservedText.textContent).to.equal(isHydrate ? "Server" : "Browser");
  expect(unpreservedText.textContent).to.equal("Browser");
  expect(button.textContent).to.equal(isHydrate ? "0" : "10");

  button.click();
  await new Promise((resolve) => setTimeout(resolve));

  expect(button.textContent).to.equal(isHydrate ? "1" : "11");
};
