var expect = require('chai').expect;
var markoWidgets = require('marko/widgets');

module.exports = function(helpers, done) {
    var template = require('./template.marko');

    template.render({}, function(err, html, out) {
		var renderedWidgets = markoWidgets.getRenderedWidgetIds(out);
        expect(renderedWidgets).to.be.an('array');
        expect(renderedWidgets.length).to.equal(3);
        expect(renderedWidgets[0].id).to.equal('w0-w0');
        expect(renderedWidgets[1].id).to.equal('w0-w1');
        expect(renderedWidgets[2].id).to.equal('w0');
        done();
	});
};