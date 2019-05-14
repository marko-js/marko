var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should initialize components before ready", function() {
        expect(window.afterInitComponentsFooComponent != null).to.equal(true);
        expect(window.afterInitComponentsBarComponent != null).to.equal(true);

        expect(window.fooComponent != null).to.equal(true);
        expect(window.barComponent != null).to.equal(true);

        expect(window.fooComponent.id).to.be.a("string");
        expect(window.barComponent.id).to.be.a("string");
        expect(window.fooComponent.id).to.not.equal(window.barComponent.id);
    });

    it("should assign unique IDs to each component", function() {
        expect(window.fooComponent.id).to.be.a("string");
        expect(window.barComponent.id).to.be.a("string");
        expect(window.bazComponent.id).to.be.a("string");
        expect(window.fooComponent.id).to.not.equal(window.barComponent.id);
        expect(window.fooComponent.id).to.not.equal(window.bazComponent.id);
        expect(window.bazComponent.id).to.contain(window.fooComponent.id);
    });

    it("should assign a unique ID to a nested component based on the parent ID", function() {
        expect(window.bazComponent.id).to.contain(window.fooComponent.id + "-");
    });

    it("should serialize state correctly", function() {
        expect(window.fooComponent.state.type).to.equal("state");
        expect(window.fooComponent.state.name).to.equal("foo");
    });

    it("should serialize component config correctly", function() {
        expect(window.fooComponent.componentConfig.type).to.equal("config");
        expect(window.fooComponent.componentConfig.name).to.equal("foo");
    });
});
