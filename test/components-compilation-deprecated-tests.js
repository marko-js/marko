require('./util/patch-module');

var fs = require('fs');
var path = require('path');
var autotest = require('./autotest');
var compiler = require('marko/compiler');
var expect = require('chai').expect;

require('marko/node-require').install();

describe('marko/components (compilation, deprecated)', function() {
    var autoTestDir = path.join(__dirname, 'autotests/components-compilation-deprecated');

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

        var compilerOptions = { writeVersionComment: false };

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFile(templatePath, compilerOptions);
            } catch(_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();

        } else if(main && main.checkTemplate) {
            var template = require('marko').load(templatePath, Object.assign(compilerOptions, main.compilerOptions));
            main.checkTemplate(template);
            done();
        } else {
            var compiledSrc = compiler.compileFile(templatePath, Object.assign(compilerOptions, main && main.compilerOptions));
            helpers.compare(compiledSrc, '.js');
            done();
        }
    });
});
