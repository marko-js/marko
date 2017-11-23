exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var template = require('./template.marko');
    var data = {
        name: 'John'
    };
    template.renderToString(data, function (error, html, out) {
        helpers.compare(html);
        expect(out != null).to.equal(true);
        done();
    });
};