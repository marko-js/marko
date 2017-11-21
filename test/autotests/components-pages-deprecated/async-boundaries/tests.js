var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should initialize widgets correctly across async boundaries', function() {
        window.appInitAsync.test();
    });
});