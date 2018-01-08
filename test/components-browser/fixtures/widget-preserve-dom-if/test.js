var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    function getTimestamps() {

        return {
            preserveId: component.getEl('preserve').getAttribute('data-renderId'),
            preserveIdBody: component.getEl('preserve').innerHTML,
            preserveBodyId: component.getEl('preserveBody').getAttribute('data-renderId'),
            preserveBodyIdBody: component.getEl('preserveBody').innerHTML,
            componentId: component.getComponent('component').state.name,
            preserveClass: component.el.querySelector('.preserve').getAttribute('data-renderId'),
            preserveClassBody: component.el.querySelector('.preserve').innerHTML,
            preserveBodyClass: component.el.querySelector('.preserve-body').getAttribute('data-renderId'),
            preserveBodyClassBody: component.el.querySelector('.preserve-body').innerHTML,
            componentClass: require('marko/components').getComponentForEl(component.el.querySelector('.component-no-id')).state.name
        };
    }

    var renderId = 10;

    component.input = {
        preserveCondition: true,
        renderId: renderId
    };
    component.update();

    var timestamps = getTimestamps();
    expect(timestamps.preserveId).to.equal('0');
    expect(timestamps.preserveIdBody).to.equal('0');
    expect(timestamps.preserveBodyId).to.equal('10');
    expect(timestamps.preserveBodyIdBody).to.equal('0');
    expect(timestamps.componentId).to.equal('0');
    expect(timestamps.preserveClass).to.equal('0');
    expect(timestamps.preserveClassBody).to.equal('0');
    expect(timestamps.preserveBodyClass).to.equal('10');
    expect(timestamps.preserveBodyClassBody).to.equal('0');
    expect(timestamps.componentClass).to.equal('0');

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
    component.input = {
        preserveCondition: false,
        renderId: renderId
    };
    component.update();

    timestamps = getTimestamps();
    expect(timestamps.preserveId).to.equal('100');
    expect(timestamps.preserveIdBody).to.equal('100');
    expect(timestamps.preserveBodyId).to.equal('100');
    expect(timestamps.preserveBodyIdBody).to.equal('100');
    expect(timestamps.componentId).to.equal('100');
    expect(timestamps.preserveClass).to.equal('100');
    expect(timestamps.preserveClassBody).to.equal('100');
    expect(timestamps.preserveBodyClass).to.equal('100');
    expect(timestamps.preserveBodyClassBody).to.equal('100');
    expect(timestamps.componentClass).to.equal('100');
};