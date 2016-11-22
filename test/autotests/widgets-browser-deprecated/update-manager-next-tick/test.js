var expect = require('chai').expect;

module.exports = function(helpers, done) {
    var widget = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    expect(widget.el.className).to.contain('large');
    widget.setSize('small');
    expect(widget.el.className).to.not.contain('small');

    require('marko/widgets').onAfterUpdate(function() {
        expect(widget.el.className).to.contain('small');
        done();
    });
};