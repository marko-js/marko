var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {
        includeWidget: false
    });

    expect(widget == null).to.equal(true);

    expect(helpers.targetEl.innerHTML).contain('[app-conditional-widget]');

    widget = helpers.mountLegacy({ component:require.resolve('./index') }, {
        includeWidget: true
    });

    expect(widget != null).to.equal(true);
};

