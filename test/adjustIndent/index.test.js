"use strict";

require("../__util__/test-init");

var adjustIndent = require("marko/compiler/util/adjustIndent");
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures", ({ test, path, require, compare }) => {
    test(() => {
        var testSettings = require("test.js");
        var input = fs.readFileSync(path("input.txt"), { encoding: "utf8" });
        var newIndentation = testSettings.newIndentation;
        var output = adjustIndent(input, newIndentation);
        compare(output, ".txt");
    });
});
