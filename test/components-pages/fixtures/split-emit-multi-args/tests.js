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
    it('should allow getEl() with a split component', function() {
        var app = window.splitComponent;
        triggerClick(app.el);
        expect(app.clicked).to.equal(true);
    });
});
