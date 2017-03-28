var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var out = template.createOut();
    var events = [];
    var error;

    out
        .on('error', function(_error) {
            events.push('error');
            error = _error;
        })
        .on('finish', function() {
            events.push('finish');

            expect(events).to.deep.equal(['error', 'finish']);
            expect(error != null).to.equal(true);
            expect(error.toString()).to.contain('invalid');

            done();
        });
    template.render({ name: 'John' }, out);


};
