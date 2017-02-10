var path = require('path');

describe(path.basename(__dirname), function() {
    it('should invoke lifecycle events correctly when a UI component is rendered on the server', function() {
        var widget = window.widgets['lifecycle-events'];
        widget.test();
    });

    it('should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class', function() {
        var widget = window.widgets['lifecycle-events-component-class'];
        widget.test();
    });

    it('should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class ctor', function() {
        var widget = window.widgets['lifecycle-events-component-class-ctor'];
        widget.test();
    });

    it('should invoke lifecycle events correctly when a UI component is rendered on the server - component exports object', function() {
        var widget = window.widgets['lifecycle-events-component-object'];
        widget.test();
    });
});