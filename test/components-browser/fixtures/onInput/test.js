var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index.marko'), {
        name: 'Frank'
    });

    expect(component.onMountCalled).to.eql(true);
};