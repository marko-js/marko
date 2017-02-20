var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        colors: [ 'red', 'green', 'blue' ]
    });

    var liEls = widget.el.querySelectorAll('ul.primary li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(widget.color).to.deep.equal({color: 'red', type: 'primary'});

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(widget.color).to.deep.equal({color: 'green', type: 'primary'});

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(widget.color).to.deep.equal({color: 'blue', type: 'primary'});

    liEls = widget.el.querySelectorAll('ul.secondary li');

    helpers.triggerMouseEvent(liEls[0], 'click');
    expect(widget.color).to.deep.equal({color: 'red', type: 'secondary'});

    helpers.triggerMouseEvent(liEls[1], 'click');
    expect(widget.color).to.deep.equal({color: 'green', type: 'secondary'});

    helpers.triggerMouseEvent(liEls[2], 'click');
    expect(widget.color).to.deep.equal({color: 'blue', type: 'secondary'});
};