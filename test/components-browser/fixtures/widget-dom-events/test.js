var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    component.clearLog();

    // Trigger a click event on the root element
    helpers.triggerMouseEvent(component.el, 'click');
    expect(component.logOutput).to.deep.equal(['el:click']);

    component.clearLog();
    helpers.triggerMouseEvent(component.getEl('button'), 'click');
    expect(component.logOutput).to.deep.equal(['button:click', 'el:click']);

    component.clearLog();
    helpers.triggerMouseEvent(component.getEl('button').firstElementChild, 'click');
    expect(component.logOutput).to.deep.equal(['button:click', 'el:click']);

    component.clearLog();
    helpers.triggerMouseEvent(component.el, 'mousemove');
    expect(component.logOutput).to.deep.equal(['el:mousemove']);

    component.clearLog();
    helpers.triggerMouseEvent(component.getEl('button').firstElementChild, 'mousemove');
    expect(component.logOutput).to.deep.equal(['button>span:mousemove', 'el:mousemove']);

    component.clearLog();
    helpers.triggerMouseEvent(document.getElementById('fooLink'), 'dblclick');
    expect(component.logOutput).to.deep.equal(['#fooLink:dblclick']);

    component.clearLog();
    helpers.triggerMouseEvent(document.getElementById('fooLink'), 'mouseout');
    expect(component.logOutput).to.deep.equal(['#fooLink:mouseout']);

    component.clearLog();
    expect(component.getComponent('appButton').clicked).to.equal(false);
    helpers.triggerMouseEvent(component.getEl('helloWorld'), 'mousedown');
    expect(component.logOutput).to.deep.equal(['#helloWorld:mousedown']);
    expect(component.getComponent('appButton').clicked).to.equal(true);
};