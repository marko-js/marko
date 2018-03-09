var path = require("path");
var expect = require("chai").expect;
var appFooComponent = require("./components/app-foo");

describe(path.basename(__dirname), function() {
    it("should generate a unique ID that is different for a UI component rendered on the server and browser", function() {
        var serverFooComponent = window.fooComponent;
        var browserFooComponent = appFooComponent
            .renderSync({})
            .appendTo(document.body)
            .getComponent();
        expect(browserFooComponent.id).to.be.a("string");
        expect(serverFooComponent.id).to.be.a("string");
        expect(serverFooComponent.id).to.not.equal(browserFooComponent.id);
    });
});
