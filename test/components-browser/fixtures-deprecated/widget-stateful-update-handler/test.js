var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var oldEl = widget.el;

    var button1Widget = widget.getWidget('button1');
    var button2Widget = widget.getWidget('button2');

    expect(button1Widget.el.className).to.contain('small');
    expect(button2Widget.el.className).to.contain('small');

    expect(button1Widget.el.innerHTML).to.contain('Initial Label');
    expect(button2Widget.el.innerHTML).to.contain('Initial Label');

    widget.setState('buttonSize', 'large');
    widget.update();

    expect(button1Widget).to.equal(widget.getWidget('button1'));
    expect(button2Widget).to.equal(widget.getWidget('button2'));

    expect(button1Widget.el.className).to.contain('large');
    expect(button2Widget.el.className).to.contain('small');

    expect(button1Widget.el.innerHTML).to.contain('Initial Label');
    expect(button2Widget.el.innerHTML).to.contain('Initial Label');

    expect(widget.el).to.equal(oldEl);
};