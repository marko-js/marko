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
        window.fooWidget.mouseMoveEvent = null;
        triggerMouseEvent(window.fooWidget.getEl('button'), 'mousemove');
        expect(window.fooWidget.mouseMoveEvent != null).to.equal(true);

        expect(window.fooWidget.mouseMoveEvent[0].type).to.equal('mousemove');
        expect(window.fooWidget.mouseMoveEvent[1]).to.equal(window.fooWidget.getEl('button'));
    });

    it('should invoke event handler method for non-bubbling events with extra args', function() {
        window.fooWidget.mouseMoveEvent = null;

        triggerMouseEvent(window.fooWidget.getEl('ok'), 'mousemove');

        expect(window.fooWidget.mouseMoveEvent != null).to.equal(true);
        expect(window.fooWidget.mouseMoveEvent[0].type).to.equal('ok');
        expect(window.fooWidget.mouseMoveEvent[1].type).to.equal('mousemove');
        expect(window.fooWidget.mouseMoveEvent[2]).to.equal(window.fooWidget.getEl('ok'));

        triggerMouseEvent(window.fooWidget.getEl('cancel'), 'mousemove');

        expect(window.fooWidget.mouseMoveEvent != null).to.equal(true);
        expect(window.fooWidget.mouseMoveEvent[0].type).to.equal('cancel');
        expect(window.fooWidget.mouseMoveEvent[1].type).to.equal('mousemove');
        expect(window.fooWidget.mouseMoveEvent[2]).to.equal(window.fooWidget.getEl('cancel'));
    });

    it('should invoke event handler method for bubbling events', function() {
        window.fooWidget.clickEvent = null;
        triggerMouseEvent(window.fooWidget.getEl('button'), 'click');
        expect(window.fooWidget.clickEvent != null).to.equal(true);
        expect(window.fooWidget.clickEvent[0].type).to.equal('click');
        expect(window.fooWidget.clickEvent[1]).to.equal(window.fooWidget.getEl('button'));
    });

    it('should invoke event handler method for bubbling events with extra args', function() {
        var widget = window.fooWidget;

        window.fooWidget.clickEvent = null;

    	triggerClick(widget.getEl('ok'));

        expect(widget.clickEvent[0].type).to.equal('ok');
        expect(widget.clickEvent[1].stopPropagation).to.be.a('function');
        expect(widget.clickEvent[2].innerHTML).to.equal('OK');

        triggerClick(widget.getEl('cancel'));

        expect(widget.clickEvent[0].type).to.equal('cancel');
        expect(widget.clickEvent[1].stopPropagation).to.be.a('function');
        expect(widget.clickEvent[2].innerHTML).to.equal('Cancel');
    });
});