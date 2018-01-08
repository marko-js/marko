var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var component = helpers.mount(require('./index'), {
        name: 'john'
    });

    component.on('html', function (renderedHtml) {
        expect(renderedHtml).to.equal('<div>[async] john</div>');
        done();
    });

    component.on('error', function (error) {
        done(error);
    });
};