var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    expect(widget.id).to.be.a('string');
    expect(widget.emit).to.be.a('function');
    expect(widget.on).to.be.a('function');
    expect(widget.once).to.be.a('function');
    expect(widget.subscribeTo).to.be.a('function');
    expect(widget.getElId).to.be.a('function');
    expect(widget.elId).to.be.a('function');
    expect(widget.getEl).to.be.a('function');
    expect(widget.destroy).to.be.a('function');
    expect(widget.isDestroyed).to.be.a('function');
    expect(widget.rerender).to.be.a('function');
    expect(widget.appendTo).to.be.a('function');
    expect(widget.replace).to.be.a('function');
    expect(widget.replaceChildrenOf).to.be.a('function');
    expect(widget.insertBefore).to.be.a('function');
    expect(widget.insertAfter).to.be.a('function');
    expect(widget.prependTo).to.be.a('function');
    expect(widget.ready).to.be.a('function');
    expect(widget.$).to.be.a('function');
};