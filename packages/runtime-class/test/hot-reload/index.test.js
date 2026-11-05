"use strict";

require("../__util__/test-init");

var marko = require("marko");
var hotReload = require("marko/src/node-require/hot-reload");
var autotest = require("mocha-autotest").default;

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    require("marko/compiler").configure({
      assumeUpToDate: false,
    });

    var main = require(resolve("test.js"));

    const { log } = console;
    try {
      console.log = () => {};
      main.check(marko, hotReload, snapshot);
    } finally {
      console.log = log;
    }
  });
});
