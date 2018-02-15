var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(component.numOfInvocations).to.equal(0);

    component.input = {
        colors: ['red', 'blue']
    };
    component.update();

    expect(component.numOfInvocations).to.equal(1);

    component.input = {
        colors: ['red']
    };
    component.update();

    expect(component.numOfInvocations).to.equal(2);
};
