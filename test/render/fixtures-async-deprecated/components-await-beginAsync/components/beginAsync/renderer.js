const { promiseProvider } = require("../../../../../__util__/async-helpers");

module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    promiseProvider(1).then(function() {
        input.renderBody(asyncOut);
        asyncOut.end();
    });
};
