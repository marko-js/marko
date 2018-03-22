var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var runtimeHtml = require("marko/html");

    var out = runtimeHtml.createWriter();
    out
        .on("finish", function(result) {
            snapshot(result.getOutput());
            done();
        })
        .on("error", function(e) {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    template.render(
        {
            name: "John"
        },
        out
    );

    out.end();
};
