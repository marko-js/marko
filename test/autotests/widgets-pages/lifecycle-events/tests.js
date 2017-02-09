var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should invoke lifecycle events correctly when a UI component is rendered on the server', function() {
        var widget = window.widgets['lifecycle-events'];

        expect(widget.state.events).to.deep.equal(['onCreate', 'onInput[Frank]', 'onRender']);


        expect(widget.onCreateInputName).to.equal('Frank');
        expect(widget.onCreateOutName).to.equal('FrankGlobal');
    });

});