var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow getEl() with a split component', function() {
        var hello = window.hello;
        expect(hello.getEl('button') != null).to.equal(true);
        expect(hello.getEl('button').nodeName).to.equal('BUTTON');
    });
});
