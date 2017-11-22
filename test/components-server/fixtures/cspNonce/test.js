module.exports = function (helpers, done) {
    var template = require('./template.marko');

    template.render({ $global: { cspNonce: 'abc123' } }, function (err, html, out) {
        if (!/<script.*nonce="abc123".*>/.test(html)) {
            throw new Error('script tag does not contain a nonce');
        }
        done();
    });
};