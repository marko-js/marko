const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  getD1: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD2: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD3: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD4: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD5: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD6: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD7: () => promiseProvider(Math.ceil(Math.random() * 10)),
  getD8: () => promiseProvider(Math.ceil(Math.random() * 10))
};

exports.noFlushComment = true;
