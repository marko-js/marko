var expect = require('chai').expect;
var markoComponents = require('marko/components');

module.exports = function (helpers, done) {
    var template = require('./index.marko');

    template.renderToString({}, function (err, html, out) {
        if (err) {
            return done(err);
        }

        var renderedComponents = markoComponents.getRenderedComponents(out);
        expect(renderedComponents).to.be.an('object');

        // console.log('HTML', html);

        expect(Object.keys(renderedComponents).length).to.equal(2);
        var componentDefs = renderedComponents.w;
        expect(componentDefs.length).to.equal(1);

        expect(componentDefs[0][0]).to.equal('s0');

        done();
    });
};