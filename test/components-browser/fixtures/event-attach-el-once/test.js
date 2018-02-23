var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red']
    });

    // When hydrating, the first color item was rendered on the
    // server so there is no corresponding attach event fired
    var OFFSET = helpers.isHydrate ? -1 : 0;

    expect(component.numberOfInvocations).to.equal(OFFSET+1);

    component.input = {
        colors: ['red', 'blue']
    };
    component.update();

    expect(component.numberOfInvocations).to.equal(OFFSET+2);

    component.input = {
        colors: ['red', 'green', 'blue']
    };
    component.update();

    expect(component.numberOfInvocations).to.equal(OFFSET+3);
};
