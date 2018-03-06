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

module.exports.skipHydrate = 'When hydrating, only one $global value can be passed.  This test uses 2.';