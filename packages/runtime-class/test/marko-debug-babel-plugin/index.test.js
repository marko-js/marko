"use strict";

require("../__util__/test-init");

var autotest = require("mocha-autotest").default;

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test((done) => {
    var main = require(resolve("test.js"));
    main.check(snapshot, done);
  });
});
