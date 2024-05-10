const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  testDataProvider: callbackProvider(1, { name: "Frank" }),
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
