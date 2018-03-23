"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var parseFor = require("marko/taglibs/core/util/parseFor.js");
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        let inputPath = resolve("input.txt");
        let input = fs.readFileSync(inputPath, { encoding: "utf8" });

        try {
            let parsed = parseFor(input);
            snapshot(parsed, ".json");
        } catch (e) {
            if (e.code === "INVALID_FOR") {
                snapshot(
                    {
                        error: e.message
                    },
                    ".json"
                );
            } else {
                throw e;
            }
        }
    });
});
