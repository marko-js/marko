const {
    promiseProvider,
    callbackProvider
} = require("../../../__util__/async-helpers");

exports.templateData = {
    sharedData: function() {
        return promiseProvider(1, { name: "testSharedData" });
    },
    contextData: callbackProvider(1, {
        name: "testContextData"
    })
};
