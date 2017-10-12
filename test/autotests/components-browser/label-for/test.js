var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});
    var label = component.getEl('root').querySelector('label');
    var forElId = label.getAttribute('for');
    var inputEl = document.getElementById(forElId);

    expect(!!forElId).to.equal(true);
    expect(inputEl.value).to.equal('test');
    expect(label.getAttribute('for:scoped')).to.equal(null);
};
