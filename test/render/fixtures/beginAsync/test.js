const { promiseProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
    beginAsync: function(out) {
        var asyncOut = out.beginAsync();
        promiseProvider(1).then(function() {
            asyncOut.write("B");
            asyncOut.end();
        });
    }
};
