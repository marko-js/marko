var assert = require("assert/strict");
var markoComponents = require("marko/components");

module.exports = function (helpers, done) {
  var template = require("./index.marko").default;

  template.renderToString({}, function (err, html, out) {
    if (err) {
      return done(err);
    }

    var renderedComponents = markoComponents.getRenderedComponents(out);
    assert.ok(typeof renderedComponents === "object" && renderedComponents !== null);

    // console.log('HTML', html);

    assert.equal(Object.keys(renderedComponents).length, 3);
    var componentDefs = renderedComponents.w;
    assert.equal(componentDefs.length, 1);

    assert.equal(componentDefs[0][0], "s0");

    done();
  });
};
