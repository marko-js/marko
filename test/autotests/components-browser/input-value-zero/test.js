var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        value: 1
    });

    expect(widget.getEl('input').value).to.equal('1');

    widget.state.value = 0;
    widget.update();

    expect(widget.getEl('input').value).to.equal('0');
};