exports.check = function(marko, markoCompiler, expect, done) {
    var template = require('./template.marko');
    var data = {
        name: 'John'
    };
    template.render(data, function(error, html, out) {
        expect(html).to.equal('Hello John!');
        expect(out != null).to.equal(true);
        done();
    });
};