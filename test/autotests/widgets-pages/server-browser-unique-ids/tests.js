var path = require('path');
var expect = require('chai').expect;
var appFooComponent = require('./components/app-foo');

describe(path.basename(__dirname), function() {
    it('should generate a unique ID that is different for a UI component rendered on the server and browser', function() {

        var serverFooWidget = window.fooWidget;
        var browserFooWidget = appFooComponent.render({}).appendTo(document.body).getWidget();
        expect(browserFooWidget.id).to.be.a('string');
        expect(serverFooWidget.id).to.be.a('string');
        expect(serverFooWidget.id).to.not.equal(browserFooWidget.id);
    });

});