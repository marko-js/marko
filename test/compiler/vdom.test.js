'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../../compiler');
var autotest = require('../autotest');
var fs = require('fs');

require('marko/node-require').install();

describe('compiler (vdom)', function () {
    var autoTestDir = path.join(__dirname, './fixtures-vdom');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        var compilerOptions = { writeVersionComment: false, autoKeyEnabled: true };

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFileForBrowser(templatePath, compilerOptions);
            } catch (_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();
        } else {
            var compiledTemplate = compiler.compileFileForBrowser(templatePath, Object.assign(compilerOptions, main && main.compilerOptions));

            if (main && main.checkTemplate) {
                main.checkTemplate(compiledTemplate);
            } else {
                var actualSrc = compiledTemplate.code;
                actualSrc = actualSrc.replace(/marko\/dist\//g, 'marko/src/');
                helpers.compare(actualSrc, '.js');
            }

            done();
        }
    });
});
