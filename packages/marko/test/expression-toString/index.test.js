"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var compiler = require("../../compiler");
var builder = compiler.createBuilder();
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var input = fs.readFileSync(resolve("input.js"), {
            encoding: "utf8"
        });
        var parsed = builder.parseExpression(input);
        snapshot(parsed.toString(), ".js");
    });
});
