require("../__util__/test-init");

var fs = require("fs");
var autotest = require("../autotest");
var compiler = require("marko/compiler");

autotest("fixtures-html", run);
autotest("fixtures-html-deprecated", run);

function run({ test, resolve, snapshot }) {
    test(() => {
        var templatePath = resolve("index.marko");
        var mainPath = resolve("test.js");
        var main;

        if (!fs.existsSync(templatePath)) {
            templatePath = resolve("template.marko");
            if (!fs.existsSync(templatePath)) {
                throw new Error("Template not found for test");
            }
        }

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
        } else if (main && main.checkTemplate) {
            var template = require("marko").load(
                templatePath,
                Object.assign(compilerOptions, main.compilerOptions)
            );
            main.checkTemplate(template);
        } else {
            var compiledSrc = compiler.compileFile(
                templatePath,
                Object.assign(compilerOptions, main && main.compilerOptions)
            );
            compiledSrc = compiledSrc.replace(/marko\/dist\//g, "marko/src/");
            snapshot(compiledSrc, ".js");
        }
    });
}
