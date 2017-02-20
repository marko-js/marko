var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.buttonClickCalls.length).to.equal(0);

	helpers.triggerClick(widget.getEl('ok'));

    expect(widget.buttonClickCalls.length).to.equal(1);

    expect(widget.buttonClickCalls[0][0]).to.equal('ok');
    expect(widget.buttonClickCalls[0][1].stopPropagation).to.be.a('function');
    expect(widget.buttonClickCalls[0][2].innerHTML).to.equal('OK');

    helpers.triggerClick(widget.getEl('cancel'));

    expect(widget.buttonClickCalls.length).to.equal(2);

    expect(widget.buttonClickCalls[1][0]).to.equal('cancel');
    expect(widget.buttonClickCalls[1][1].stopPropagation).to.be.a('function');
    expect(widget.buttonClickCalls[1][2].innerHTML).to.equal('Cancel');
};