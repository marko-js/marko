var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var out = template.createOut();

    template.render(
        {
            userPromise: new Promise((_, reject) => {
                setTimeout(function() {
                    reject(new Error("failed"));
                }, 10);
            })
        },
        out
    );

    out.on("error", err => {
        expect(err.message.startsWith("Render error")).to.equal(true);
        done();
    });
};
