"use strict";

require("../__util__/test-init");

require("../../compiler");
var autotest = require("mocha-autotest").default;
var marko = require("../../");
var markoCompiler = require("../../compiler");

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test((done) => {
    require(resolve("test.js")).check(marko, markoCompiler, snapshot, done);
  });
});
