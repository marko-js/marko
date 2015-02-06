require('marko-widgets');
var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('dom-events' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should allow this.$() to be used to attach DOM event listeners', function() {

        var widget = require('./fixtures/components/app-dom-events-jquery')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.name).to.equal('app-dom-events-jquery');
    });

    it('should allow domListeners to be used to attach DOM event listeners', function() {

        var widget = require('./fixtures/components/app-dom-events')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.name).to.equal('app-dom-events');
    });
});