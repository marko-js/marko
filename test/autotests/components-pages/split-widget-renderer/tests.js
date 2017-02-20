var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow component to be split from renderer', function() {
        var component = window.appButtonSplit;
        expect(component.el.innerHTML).to.equal('Test Button');
        component.setLabel('New Label');
        expect(component.el.innerHTML).to.equal('New Label');
    });

    it('should allow UI component to only have a component and an index.marko', function() {
        expect(window.componentOnly).to.be.an('object');
    });
});