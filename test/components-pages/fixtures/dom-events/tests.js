var path = require('path');
var expect = require('chai').expect;

function triggerMouseEvent(el, type) {
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
        type,
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

function triggerClick(el) {
    triggerMouseEvent(el, 'click');
}

describe(path.basename(__dirname), function() {
    it('should invoke event handler method for non-bubbling events', function() {
        window.fooComponent.mouseMoveEvent = null;
        triggerMouseEvent(window.fooComponent.getEl('button'), 'mousemove');
        expect(window.fooComponent.mouseMoveEvent != null).to.equal(true);

        expect(window.fooComponent.mouseMoveEvent[0].type).to.equal('mousemove');
        expect(window.fooComponent.mouseMoveEvent[1]).to.equal(window.fooComponent.getEl('button'));
    });

    it('should invoke event handler method for non-bubbling events with extra args', function() {
        window.fooComponent.mouseMoveEvent = null;

        triggerMouseEvent(window.fooComponent.getEl('ok'), 'mousemove');

        expect(window.fooComponent.mouseMoveEvent != null).to.equal(true);
        expect(window.fooComponent.mouseMoveEvent[0].type).to.equal('ok');
        expect(window.fooComponent.mouseMoveEvent[1].type).to.equal('mousemove');
        expect(window.fooComponent.mouseMoveEvent[2]).to.equal(window.fooComponent.getEl('ok'));

        triggerMouseEvent(window.fooComponent.getEl('cancel'), 'mousemove');

        expect(window.fooComponent.mouseMoveEvent != null).to.equal(true);
        expect(window.fooComponent.mouseMoveEvent[0].type).to.equal('cancel');
        expect(window.fooComponent.mouseMoveEvent[1].type).to.equal('mousemove');
        expect(window.fooComponent.mouseMoveEvent[2]).to.equal(window.fooComponent.getEl('cancel'));
    });

    it('should invoke event handler method for bubbling events', function() {
        window.fooComponent.clickEvent = null;
        triggerMouseEvent(window.fooComponent.getEl('button'), 'click');
        expect(window.fooComponent.clickEvent != null).to.equal(true);
        expect(window.fooComponent.clickEvent[0].type).to.equal('click');
        expect(window.fooComponent.clickEvent[1]).to.equal(window.fooComponent.getEl('button'));
    });

    it('should invoke event handler method for bubbling events with extra args', function() {
        var component = window.fooComponent;

        window.fooComponent.clickEvent = null;

    	triggerClick(component.getEl('ok'));

        expect(component.clickEvent[0].type).to.equal('ok');
        expect(component.clickEvent[1].stopPropagation).to.be.a('function');
        expect(component.clickEvent[2].innerHTML).to.equal('OK');

        triggerClick(component.getEl('cancel'));

        expect(component.clickEvent[0].type).to.equal('cancel');
        expect(component.clickEvent[1].stopPropagation).to.be.a('function');
        expect(component.clickEvent[2].innerHTML).to.equal('Cancel');
    });
});