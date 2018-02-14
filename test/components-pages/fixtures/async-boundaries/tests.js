var path = require('path');
var expect = require('chai').expect;
var markoComponents = require('marko/components');

describe(path.basename(__dirname), function() {
    it('should initialize components correctly across async boundaries', function() {
        window.appInitAsync.test();
    });
});
