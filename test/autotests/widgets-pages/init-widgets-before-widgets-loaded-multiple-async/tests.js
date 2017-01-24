var path = require('path');
var expect = require('chai').expect;
var markoWidgets = require('marko/widgets');

describe(path.basename(__dirname), function() {
    it('should initialize all widgets', function() {
        expect(window.fooWidgets.length).to.equal(2);
    });
});