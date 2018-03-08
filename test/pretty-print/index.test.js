"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var path = require("path");
var compiler = require("../../compiler");
var builder = compiler.createBuilder();
var autotest = require("../autotest");

describe("compiler/pretty-print", function() {
    var autoTestDir = path.join(__dirname, "./fixtures");

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var getAST = require(path.join(dir, "index.js"));
        var ast = getAST(builder);
        helpers.compare(ast, ".json");
        return done();
    });
});
