var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var out = template.createOut();

    template.render(
        {
            userPromise: new Promise((_, reject) => {
                setTimeout(function() {
                    reject(new Error("User Promise Rejected Error"));
                }, 10);
            })
        },
        out
    );

    out.on("error", err => {
        expect(
            err.message.indexOf("User Promise Rejected Error") !== -1
        ).to.equal(true);
        done();
    });
};
