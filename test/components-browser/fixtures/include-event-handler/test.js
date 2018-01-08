var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.helloReceived).to.equal(false);

    component.el.querySelector('button').click();

    expect(component.helloReceived).to.equal(true);
};