"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
var autotest = require("../autotest");
var markoCompiler = require("../../compiler");

markoCompiler.buildTaglibLookup(__dirname);

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var test = require(resolve("test.js"));
        test.check(markoCompiler, expect, snapshot);
    });
});
