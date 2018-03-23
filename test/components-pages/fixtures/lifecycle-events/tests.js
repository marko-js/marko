var path = require("path");

describe(path.basename(__dirname), function() {
    it("should invoke lifecycle events correctly when a UI component is rendered on the server", function() {
        var component = window.components["lifecycle-events"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class", function() {
        var component = window.components["lifecycle-events-component-class"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class ctor", function() {
        var component =
            window.components["lifecycle-events-component-class-ctor"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports object", function() {
        var component = window.components["lifecycle-events-component-object"];
        component.test();
    });
});
