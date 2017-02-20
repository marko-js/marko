var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./'), {});
    var submitButton = component.getComponent('submitButton');
    var cancelButton = component.getComponent('cancelButton');

    expect(submitButton != null).to.equal(true);
    expect(cancelButton != null).to.equal(true);
};