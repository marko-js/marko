var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow fixed IDs for components', function() {
        var component = window.appFixedId;
        expect(component.id).to.equal('appFixedId');
        component.testGetComponent();
        component.testGetEl();
    });
});