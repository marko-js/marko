var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(component.id).to.be.a('string');
    expect(component.emit).to.be.a('function');
    expect(component.on).to.be.a('function');
    expect(component.once).to.be.a('function');
    expect(component.subscribeTo).to.be.a('function');
    expect(component.getElId).to.be.a('function');
    expect(component.elId).to.be.a('function');
    expect(component.getEl).to.be.a('function');
    expect(component.destroy).to.be.a('function');
    expect(component.isDestroyed).to.be.a('function');
    expect(component.update).to.be.a('function');
    expect(component.forceUpdate).to.be.a('function');
    expect(component.appendTo).to.be.a('function');
    expect(component.replace).to.be.a('function');
    expect(component.replaceChildrenOf).to.be.a('function');
    expect(component.insertBefore).to.be.a('function');
    expect(component.insertAfter).to.be.a('function');
    expect(component.prependTo).to.be.a('function');
};