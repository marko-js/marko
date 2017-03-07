var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });

    var fooEl = component.getEl('foo');
    expect(fooEl.className).to.equal('foo');
};
