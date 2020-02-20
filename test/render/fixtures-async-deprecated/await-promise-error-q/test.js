const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
    promiseData: promiseProvider(1, {})
};
