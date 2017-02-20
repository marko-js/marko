var path = require('path');
var expect = require('chai').expect;
var markoComponents = require('marko/components');

describe(path.basename(__dirname), function() {
    it('should serialize component config down to the browser', function() {
        expect(window.fooComponent.state.name).to.equal('app-foo');
    });
});