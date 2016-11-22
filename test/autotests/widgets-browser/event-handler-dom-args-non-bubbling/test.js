var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.mouseMoveEvent).to.equal(undefined);

	helpers.triggerMouseMove(widget.getEl('ok'));

    expect(widget.mouseMoveEvent[0]).to.equal('ok');
    expect(widget.mouseMoveEvent[1].stopPropagation).to.be.a('function');
    expect(widget.mouseMoveEvent[2].innerHTML).to.equal('OK');

    helpers.triggerMouseMove(widget.getEl('cancel'));

    expect(widget.mouseMoveEvent[0]).to.equal('cancel');
    expect(widget.mouseMoveEvent[1].stopPropagation).to.be.a('function');
    expect(widget.mouseMoveEvent[2].innerHTML).to.equal('Cancel');
};