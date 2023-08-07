const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  userProvider: callbackProvider(1, { name: "Frank" }),
};
