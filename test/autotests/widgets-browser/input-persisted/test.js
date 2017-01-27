var expect = require('chai').expect;

module.exports = function(helpers) {
    console.log('BEFORE MOUNT')
    var widget = helpers.mount(require('./index.marko'), {
        color:'#09c'
    });

    console.log('AFTER MOUNT, BEFORE UPDATE')

    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');

    widget.increment();
    widget.update();

    console.log('AFTER UPDATE')

    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');
};