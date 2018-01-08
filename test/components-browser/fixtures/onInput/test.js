var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'), {
        name: 'Frank'
    });

    expect(component.onMountCalled).to.eql(true);
};