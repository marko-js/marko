var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        interactive: true
    });

    expect(widget.el).to.be.instanceOf(HTMLButtonElement);

    widget.setState('interactive', false);
    widget.update();

    expect(widget.el).to.be.instanceOf(HTMLDivElement);
};