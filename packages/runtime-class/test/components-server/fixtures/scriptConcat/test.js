var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var template = require("./template.marko").default;

  template.render({}, function (err, html) {
    assert.match(html.toString(), /console\.log\('hello'\);console\.log\('world'\);console\.log\('again'\);console\.log\('and again'\)/);
    done();
  });
};
