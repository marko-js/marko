"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

require("../../compiler");
var autotest = require("../autotest");
var markocPath = require.resolve("../../bin/markoc");
var childProcess = require("child_process");
var fs = require("fs");

autotest("fixtures", ({ test, dir, resolve }) => {
    test(
        done => {
            const testModule = require(resolve("test.js"));
            const helpers = {};

            helpers.existsSync = function(filename) {
                return fs.existsSync(resolve(filename));
            };

            helpers.readSync = function(filename) {
                return fs.readFileSync(resolve(filename));
            };

            helpers.spawnSync = function(args, options) {
                options = options || {};
                if (!options.cwd) {
                    options.cwd = dir;
                }
                return childProcess.spawnSync(markocPath, args, options);
            };

            helpers.spawnSync([".", "--clean"]);

            testModule.test(helpers);
            done();
        },
        { timeout: 20000 }
    );
});
