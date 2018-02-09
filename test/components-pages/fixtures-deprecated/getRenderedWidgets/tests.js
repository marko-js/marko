var path = require('path');
var expect = require('chai').expect;
var markoWidgets = require('marko-widgets');

describe(path.basename(__dirname), function() {
    it('should serialize widget config down to the browser', function() {

        expect(window.simpleWidgets).to.eql([]);

        var components = window.components;
        var html = components.html;
        var widgetIds = components.widgetIds;

        document.getElementById('testsTarget').innerHTML = html; // Add the HTML to the DOM

        // Initialize the widgets to bind behavior!
        markoWidgets.initWidgets(widgetIds);

        expect(window.simpleWidgets.length).to.equal(2);

        expect(window.simpleWidgets[1].state.type).to.equal('widget state');
        expect(window.simpleWidgets[1].state.name).to.equal('Frank');
        expect(window.simpleWidgets[1].state.messageCount).to.equal(20);
        expect(window.simpleWidgets[1].widgetConfig.type).to.equal('widget config');
        expect(window.simpleWidgets[1].widgetConfig.name).to.equal('Frank');
        expect(window.simpleWidgets[1].widgetConfig.messageCount).to.equal(20);

        expect(window.simpleWidgets[0].state.type).to.equal('widget state');
        expect(window.simpleWidgets[0].state.name).to.equal('John');
        expect(window.simpleWidgets[0].state.messageCount).to.equal(10);
        expect(window.simpleWidgets[0].widgetConfig.type).to.equal('widget config');
        expect(window.simpleWidgets[0].widgetConfig.name).to.equal('John');
        expect(window.simpleWidgets[0].widgetConfig.messageCount).to.equal(10);
    });
});
