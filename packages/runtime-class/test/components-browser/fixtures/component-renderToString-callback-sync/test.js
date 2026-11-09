var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "john",
  });

  component.on("html", function (renderedHtml) {
    assert.equal(renderedHtml, "<div>[async] john</div>");
    done();
  });

  component.on("error", function (error) {
    done(error);
  });
};
