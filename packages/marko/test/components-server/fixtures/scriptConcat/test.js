var expect = require("chai").expect;

module.exports = function (helpers, done) {
  var template = require("./template.marko").default;

  template.render({}, function (err, html) {
    expect(html.toString()).to.include(
      "console.log('hello');console.log('world');console.log('again');console.log('and again')"
    );
    done();
  });
};
