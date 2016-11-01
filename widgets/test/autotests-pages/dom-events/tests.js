var path = require('path');
var expect = require('chai').expect;
var markoWidgets = require('marko-widgets');

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
describe(path.basename(__dirname), function() {
    it('should invoke event handler method for non-bubbling events', function() {
        expect(window.fooWidget.mouseMoveEvent).to.equal(null);
        triggerMouseEvent(window.fooWidget.getEl('button'), 'mousemove');
        expect(window.fooWidget.mouseMoveEvent != null).to.equal(true);
        expect(window.fooWidget.mouseMoveEvent.el).to.equal(window.fooWidget.getEl('button'));
        expect(window.fooWidget.mouseMoveEvent.event.type).to.equal('mousemove');
    });

    it('should invoke event handler method for bubbling events', function() {
        expect(window.fooWidget.clickEvent).to.equal(null);
        triggerMouseEvent(window.fooWidget.getEl('button'), 'click');
        expect(window.fooWidget.clickEvent != null).to.equal(true);
        expect(window.fooWidget.clickEvent.el).to.equal(window.fooWidget.getEl('button'));
        expect(window.fooWidget.clickEvent.event.type).to.equal('click');
    });
});