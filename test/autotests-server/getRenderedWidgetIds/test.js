var expect = require('chai').expect;
var markoWidgets = require('marko-widgets');

module.exports = function(helpers, done) {
    var template = require('./template.marko');

    template.render({}, function(err, html, out) {
		var widgetIds = markoWidgets.getRenderedWidgetIds(out);
        expect(widgetIds).to.be.a('string');
        expect(widgetIds).to.equal('w0-w0,w0-w1,w0');
        done();
	});
};