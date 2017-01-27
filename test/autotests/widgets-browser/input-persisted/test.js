var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        color:'#09c'
    });

    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');

    widget.increment();
    widget.update();

    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');
};