var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var widget = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    widget.onUpdate = function () {
        expect(widget.el.className).to.contain('small');
        done();
    };

    expect(widget.el.className).to.contain('large');
    widget.setSize('small');
    expect(widget.el.className).to.not.contain('small');
};