const { callbackProvider } = require("../../../__util__/async-helpers");

exports.tests = [
  {
    templateData: {
      D1: callbackProvider(1)
    },
    expectedFile: require.resolve("./expected.html")
  }
];
