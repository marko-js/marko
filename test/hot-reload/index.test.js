"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var expect = require("chai").expect;

var autotest = require("../autotest");
var marko = require("marko");

var hotReload = require("marko/hot-reload");
hotReload.enable();

autotest("fixtures", ({ test, resolve, snapshotSequence }) => {
    test(() => {
        require("marko/compiler").configure({
            assumeUpToDate: false
        });

        var main = require(resolve("test.js"));

        main.check(marko, hotReload, expect, snapshotSequence);
    });
});
