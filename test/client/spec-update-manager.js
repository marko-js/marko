var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('update-manager' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should support batch updates', function() {
        var widget = require('../fixtures/components/app-stateful-button')
            .render({
                size: 'large',
                label: 'Initial Label'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.el.className).to.contain('large');

        require('marko-widgets').batchUpdate(function() {
            widget.setSize('small');
        });

        expect(widget.el.className).to.contain('small');
    });

    it('should schedule updates not within batchUpdate() for the next tick', function(done) {
        var widget = require('../fixtures/components/app-stateful-button')
            .render({
                size: 'large',
                label: 'Initial Label'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.el.className).to.contain('large');
        widget.setSize('small');
        expect(widget.el.className).to.not.contain('small');

        require('marko-widgets').onAfterUpdate(function() {
            expect(widget.el.className).to.contain('small');
            done();
        });
    });
});



