var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});
    var childComponents = component.getComponents('childComponent');
    expect(childComponents.length).to.equal(1);
};