module.exports = function (helpers, done) {
  // Rendering a component directly reaches the compat flush with no chunk of its
  // own; serializing the bridged handler must not depend on one already existing.
  require("./template.marko").default.renderToString({}, function (err, html) {
    if (err) return done(err);
    if (!/<button/.test(html)) {
      return done(new Error("expected the class child to render"));
    }
    done();
  });
};
