var nodePath = require("path");
var callbackProvider = require("../../../__util__/async-helpers")
    .callbackProvider;

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var output;
    var e;

    try {
        output = template.renderSync({
            nameDataProvider: callbackProvider(1, "John")
        });
    } catch (_e) {
        e = _e;
    }

    expect(output).to.equal(undefined);
    expect(e).to.not.equal(undefined);
    done();
};
