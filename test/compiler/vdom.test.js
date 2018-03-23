"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var compiler = require("../../compiler");
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures-vdom", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(done => {
        var templatePath = resolve("template.marko");
        var mainPath = resolve("test.js");
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        var compilerOptions = {
            writeVersionComment: false,
            autoKeyEnabled: true
        };

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFileForBrowser(templatePath, compilerOptions);
            } catch (_e) {
                e = _e;
            }

            if (!e) {
                throw new Error("Error expected");
            }

            main.checkError(e);
            done();
        } else {
            var compiledTemplate = compiler.compileFileForBrowser(
                templatePath,
                Object.assign(compilerOptions, main && main.compilerOptions)
            );

            if (main && main.checkTemplate) {
                main.checkTemplate(compiledTemplate);
            } else {
                var actualSrc = compiledTemplate.code;
                actualSrc = actualSrc.replace(/marko\/dist\//g, "marko/src/");
                snapshot(actualSrc, ".js");
            }

            done();
        }
    });
});
