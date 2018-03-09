var nodePath = require("path");
var through = require("through");

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var output = "";
    var outStream = through(function write(data) {
        output += data;
    });

    outStream.on("end", function() {
        helpers.compare(output);
        done();
    });

    var template = require(nodePath.join(__dirname, "template.marko"));
    template
        .stream({
            name: "John"
        })
        .pipe(outStream)
        .on("error", function(e) {
            done(e);
        });
};
