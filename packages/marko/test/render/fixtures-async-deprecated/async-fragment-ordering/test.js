const { callbackProvider } = require("../../../__util__/async-helpers");

exports.tests = [
  {
    templateData: {
      D1: callbackProvider(1),
      D2: callbackProvider(3),
      D3: callbackProvider(2),
      D4: callbackProvider(4),
    },
    expectedFile: require.resolve("./expected.html"),
  },
  {
    templateData: {
      D1: callbackProvider(1),
      D2: callbackProvider(3),
      D3: callbackProvider(4),
      D4: callbackProvider(2),
    },
    expectedFile: require.resolve("./expected.html"),
  },
  {
    templateData: {
      D1: callbackProvider(4),
      D2: callbackProvider(2),
      D3: callbackProvider(3),
      D4: callbackProvider(1),
    },
    expectedFile: require.resolve("./expected.html"),
  },
  {
    templateData: {
      D1: callbackProvider(4),
      D2: callbackProvider(3),
      D3: callbackProvider(2),
      D4: callbackProvider(1),
    },
    expectedFile: require.resolve("./expected.html"),
  },
];
