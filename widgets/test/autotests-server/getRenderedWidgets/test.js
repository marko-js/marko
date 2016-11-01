var expect = require('chai').expect;
var markoWidgets = require('marko-widgets');

module.exports = function(helpers, done) {
    var template = require('./template.marko');

    template.render({}, function(err, html, out) {
		var renderedWidgets = markoWidgets.getRenderedWidgets(out);
        expect(renderedWidgets).to.be.an('object');
        expect(renderedWidgets.ids).to.equal('w0-w0,w0-w1,w0');
        done();
	});
};