"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var compiler = require("marko/compiler");
var builder = compiler.createBuilder();
var autotest = require("../autotest");
var fs = require("fs");
var CompileContext = require("marko/compiler/CompileContext");
var HtmlJsParser = require("marko/compiler/HtmlJsParser");
var Parser = require("marko/compiler/Parser");
var parser = new Parser(new HtmlJsParser());

compiler.buildTaglibLookup(__dirname);

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var templatePath = resolve("template.marko");
        var src = fs.readFileSync(templatePath, { encoding: "utf8" });
        var context = new CompileContext(src, templatePath, builder);
        var ast = parser.parse(src, context);
        snapshot(ast, ".json");
    });
});
