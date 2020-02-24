exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    var template = require("./template.marko");
    var data = {
        name: "John"
    };
    template.renderToString(data, function(error, html, out) {
        snapshot(html);
        expect(out != null).to.equal(true);
        done();
    });
};
