"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
var autotest = require("../autotest");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(done => {
        var main = require(resolve("test.js"));
        main.check(expect, snapshot, done);
    });
});
