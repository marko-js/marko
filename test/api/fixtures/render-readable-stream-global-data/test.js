var nodePath = require("path");
var through = require("through");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var output = "";

    var stream = through(function write(data) {
        output += data;
    });

    stream
        .on("end", function() {
            snapshot(output);
            done();
        })
        .on("error", function(e) {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    template
        .stream({
            $global: {
                foo: "bar"
            }
        })
        .pipe(stream);
};
