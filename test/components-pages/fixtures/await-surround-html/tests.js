var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should mount components', function() {
        expect(window.helloComponent != null).to.equal(true);
    });
});
