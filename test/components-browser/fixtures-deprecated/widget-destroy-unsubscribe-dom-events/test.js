var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    // expect(Array.isArray(widget.___domEventListenerHandles)).to.equal(true);

    var el = widget.el;
    var fooLink = widget.getEl('fooLink');

    widget.destroy();

    // expect(widget.___domEventListenerHandles).to.equal(null);

    // Make sure the widget is removed from the DOM tree

    expect(el.parentNode == null).to.equal(true);

    // Make sure there are no DOM event listeners
    widget.clearLog();
    helpers.triggerMouseEvent(fooLink, 'mouseout');
    expect(widget.logOutput).to.deep.equal([]);
};