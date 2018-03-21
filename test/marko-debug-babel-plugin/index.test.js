"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
var autotest = require("../autotest");

autotest("fixtures", ({ test, resolve, snapshot }) => {
    test(done => {
        var main = require(resolve("test.js"));
        main.check(expect, { compare: snapshot }, done);
    });
});
