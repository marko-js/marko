"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
require("../../compiler");
var autotest = require("mocha-autotest").default;
var marko = require("../../");
var markoCompiler = require("../../compiler");

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test((done) => {
    require(resolve("test.js")).check(
      marko,
      markoCompiler,
      expect,
      snapshot,
      done
    );
  });
});
