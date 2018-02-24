var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {
        interactive: true
    });

    expect(widget.el).to.be.instanceOf(HTMLButtonElement);

    widget.setState('interactive', false);
    widget.update();

    expect(widget.el).to.be.instanceOf(HTMLDivElement);
};