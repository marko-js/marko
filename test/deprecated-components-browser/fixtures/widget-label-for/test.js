var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    var label = widget.getEl('label');
    var forElId = label.getAttribute('for');
    var inputEl = document.getElementById(forElId);

    expect(forElId).to.exist;
    expect(inputEl.value).to.equal('test');
    expect(label.getAttribute('w-for')).to.equal(null);
};