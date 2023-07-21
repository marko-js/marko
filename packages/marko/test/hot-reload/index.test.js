"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;

var autotest = require("mocha-autotest").default;
var marko = require("marko");

var hotReload = require("marko/src/node-require/hot-reload");

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    require("marko/compiler").configure({
      assumeUpToDate: false,
    });

    var main = require(resolve("test.js"));

    main.check(marko, hotReload, expect, snapshot);
  });
});
