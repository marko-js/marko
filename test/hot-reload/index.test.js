"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;
var nodePath = require("path");

var autotest = require("../autotest");
var marko = require("marko");

var hotReload = require("marko/hot-reload");
hotReload.enable();
describe("hot-reload", function() {
    var autoTestDir = nodePath.join(__dirname, "./fixtures");

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        require("marko/compiler").configure({
            assumeUpToDate: false
        });

        var test = require(nodePath.join(dir, "test.js"));

        test.check(marko, hotReload, expect, helpers);
        done();
    });
});
