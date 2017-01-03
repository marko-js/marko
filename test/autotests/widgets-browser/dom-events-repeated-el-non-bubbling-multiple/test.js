var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: [ 'red', 'green', 'blue' ]
    });

    var liEls = widget.el.querySelectorAll('li');

    helpers.triggerMouseEvent(liEls[0], 'mouseover');
    expect(widget.mouseOverColor).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'mouseover');
    expect(widget.mouseOverColor).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'mouseover');
    expect(widget.mouseOverColor).to.equal('blue');

    helpers.triggerMouseEvent(liEls[0], 'mouseout');
    expect(widget.mouseOutColor).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'mouseout');
    expect(widget.mouseOutColor).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'mouseout');
    expect(widget.mouseOutColor).to.equal('blue');
};