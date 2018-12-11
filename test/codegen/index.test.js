"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var expect = require("chai").expect;

var path = require("path");
var compiler = require("../../compiler");
var builder = compiler.createBuilder();
var autotest = require("../autotest");

var CompileContext = require("marko/compiler/CompileContext");
var CodeGenerator = require("marko/compiler/CodeGenerator");
var CodeWriter = require("marko/compiler/CodeWriter");

function createCodeGenerator(context) {
    return new CodeGenerator(context);
}

function createCodeWriter(context) {
    return new CodeWriter(context, builder);
}

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(done => {
        var main = require(resolve("index.js"));
        var generateCodeFunc = main;
        var skipCodegen = main.skipCodegen === true;

        var context = new CompileContext(
            "dummy",
            resolve("dummy.marko"),
            builder
        );
        var codegen = createCodeGenerator(context);
        var codeWriter = createCodeWriter(context);

        var ast = generateCodeFunc(builder, codegen);
        var finalAST = skipCodegen ? ast : codegen.generateCode(ast);

        codeWriter.write(finalAST);

        var actualSrc = codeWriter.getCode();
        actualSrc = actualSrc.replace(/marko\/dist\//g, "marko/src/");

        snapshot(actualSrc, { ext: ".js" });
        done();
    });
});

describe("codegen", function() {
    it("should not allow a return outside a function", function() {
        let builder = compiler.createBuilder();

        var context = new CompileContext(
            "dummy",
            path.join(__dirname, "dummy.marko"),
            builder
        );
        var codegen = createCodeGenerator(context);

        var rootNode = builder.program([builder.returnStatement("foo")]);

        expect(function() {
            codegen.generateCode(rootNode);
        }).to.throw('"return" not allowed outside a function body');
    });
});
