"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var path = require("path");
var compiler = require("../../compiler");
var autotest = require("../autotest");
var fs = require("fs");

const EXTENSIONS = [".marko", ".xml.marko"];

function runTestForExtension(dir, snapshot, extension, done) {
    var templatePath = path.join(dir, `template${extension}`);

    if (!fs.existsSync(templatePath)) {
        return false;
    }

    var mainPath = path.join(dir, "test.js");
    var main;

    if (fs.existsSync(mainPath)) {
        main = require(mainPath);
    }

    var compilerOptions = {
        output: "html",
        writeVersionComment: false,
        autoKeyEnabled: true
    };

    if (main && main.checkError) {
        var e;

        try {
            compiler.compileFile(templatePath, compilerOptions);
        } catch (_e) {
            e = _e;
        }

        if (!e) {
            throw new Error("Error expected");
        }

        main.checkError(e);
        done();
    } else if (main && main.checkTemplate) {
        var template = require("marko").load(
            templatePath,
            Object.assign(compilerOptions, main.compilerOptions)
        );
        main.checkTemplate(template, snapshot);
        done();
    } else {
        var compiledSrc = compiler.compileFile(
            templatePath,
            Object.assign(compilerOptions, main && main.compilerOptions)
        );
        compiledSrc = compiledSrc.replace(/marko\/dist\//g, "marko/src/");
        snapshot(compiledSrc, ".js");
        done();
    }

    return true;
}

autotest("fixtures-html", ({ test, dir, snapshot }) => {
    test(done => {
        for (let i = 0; i < EXTENSIONS.length; i++) {
            const extension = EXTENSIONS[i];
            let complete = runTestForExtension(dir, snapshot, extension, done);

            if (complete) {
                return;
            }
        }
    });
});
