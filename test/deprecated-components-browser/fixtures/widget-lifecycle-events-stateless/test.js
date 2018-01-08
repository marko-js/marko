var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 10
    });

    var targetEl = helpers.targetEl;

    expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');

    expect(widget.lifecycleEvents).to.deep.equal(['init', 'onRender:firstRender']);

    widget.setProps({
        name: 'Jane',
        messageCount: 30
    });
    expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');

    expect(widget.lifecycleEvents).to.deep.equal(['init', 'onRender:firstRender']);

    widget.update();

    expect(targetEl.innerHTML).to.contain('Hello Jane! You have 30 new messages.');

    expect(widget.lifecycleEvents).to.deep.equal(['init', 'onRender:firstRender', 'onBeforeUpdate', 'onUpdate', 'onRender']);

    widget.destroy();

    expect(widget.lifecycleEvents).to.deep.equal(['init', 'onRender:firstRender', 'onBeforeUpdate', 'onUpdate', 'onRender', 'onBeforeDestroy', 'onDestroy']);
};