"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var path = require("path");
var autotest = require("../autotest");
var runRenderTest = require("../__util__/runRenderTest");

describe("async render (vdom)", function() {
    var autoTestDir = path.join(__dirname, "./fixtures");

    this.timeout(4000);
    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        runRenderTest(dir, helpers, done, {
            output: "vdom",
            checkAsyncEvents: true
        });
    });
});
