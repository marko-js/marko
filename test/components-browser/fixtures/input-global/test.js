var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index.marko'), {
        $global: {
            pathname: '/'
        }
    });

    expect(component.getEl('current').innerHTML).to.equal('Pathname: /');

    component.input = {
        $global: {
            pathname: '/test'
        }
    };
    component.update();

    expect(component.getEl('current').innerHTML).to.equal('Pathname: /test');
};

module.exports.skipHydrate = true;