var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    var liEls = widget.el.querySelectorAll('li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(widget.color).to.equal('red');

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(widget.color).to.equal('green');

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(widget.color).to.equal('blue');
};