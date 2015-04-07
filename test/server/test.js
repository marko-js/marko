var chai = require('chai');
var expect = chai.expect;

describe('marko-widgets/server' , function() {
    beforeEach(function() {
    });

    it('should support getRenderedWidgetIds()', function(done) {
        var markoWidgets = require('../../');

        var template = require('marko').load(require.resolve('../fixtures/components/app-getRenderedWidgetIds/template.marko'));

        template.render({}, function(err, html, out) {
    		var widgetIds = markoWidgets.getRenderedWidgetIds(out);
            expect(widgetIds).to.be.a('string');
            expect(widgetIds).to.equal('w1,w2,w0');
            done();
    	});
    });
});



