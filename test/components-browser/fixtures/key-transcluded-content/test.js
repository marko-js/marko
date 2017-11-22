var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var passwordInput = component.getEl('passwordInput');
    expect(passwordInput.type).to.equal('password');
};