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
    it('should mount all components', function() {
        var app = window.app;
        expect(app != null).to.equal(true);
        expect(window.hello != null).to.equal(true);
    });

    it('should have correct input', function() {
        expect(window.app.input.name).to.equal('App');
        expect(window.hello.input.name).to.equal('Marko');
    });

    it('should attach DOM events', function() {
        var app = window.app;
        triggerClick(app.el);
        expect(app.clicked).to.equal(true);

        var helloComponent = window.hello;
        triggerClick(helloComponent.el);
        expect(helloComponent.clicked).to.equal(true);
    });
});
