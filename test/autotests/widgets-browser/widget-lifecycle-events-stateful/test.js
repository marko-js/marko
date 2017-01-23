var expect = require('chai').expect;

module.exports = function(helpers) {
    var widgetLifecycleEvents = {};

    window.recordWidgetLifecycleEvent = function(key, eventType) {
        var events = widgetLifecycleEvents[key] || (widgetLifecycleEvents[key] = []);
        events.push(eventType);
    };

    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 10
    });

    var targetEl = helpers.targetEl;

    expect(targetEl.innerHTML).to.contain('Hello Frank!');
    expect(targetEl.innerHTML).to.contain('10');

    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount']);

    expect(widgetLifecycleEvents[widget.getWidget('nestedStateful').id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount']);

    expect(widgetLifecycleEvents.foo).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount']);

    // NOTE: messageCount has an update handler
    widget.setState('messageCount', 999);
    expect(targetEl.innerHTML).to.contain('Hello Frank!');
    expect(targetEl.innerHTML).to.contain('10');
    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount']);
    widget.update();

    expect(targetEl.innerHTML).to.contain('Hello Frank!');
    expect(targetEl.innerHTML).to.contain('999');

    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate']);

    expect(widgetLifecycleEvents[widget.getWidget('nestedStateful').id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onRender']);

    expect(widgetLifecycleEvents.foo).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount']);

    // NOTE: name does *not* have an update handler
    widget.setState('name', 'Jane');
    expect(targetEl.innerHTML).to.contain('Hello Frank!');
    expect(targetEl.innerHTML).to.contain('999');
    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate']);
    widget.update();

    expect(targetEl.innerHTML).to.contain('Hello Jane!');
    expect(targetEl.innerHTML).to.contain('999');

    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onBeforeUpdate',
        'onUpdate',
        'onRender']);

    expect(widgetLifecycleEvents[widget.getWidget('nestedStateful').id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onRender']);

    expect(widgetLifecycleEvents.foo).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onRender']);

    var nestedStateful = widget.getWidget('nestedStateful');

    widget.destroy();

    expect(widgetLifecycleEvents[widget.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onBeforeUpdate',
        'onUpdate',
        'onRender',
        'onBeforeDestroy',
        'onDestroy']);

    expect(widgetLifecycleEvents[nestedStateful.id]).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onRender',
        'onBeforeDestroy',
        'onDestroy']);

    expect(widgetLifecycleEvents.foo).to.deep.equal([
        'init',
        'onRender:firstRender',
        'mount',
        'onBeforeUpdate',
        'onUpdate',
        'onRender',
        'onBeforeDestroy',
        'onDestroy']);

    window.recordWidgetLifecycleEvent = {};
};