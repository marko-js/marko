"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

require("../../compiler");

// TODO: currently this causes babel to recompile the compiler multiple times.
// We should fix this since it makes the tests very slow.

// var autotest = require("mocha-autotest").default;
// var markocPath = require.resolve("../../bin/markoc");
// var childProcess = require("child_process");
// var fs = require("fs");

// autotest("fixtures", fixture => {
//     let test = fixture.test;
//     let dir = fixture.dir;
//     let resolve = fixture.resolve;
//     test(function(done) {
//         this.timeout(20000);
//         const testModule = require(resolve("test.js"));
//         const helpers = {};
//         helpers.existsSync = function(filename) {
//             return fs.existsSync(resolve(filename));
//         };
//         helpers.readSync = function(filename) {
//             return fs.readFileSync(resolve(filename));
//         };
//         helpers.spawnSync = function(args, options) {
//             options = options || {};
//             if (!options.cwd) {
//                 options.cwd = dir;
//             }
//             options.env = Object.create(process.env || options.env);
//             options.env.NODE_OPTIONS = `-r ${JSON.stringify(
//                 require.resolve("./babel-register")
//             )}`;
//             return childProcess.spawnSync(markocPath, args, options);
//         };
//         helpers.spawnSync([".", "--clean"]);
//         testModule.test(helpers);
//         done();
//     });
// });
