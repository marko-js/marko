require('../__util__/test-init');

var fs = require('fs');
var path = require('path');
var autotest = require('../autotest');
var compiler = require('marko/compiler');

describe('components-compilation (vdom)', function () {
    var autoTestDir = path.join(__dirname, './fixtures-vdom');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'index.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (!fs.existsSync(templatePath)) {
            templatePath = path.join(dir, 'template.marko');
            if (!fs.existsSync(templatePath)) {
                return done(new Error('Template not found for test'));
            }
        }

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        var compilerOptions = { output: 'vdom', writeVersionComment: false, autoKeyEnabled: true };

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFile(templatePath, compilerOptions);
            } catch (_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();
        } else if (main && main.checkTemplate) {
            var template = require('marko').load(templatePath, Object.assign(compilerOptions, main.compilerOptions));
            main.checkTemplate(template);
            done();
        } else {
            var compiledSrc = compiler.compileFile(templatePath, Object.assign(compilerOptions, main && main.compilerOptions));
            compiledSrc = compiledSrc.replace(/marko\/dist\//g, 'marko/src/');
            helpers.compare(compiledSrc, '.js');
            done();
        }
    });
});
