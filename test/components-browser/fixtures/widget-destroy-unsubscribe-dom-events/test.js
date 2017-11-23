var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    // expect(Array.isArray(component.___domEventListenerHandles)).to.equal(true);

    var el = component.el;
    var fooLink = component.getEl('fooLink');

    component.destroy();

    // expect(component.___domEventListenerHandles).to.equal(null);

    // Make sure the component is removed from the DOM tree

    expect(el.parentNode == null).to.equal(true);

    // Make sure there are no DOM event listeners
    component.clearLog();
    helpers.triggerMouseEvent(fooLink, 'mouseout');
    expect(component.logOutput).to.deep.equal([]);
};