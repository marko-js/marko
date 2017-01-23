var expect = require('chai').expect;
var markoWidgets = require('marko/widgets');

module.exports = function(helpers, done) {
    var template = require('./template.marko');

    template.renderToString({}, function(err, html, out) {
		var renderedWidgets = markoWidgets.getRenderedWidgets(out);
        expect(renderedWidgets).to.be.an('array');

        expect(renderedWidgets.length).to.equal(2);

        var widgetDefs = renderedWidgets[0];
        expect(widgetDefs.length).to.equal(3);

        expect(widgetDefs[0][0]).to.equal('w0-w0');
        expect(widgetDefs[1][0]).to.equal('w0-w1');
        expect(widgetDefs[2][0]).to.equal('w0');
        done();
	});
};