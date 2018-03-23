var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var data = {
        name: "John",
        $global: {
            greeting: "Greetings"
        }
    };
    template.render(data, function(error, result) {
        snapshot(result.toString());
        done();
    });
};
