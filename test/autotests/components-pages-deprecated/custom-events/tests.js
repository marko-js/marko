var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should invoke event handler method for custom events with extra args', function() {
        var widget = window.fooWidget;

        widget.pressEvent = null;

        widget.getWidget('ok').emitPressEvent();

        expect(widget.pressEvent[0].type).to.equal('ok');
        expect(widget.pressEvent[1].widget).to.equal(widget.getWidget('ok'));

        widget.getWidget('cancel').emitPressEvent();

        expect(widget.pressEvent[0].type).to.equal('cancel');
        expect(widget.pressEvent[1].widget).to.equal(widget.getWidget('cancel'));
    });
});