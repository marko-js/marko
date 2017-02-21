var path = require('path');
var expect = require('chai').expect;
var markoComponents = require('marko/components');

describe(path.basename(__dirname), function() {
    it('should serialize component config down to the browser', function() {

        expect(window.simpleComponents).to.equal(undefined);

        var components = window.components;
        var html = components.html;
        var componentIds = components.componentIds;

        document.getElementById('testsTarget').innerHTML = html; // Add the HTML to the DOM

        // Initialize the components to bind behavior!
        markoComponents.init(componentIds);

        expect(window.simpleComponents.length).to.equal(2);
        expect(window.simpleComponents[0].state.type).to.equal('component state');
        expect(window.simpleComponents[0].state.name).to.equal('Frank');
        expect(window.simpleComponents[0].state.messageCount).to.equal(20);
        expect(window.simpleComponents[0].componentConfig.type).to.equal('component config');
        expect(window.simpleComponents[0].componentConfig.name).to.equal('Frank');
        expect(window.simpleComponents[0].componentConfig.messageCount).to.equal(20);

        expect(window.simpleComponents[1].state.type).to.equal('component state');
        expect(window.simpleComponents[1].state.name).to.equal('John');
        expect(window.simpleComponents[1].state.messageCount).to.equal(10);
        expect(window.simpleComponents[1].componentConfig.type).to.equal('component config');
        expect(window.simpleComponents[1].componentConfig.name).to.equal('John');
        expect(window.simpleComponents[1].componentConfig.messageCount).to.equal(10);
    });
});