var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    widget.getWidget('ok').emitPressEvent();

    expect(widget.pressEvent[0].type).to.equal('ok');
    expect(widget.pressEvent[1].widget).to.equal(widget.getWidget('ok'));

    widget.getWidget('cancel').emitPressEvent();

    expect(widget.pressEvent[0].type).to.equal('cancel');
    expect(widget.pressEvent[1].widget).to.equal(widget.getWidget('cancel'));
};