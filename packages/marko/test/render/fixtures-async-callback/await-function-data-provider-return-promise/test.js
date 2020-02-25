const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  userInfo: function() {
    return promiseProvider(1, {
      name: "John"
    });
  }
};
