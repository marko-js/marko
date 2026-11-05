"use strict";

require("../__util__/test-init");

var autotest = require("mocha-autotest").default;
var markoCompiler = require("../../compiler");

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    var test = require(resolve("test.js"));
    test.check(markoCompiler, snapshot);
  });
});
