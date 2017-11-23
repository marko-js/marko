var path = require('path');
var expect = require('chai').expect;
var markoComponents = require('marko/components');

describe(path.basename(__dirname), function() {
    it('should initialize all components', function() {
        expect(window.fooComponents.length).to.equal(2);
    });
});