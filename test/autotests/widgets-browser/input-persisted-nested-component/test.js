var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        color:'red'
    });

    expect(widget.el.getAttribute('style')).to.equal('color:red;');
    expect(widget.getWidget('counter').el.getAttribute('style')).to.equal('color:red;');
    expect(widget.getWidget('counter').el.querySelector('.count').innerHTML).to.equal('0');

    widget.getWidget('counter').increment();
    widget.getWidget('counter').update();

    expect(widget.el.getAttribute('style')).to.equal('color:red;');
    expect(widget.getWidget('counter').el.getAttribute('style')).to.equal('color:red;');
    expect(widget.getWidget('counter').el.querySelector('.count').innerHTML).to.equal('1');

    widget.updateColor('green');
    widget.update();

    expect(widget.el.getAttribute('style')).to.equal('color:green;');
    expect(widget.getWidget('counter').el.getAttribute('style')).to.equal('color:green;');
    expect(widget.getWidget('counter').el.querySelector('.count').innerHTML).to.equal('1');

    //
    // expect(widget.el.style.color).to.equal('#09c;');
    // expect(widget.getWidget('counter').el.style.color).to.equal('#09c;');
    //
    // expect(widget.getEl('current').getAttribute('style')).to.equal('color:#09c;');
};