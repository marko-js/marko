var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should initialize all components', function() {
        expect(window.fooComponents.length).to.equal(2);
    });
});