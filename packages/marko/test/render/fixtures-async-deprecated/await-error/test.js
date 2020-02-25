const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  testDataProvider: callbackProvider(1, new Error("Something went wrong!"))
};
