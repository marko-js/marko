var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var output;
    var e;

    try {
        output = template.renderSync({
            nameDataProvider: function(arg, callback) {
                setTimeout(function() {
                    callback(null, "John");
                }, 100);
            }
        });
    } catch (_e) {
        e = _e;
    }

    expect(output).to.equal(undefined);
    expect(e).to.not.equal(undefined);
    done();
};
