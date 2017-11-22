var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var fooComponent = component.getComponent('foo');
    expect(fooComponent.el.className).to.equal('foo');

    var link = component.getEl('link');
    expect(link.nodeName).to.equal('A');
};