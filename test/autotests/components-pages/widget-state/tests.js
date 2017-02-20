var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should serialize widget state down to the browser', function() {
        expect(window.fooWidget.state.name).to.equal('app-foo');
    });

    it('should serialize widget config down to the browser', function() {
        window.appStateWatch.test();
    });
});