"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var compiler = require("../../compiler");
var autotest = require("../autotest");
var fs = require("fs");

autotest("fixtures", ({ test, resolve, snapshot }) => {
    test(() => {
        var templatePath = resolve("template.marko");
        var mainPath = resolve("test.js");
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        var compilerOptions = {
            output: "vdom",
            writeVersionComment: false,
            autoKeyEnabled: false
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
        } else {
            var compiledTemplate = compiler.compileFileForBrowser(
                templatePath,
                Object.assign(compilerOptions, main && main.compilerOptions)
            );
            var actualSrc = compiledTemplate.code;
            actualSrc = actualSrc.replace(/marko\/dist\//g, "marko/src/");
            snapshot(actualSrc, ".js");
        }
    });
});
