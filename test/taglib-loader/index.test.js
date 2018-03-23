"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
require("../../compiler");
var autotest = require("../autotest");
var taglibLoader = require("../../compiler").taglibLoader;

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    test(() => {
        var test = require(resolve("test.js"));
        test.check(taglibLoader, expect);
    });
});
