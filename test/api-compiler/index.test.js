"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var expect = require("chai").expect;
require("../../compiler");
var autotest = require("../autotest");
var marko = require("../../");
var markoCompiler = require("../../compiler");

autotest("fixtures", ({ test, resolve, snapshot }) => {
    test(done => {
        require(resolve("test.js")).check(
            marko,
            markoCompiler,
            expect,
            { compare: snapshot },
            done
        );
    });
});
