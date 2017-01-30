var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        name: 'Frank'
    });

    expect(widget.el.querySelector('render-count')).to.equal(0);

    widget.setProps({
        name: 'Frank'
    });

    widget.update();

    expect(widget.el.querySelector('render-count')).to.equal(0);



    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');

    widget.increment();
    widget.update();

    expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');
};