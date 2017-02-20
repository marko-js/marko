var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./'), {});
    var submitButton = widget.getWidget('submitButton');
    var cancelButton = widget.getWidget('cancelButton');

    expect(submitButton != null).to.equal(true);
    expect(cancelButton != null).to.equal(true);
};