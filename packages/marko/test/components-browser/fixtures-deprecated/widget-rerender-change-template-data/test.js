var expect = require("chai").expect;

module.exports = function (helpers) {
  var targetEl = helpers.targetEl;

  helpers.mount(require.resolve("./template.marko"), {
    item: {
      test: 1
    }
  });

  expect(targetEl.innerHTML).to.contain("Test is 1");
};
