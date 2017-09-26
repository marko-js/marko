var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(helpers.targetEl.querySelector('.hello') != null).to.equal(true);
    component.destroy();
    expect(helpers.targetEl.querySelector('.hello') == null).to.equal(true);
};
