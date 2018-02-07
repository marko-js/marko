var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    function getTimestamps() {

        return {
            preserveId: widget.getEl('preserve').getAttribute('data-renderId'),
            preserveIdBody: widget.getEl('preserve').innerHTML,
            preserveBodyId: widget.getEl('preserveBody').getAttribute('data-renderId'),
            preserveBodyIdBody: widget.getEl('preserveBody').innerHTML,
            widgetId: widget.getWidget('widget').state.name,
            preserveClass: widget.el.querySelector('.preserve').getAttribute('data-renderId'),
            preserveClassBody: widget.el.querySelector('.preserve').innerHTML,
            preserveBodyClass: widget.el.querySelector('.preserve-body').getAttribute('data-renderId'),
            preserveBodyClassBody: widget.el.querySelector('.preserve-body').innerHTML,
            widgetClass: require('marko/legacy-components').getWidgetForEl(widget.el.querySelector('.widget-no-id')).state.name
        };
    }

    var renderId = 10;

    widget.rerender({
        preserveCondition: true,
        renderId: renderId
    });

    var timestamps = getTimestamps();
    expect(timestamps.preserveId).to.equal('0');
    expect(timestamps.preserveIdBody).to.equal('0');
    expect(timestamps.preserveBodyId).to.equal('10');
    expect(timestamps.preserveBodyIdBody).to.equal('0');
    expect(timestamps.widgetId).to.equal('0');
    expect(timestamps.preserveClass).to.equal('0');
    expect(timestamps.preserveClassBody).to.equal('0');
    expect(timestamps.preserveBodyClass).to.equal('10');
    expect(timestamps.preserveBodyClassBody).to.equal('0');
    expect(timestamps.widgetClass).to.equal('0');

    // expect(newEls1.el != null).to.equal(true);
    // expect(newEls1.el).to.equal(origEls.el);
    // expect(newEls1.preserveEl1).to.equal(origEls.preserveEl1);
    // expect(newEls1.preserveEl2).to.equal(origEls.preserveEl2);
    // expect(newEls1.preserveEl1).to.equal(origEls.preserveEl1);
    // expect(newEls1.preserveEl2).to.equal(origEls.preserveEl2);
    //
    //
    // expect(newEls1.preserveBodyEl1).to.equal(origEls.preserveBodyEl1);
    // expect(newEls1.preserveBodyEl2).to.equal(origEls.preserveBodyEl2);
    //
    // checkChildrenMatch(newEls1.preserveBodyEl1Children, origEls.preserveBodyEl1Children);
    // checkChildrenMatch(newEls1.preserveBodyEl2Children, origEls.preserveBodyEl2Children);
    //
    // expect(newEls1.helloEl1).to.equal(origEls.helloEl1);
    // expect(newEls1.helloEl2).to.equal(origEls.helloEl2);

    renderId = 100;

    // Do not preserve
    widget.rerender({
        preserveCondition: false,
        renderId: renderId
    });

    timestamps = getTimestamps();
    expect(timestamps.preserveId).to.equal('100');
    expect(timestamps.preserveIdBody).to.equal('100');
    expect(timestamps.preserveBodyId).to.equal('100');
    expect(timestamps.preserveBodyIdBody).to.equal('100');
    expect(timestamps.widgetId).to.equal('100');
    expect(timestamps.preserveClass).to.equal('100');
    expect(timestamps.preserveClassBody).to.equal('100');
    expect(timestamps.preserveBodyClass).to.equal('100');
    expect(timestamps.preserveBodyClassBody).to.equal('100');
    expect(timestamps.widgetClass).to.equal('100');
};