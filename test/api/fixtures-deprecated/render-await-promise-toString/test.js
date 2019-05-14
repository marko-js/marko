var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));

    template
        .render({
            userPromise: new Promise(resolve => {
                setTimeout(function() {
                    resolve({ name: "John" });
                }, 10);
            })
        })
        .then(result => {
            process.nextTick(() => {
                snapshot(result.toString());
                done();
            });
        });
};
