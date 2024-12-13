const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  getD1: () => promiseProvider(1),
  getD2: () => promiseProvider(3),
  getD3: () => promiseProvider(2),
  getD4: () => promiseProvider(4),
};
