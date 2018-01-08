var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    widget.clearLog();

    // Trigger a click event on the root element
    helpers.triggerMouseEvent(widget.el, 'click');
    expect(widget.logOutput).to.deep.equal(['el:click']);

    widget.clearLog();
    helpers.triggerMouseEvent(widget.getEl('button'), 'click');
    expect(widget.logOutput).to.deep.equal(['button:click', 'el:click']);

    widget.clearLog();
    helpers.triggerMouseEvent(widget.getEl('button').firstElementChild, 'click');
    expect(widget.logOutput).to.deep.equal(['button:click', 'el:click']);

    widget.clearLog();
    helpers.triggerMouseEvent(widget.el, 'mousemove');
    expect(widget.logOutput).to.deep.equal(['el:mousemove']);

    widget.clearLog();
    helpers.triggerMouseEvent(widget.getEl('button').firstElementChild, 'mousemove');
    expect(widget.logOutput).to.deep.equal(['button>span:mousemove', 'el:mousemove']);

    widget.clearLog();
    helpers.triggerMouseEvent(document.getElementById('fooLink'), 'dblclick');
    expect(widget.logOutput).to.deep.equal(['#fooLink:dblclick']);

    widget.clearLog();
    helpers.triggerMouseEvent(document.getElementById('fooLink'), 'mouseout');
    expect(widget.logOutput).to.deep.equal(['#fooLink:mouseout']);

    widget.clearLog();
    expect(widget.getWidget('appButton').clicked).to.equal(false);
    helpers.triggerMouseEvent(widget.getEl('helloWorld'), 'mousedown');
    expect(widget.logOutput).to.deep.equal(['#helloWorld:mousedown']);
    expect(widget.getWidget('appButton').clicked).to.equal(true);
};