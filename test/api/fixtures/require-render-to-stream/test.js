var through = require("through");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var output = "";
    var outStream = through(function write(data) {
        output += data;
    });

    outStream.on("end", function() {
        snapshot(output);
        done();
    });

    var template = require("./template.marko");
    template
        .stream({
            name: "John"
        })
        .pipe(outStream)
        .on("error", function(e) {
            done(e);
        });
};
