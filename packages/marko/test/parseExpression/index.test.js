"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var autotest = require("../autotest");
var fs = require("fs");
var compiler = require("../../compiler");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var inputPath = resolve("input.txt");
        var input = fs.readFileSync(inputPath, { encoding: "utf8" });
        var parsed = compiler.builder.parseExpression(input);
        snapshot(parsed, ".json");
    });
});
