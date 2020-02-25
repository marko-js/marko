const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  promiseData: function() {
    return promiseProvider(1, "Test promise");
  }
};
